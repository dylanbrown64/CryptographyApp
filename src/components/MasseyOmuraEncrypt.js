import { useState } from 'react'
import Button from "./Button"

const MasseyOmuraEncrypt = ({ onClose, onEncrypt }) => {
  const [plaintext, setPlaintext] = useState('')
  const [p, setp] = useState('')
  const [a, seta] = useState('')
  const [b, setb] = useState('')
  const [ciphertext, setCiphertext] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!plaintext || !p || !a || !b) {
      alert("Input Plaintext and Keys")
      return
    }

    if(p<=128){
      alert("Prime Integer must be Greater Than 128 to Encode")
      return
    }

    const encrypt = {
      "text": plaintext,
      "public": parseInt(p),
      "privatea": parseInt(a),
      "privateb": parseInt(b)
    }

    fetch("http://localhost:8000/MOEncrypt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(encrypt),
    }).then(response => response.json())
      .then(data => setCiphertext(data.text))

  }

  return(
    <div>
      <h2 style={myStyle}>Massey-Omura Encryption</h2>
      <form id='eMO' onSubmit={onSubmit}>
        <div className="form">
          <label>Plaintext: </label>
          <input type='text' placeholder='Plaintext' value={plaintext} onChange={(e) => {setPlaintext(e.target.value)}} />
          <label>Public Key: </label>
          <input type='number' placeholder='Prime Integer' value={p} onChange={(e) => {setp(e.target.value)}} />
          <label>Person A's Encryption Number: </label>
          <input type='number' placeholder='Encryption Integer A' value={a} onChange={(e) => {seta(e.target.value)}} />
          <label>Person B's Encryption Number: </label>
          <input type='number' placeholder='Encryption Integer B' value={b} onChange={(e) => {setb(e.target.value)}} />
        </div>
      </form>

      <Button form={"eMO"} type={"submit"} style={btn1Style} text={"Encrypt"} />
      <Button onClick={onClose} style={btn2Style} text={"Close"} />

      <p>Ciphertext: {ciphertext}</p>
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

export default MasseyOmuraEncrypt
