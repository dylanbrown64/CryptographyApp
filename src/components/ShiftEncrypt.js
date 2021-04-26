import { useState } from 'react'
import Button from "./Button"

const ShiftEncrypt = ({ onClose, onEncrypt }) => {
  const [plaintext, setPlaintext] = useState('')
  const [key, setKey] = useState('')
  const [ciphertext, setCiphertext] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!plaintext || !key) {
      alert("Input Plaintext and Key")
      return
    }

    const encrypt = {
      "text": plaintext,
      "key": parseInt(key)
    }

    fetch("http://localhost:8000/shiftEncrypt/encrypt", {
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
      <h2 style={myStyle}>Shift Cipher Encryption</h2>
      <form id='eShift' onSubmit={onSubmit}>
        <div className="form">
          <label>Plaintext: </label>
          <input type='text' placeholder='Plaintext' value={plaintext} onChange={(e) => {setPlaintext(e.target.value)}} />
          <label>Key: </label>
          <input type='number' placeholder='Key' value={key} onChange={(e) => {setKey(e.target.value)}} />
        </div>
      </form>

      <Button form={"eShift"} type={"submit"} style={btn1Style} text={"Encrypt"} />
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

export default ShiftEncrypt
