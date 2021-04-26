import { useState } from 'react'
import Button from "./Button"

const VigenereEncrypt = ({ onClose, onEncrypt }) => {
  const [plaintext, setPlaintext] = useState('')
  const [key, setKey] = useState('')
  const [ciphertext, setCiphertext] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!plaintext || !key) {
      alert("Input Plaintext and Key")
      return
    }

    if(plaintext.indexOf(' ') >= 0) {
      alert("Plaintext Must Be One Word")
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
      "text": plaintext,
      "key": key
    }

    fetch("http://localhost:8000/vigenere/encrypt", {
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
      <h2 style={myStyle}>Vigenere Cipher Encryption</h2>
      <form id='eVigenere' onSubmit={onSubmit}>
        <div className="form">
          <label>Plaintext: </label>
          <input type='text' placeholder='Plaintext' value={plaintext} onChange={(e) => {setPlaintext(e.target.value)}} />
          <label>Key Word: </label>
          <input type='text' placeholder='Key Word' value={key} onChange={(e) => {setKey(e.target.value)}} />
        </div>
      </form>

      <Button form={"eVigenere"} type={"submit"} style={btn1Style} text={"Encrypt"} />
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

export default VigenereEncrypt
