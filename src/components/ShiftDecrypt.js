import { useState } from 'react'
import Button from "./Button"

const ShiftDecrypt = ({ onClose, onDecrypt }) => {
  const [ciphertext, setCiphertext] = useState('')
  const [key, setKey] = useState('')
  const [plaintext, setPlaintext] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!ciphertext || !key) {
      alert("Input Plaintext and Key")
      return
    }

    const decrypt = {
      "text": ciphertext,
      "key": parseInt(key)
    }

    fetch("http://localhost:8000/shiftEncrypt/decrypt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(decrypt),
    }).then(response => response.json())
      .then(data => setPlaintext(data.text))

  }

  return(
    <div>
      <h2 style={myStyle}>Shift Cipher Decryption</h2>
      <form id='dShift' onSubmit={onSubmit}>
        <div className="form">
          <label>Ciphertext: </label>
          <input type='text' placeholder='Ciphertext' value={ciphertext} onChange={(e) => {setCiphertext(e.target.value)}} />
          <label>Key: </label>
          <input type='number' placeholder='Key' value={key} onChange={(e) => {setKey(e.target.value)}} />
        </div>
      </form>

      <Button form={"dShift"} type={"submit"} style={btn1Style} text={"Decrypt"} />
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

export default ShiftDecrypt
