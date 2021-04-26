from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import math


class Shift(BaseModel):
    text: str
    key: int


class Vigenere(BaseModel):
    text: str
    key: str


class DiffieH(BaseModel):
    prime: int
    generator: int
    integer1: int
    integer2: int


class RSAe(BaseModel):
    text: str
    public: int
    private: int


class RSAd(BaseModel):
    text: str
    p: int
    q: int
    private: int


class ElGamale(BaseModel):
    text: str
    prime: int
    generator: int
    base: int
    key: int


class ElGamald(BaseModel):
    text: str
    ciphertext: int
    prime: int
    private: int


class MasseyOmurae(BaseModel):
    text: str
    public: int
    privatea: int
    privateb: int


class MasseyOmurad(BaseModel):
    text: str
    public: int
    private: int


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/shiftEncrypt/{action}')
def shift_encrypt(shift: Shift, action: str):
    key = shift.key
    if action == 'encrypt':
        ciphertext = ""
        for ch in shift.text:
            if ch.isspace():
                ciphertext += " "
            elif ch.isupper():
                ciphertext += chr(((ord(ch) - 65 + key) % 26) + 65)
            else:
                ciphertext += chr(((ord(ch) - 97 + key) % 26) + 97)
        return {"text": ciphertext}
    if action == 'decrypt':
        plaintext = ""
        for ch in shift.text:
            if ch.isspace():
                plaintext += " "
            elif ch.isupper():
                plaintext += chr(((ord(ch) - 65 - key) % 26) + 65)
            else:
                plaintext += chr(((ord(ch) - 97 - key) % 26) + 97)
        return {"text": plaintext}


@app.post('/vigenere/{action}')
def vigenere(v: Vigenere, action: str):
    key = v.key
    text = v.text
    x = 0
    while len(key) < len(text):
        key += key[x]
        x += 1
    if action == 'encrypt':
        ciphertext = ""
        for i in range(len(text)):
            if text[i].isupper():
                ciphertext += chr((((ord(text[i]) - 65) + (ord(key[i])-97)) % 26) + 65)
            else:
                ciphertext += chr((((ord(text[i]) - 97) + (ord(key[i])-97)) % 26) + 65)
        return {"text": ciphertext}
    if action == 'decrypt':
        plaintext = ""
        for i in range(len(text)):
            if text[i].isupper():
                plaintext += chr((((ord(text[i]) - 65) - (ord(key[i])-97)) % 26) + 65)
            else:
                plaintext += chr((((ord(text[i]) - 97) - (ord(key[i])-97)) % 26) + 65)
        return {"text": plaintext}


@app.post('/dh')
def diffie_hellman(dh: DiffieH):
    p = dh.prime
    g = dh.generator
    a = dh.integer1
    b = dh.integer2

    a_big = g**a % p
    b_big = g**b % p

    s_a = b_big**a % p
    s_b = a_big**b % p

    if s_a == s_b:
        k = str(s_a)
        return {"key": k}
    else:
        return {"key": "Key Generation Failed: Choose a valid generator"}


@app.post('/RSAEncrypt')
def rsa_encrypt(rsa: RSAe):
    plaintext = rsa.text
    n = rsa.public
    e = rsa.private

    encode = []
    for ch in plaintext:
        encode.append(ord(ch))

    ct = []
    for pt in encode:
        ct.append(pt**e % n)

    encode_str = " ".join([str(i) for i in encode])
    ciphertext = " ".join([str(i) for i in ct])

    return {"e": encode_str, "text": ciphertext}


@app.post('/RSADecrypt')
def rsa_decrypt(rsa: RSAd):
    ciphertext = rsa.text
    p = rsa.p
    q = rsa.q
    d = rsa.private

    n = p*q

    ct = ciphertext.split()

    pt = []
    for c in ct:
        c = int(c)
        pt.append(c**d % n)

    pt_char = []
    for p in pt:
        pt_char.append(chr(p))

    plaintext = "".join([str(i) for i in pt_char])
    return {"text": plaintext}


@app.post('/ElGamalEncrypt')
def elgamal_encrypt(eg: ElGamale):
    plaintext = eg.text
    p = eg.prime
    g = eg.generator
    b = eg.base
    a = eg.key

    a_big = g**a % p
    s = b**a % p

    x = []
    for pt in plaintext:
        pt = ord(pt)
        x.append(pt*s % p)

    ciphertext = " ".join([str(i) for i in x])
    a_str = str(a_big)
    return {"ciphertext1": ciphertext, "ciphertext2": a_str}


@app.post('/ElGamalDecrypt')
def elgamal_decrypt(eg: ElGamald):
    x = eg.text
    a = eg.ciphertext
    p = eg.prime
    b = eg.private

    s = a**b % p
    s_inv = pow(s, -1, p)

    ct = x.split()

    pt = []
    for c in ct:
        c = int(c)
        pt.append(c*s_inv % p)

    pt_char = []
    for p in pt:
        pt_char.append(chr(p))

    plaintext = "".join([str(i) for i in pt_char])
    return {"text": plaintext}


@app.post('/MOEncrypt')
def massey_omura_encrypt(mo: MasseyOmurae):
    plaintext = mo.text
    p = mo.public
    a = mo.privatea
    b = mo.privateb

    if math.gcd(a, p-1) == 1 and math.gcd(b, p-1) == 1:
        a_inv = pow(a, -1, p - 1)

        ct = []
        for pt in plaintext:
            pt = ord(pt)
            m1 = pt ** a % p
            m2 = m1 ** b % p
            m3 = m2 ** a_inv % p

            ct.append(m3)

        ciphertext = " ".join([str(i) for i in ct])
        return {"text": ciphertext}
    else:
        return {"text": "Encryption Failed: Invalid Encryption Integer"}


@app.post('/MODecrypt')
def massey_omura_decrypt(mo: MasseyOmurad):
    ciphertext = mo.text
    p = mo.public
    b = mo.private

    if math.gcd(b, p-1) == 1:
        b_inv = pow(b, -1, p-1)

        ct = ciphertext.split()

        pt = []
        for c in ct:
            c = int(c)
            pt.append(c**b_inv % p)

        pt_char = []
        for p in pt:
            pt_char.append(chr(p))

        plaintext = "".join([str(i) for i in pt_char])
        return {"text": plaintext}
    else:
        return {"text": "Encryption Failed: Invalid Encryption Integer"}
