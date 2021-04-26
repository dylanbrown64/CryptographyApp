import { useState } from 'react'
import Button from "./Button"

const MasseyOmuraDecrypt = ({ onClose, onEncrypt }) => {
  const [ciphertext, setCiphertext] = useState('')
  const [p, setp] = useState('')
  const [b, setb] = useState('')
  const [plaintext, setPlaintext] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!ciphertext || !p || !b) {
      alert("Input Plaintext and Keys")
      return
    }

    if(p<=128){
      alert("Prime Integer must be Greater Than 128 to Encode")
      return
    }

    const encrypt = {
      "text": ciphertext,
      "public": parseInt(p),
      "private": parseInt(b)
    }

    fetch("http://localhost:8000/MODecrypt", {
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
      <h2 style={myStyle}>Massey-Omura Decryption</h2>
      <form id='dMO' onSubmit={onSubmit}>
        <div className="form">
          <label>Ciphertext: </label>
          <input type='text' placeholder='Ciphertext' value={ciphertext} onChange={(e) => {setCiphertext(e.target.value)}} />
          <label>Public Key: </label>
          <input type='number' placeholder='Prime Integer' value={p} onChange={(e) => {setp(e.target.value)}} />
          <label>Person B's Encryption Number</label>
          <input type='number' placeholder='Encryption Integer' value={b} onChange={(e) => {setb(e.target.value)}} />
        </div>
      </form>

      <Button form={"dMO"} type={"submit"} style={btn1Style} text={"Decrypt"} />
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

export default MasseyOmuraDecrypt
