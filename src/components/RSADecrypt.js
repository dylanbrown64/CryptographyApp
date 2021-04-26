import { useState } from 'react'
import Button from "./Button"

const RSADecrypt = ({ onClose, onEncrypt }) => {
  const [ciphertext, setCiphertext] = useState('')
  const [p, setp] = useState('')
  const [q, setq] = useState('')
  const [privKey, setPrivKey] = useState('')
  const [plaintext, setPlaintext] = useState('')

  const isPrime = (x) => {
    if(x===1){
      return false
    }else if(x===2){
      return true
    }else{
      for(var i=2; i<x; i++){
        if(x%i===0){
          return false
        }
      }
    }
    return true
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(!ciphertext || !p || !q || !privKey) {
      alert("Input Plaintext and Keys")
      return
    }

    if(!isPrime(p) || !isPrime(q)) {
      alert("p And q Must Be Prime")
    }

    if(p*q<=128){
      alert("Base Integer Must be Greater Than 128 to Encode")
      return
    }

    const encrypt = {
      "text": ciphertext,
      "p": parseInt(p),
      "q": parseInt(q),
      "private": parseInt(privKey)
    }

    fetch("http://localhost:8000/RSADecrypt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(encrypt),
    }).then(response => response.json())
      .then(data => setPlaintext(data.text))

  }

  return(
    <div>
      <h2 style={myStyle}>RSA Decryption</h2>
      <form id='dRSA' onSubmit={onSubmit}>
        <div className="form">
          <label>Ciphertext: </label>
          <input type='text' placeholder='Ciphertext' value={ciphertext} onChange={(e) => {setCiphertext(e.target.value)}} />
          <label>Public Key Primes p And q: </label>
          <input type='number' placeholder='Prime p' value={p} onChange={(e) => {setp(e.target.value)}} />
          <input type='number' placeholder='Prime q' value={q} onChange={(e) => {setq(e.target.value)}} />
          <label>Private Key: </label>
          <input type='number' placeholder='Private Integer Key' value={privKey} onChange={(e) => {setPrivKey(e.target.value)}} />
        </div>
      </form>

      <Button form={"dRSA"} type={"submit"} style={btn1Style} text={"Decrypt"} />
      <Button onClick={onClose} style={btn2Style} text={"Close"} />

      <p>Plaintext: {plaintext}</p>
    </div>
  )
}

const myStyle = {
  textAlign: 'center'
}

const btn1Style = {
  backgroundColor: '#69359C',
  color: 'white',
  width: '85px',
  height: '40px',
  border: 'none',
  borderRadius: '4px',
  margin: '10px',
  cursor: 'pointer'
}

const btn2Style = {
  backgroundColor: '#ffc75f',
  color: 'white',
  width: '85px',
  height: '40px',
  border: 'none',
  borderRadius: '4px',
  margin: '10px',
  cursor: 'pointer'
}

export default RSADecrypt
