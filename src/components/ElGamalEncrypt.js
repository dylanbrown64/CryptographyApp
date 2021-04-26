import { useState } from 'react'
import Button from "./Button"

const ElGamalEncrypt = ({ onClose, onEncrypt }) => {
  const [plaintext, setPlaintext] = useState('')
  const [p, setp] = useState('')
  const [g, setg] = useState('')
  const [b, setb] = useState('')
  const [a, seta] = useState('')
  const [ciphertext1, setCiphertext1] = useState('')
  const [ciphertext2, setCiphertext2] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!plaintext || !p || !g || !b || !a) {
      alert("Input Plaintext and Keys")
      return
    }

    if(p<=128){
      alert("Prime Integer must be Greater Than 128 to Encode")
      return
    }

    const encrypt = {
      "text": plaintext,
      "prime": parseInt(p),
      "generator": parseInt(g),
      "base": parseInt(b),
      "key": parseInt(a)
    }

    fetch("http://localhost:8000/ElGamalEncrypt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(encrypt),
    }).then(response => response.json())
      .then(data => {setCiphertext1(data.ciphertext1); setCiphertext2(data.ciphertext2)})

  }

  return(
    <div>
      <h2 style={myStyle}>ElGamal Encryption</h2>
      <form id='eElGamal' onSubmit={onSubmit}>
        <div className="form">
          <label>Plaintext: </label>
          <input type='text' placeholder='Plaintext' value={plaintext} onChange={(e) => {setPlaintext(e.target.value)}} />
          <label>Public Key: </label>
          <input type='number' placeholder='Prime Integer' value={p} onChange={(e) => {setp(e.target.value)}} />
          <input type='number' placeholder='Generator' value={g} onChange={(e) => {setg(e.target.value)}} />
          <input type='number' placeholder='Base Integer' value={b} onChange={(e) => {setb(e.target.value)}} />
          <label>Private Key: </label>
          <input type='number' placeholder='Encryption Integer' value={a} onChange={(e) => {seta(e.target.value)}} />
        </div>
      </form>

      <Button form={"eElGamal"} type={"submit"} style={btn1Style} text={"Encrypt"} />
      <Button onClick={onClose} style={btn2Style} text={"Close"} />

      <p>Ciphertext: {ciphertext1} , {ciphertext2}</p>
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

export default ElGamalEncrypt
