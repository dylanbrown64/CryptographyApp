import { useState } from 'react'
import Button from "./Button"

const VigenereDecrypt = ({ onClose, onEncrypt }) => {
  const [ciphertext, setCiphertext] = useState('')
  const [key, setKey] = useState('')
  const [plaintext, setPlaintext] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!ciphertext || !key) {
      alert("Input Plaintext and Key")
      return
    }

    if(ciphertext.indexOf(' ') >= 0) {
      alert("Ciphertext Must Be One Word")
      return
    }

    if(key.indexOf(' ') >= 0) {
      alert("Key Must Be One Word")
      return
    }

    if(key.toLowerCase() !== key) {
      alert("Key Must Be Lowercase")
    }

    const encrypt = {
      "text": ciphertext,
      "key": key
    }

    fetch("http://localhost:8000/vigenere/decrypt", {
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
      <h2 style={myStyle}>Vigenere Cipher Decryption</h2>
      <form id='dVigenere' onSubmit={onSubmit}>
        <div className="form">
          <label>Ciphertext: </label>
          <input type='text' placeholder='Ciphertext' value={ciphertext} onChange={(e) => {setCiphertext(e.target.value)}} />
          <label>Key Word: </label>
          <input type='text' placeholder='Key Word' value={key} onChange={(e) => {setKey(e.target.value)}} />
        </div>
      </form>

      <Button form={"dVigenere"} type={"submit"} style={btn1Style} text={"Decrypt"} />
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

export default VigenereDecrypt
