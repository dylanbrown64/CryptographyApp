import { useState } from 'react'
import Button from "./Button"

const RSAEncrypt = ({ onClose, onEncrypt }) => {
  const [plaintext, setPlaintext] = useState('')
  const [pubKey, setPubKey] = useState('')
  const [privKey, setPrivKey] = useState('')
  const [ciphertext, setCiphertext] = useState('')
  const [encode, setEncode] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!plaintext || !pubKey || !privKey) {
      alert("Input Plaintext and Keys")
      return
    }

    if(pubKey<=128){
      alert("Base Integer must be Greater Than 128 to Encode")
      return
    }

    const encrypt = {
      "text": plaintext,
      "public": parseInt(pubKey),
      "private": parseInt(privKey)
    }

    fetch("http://localhost:8000/RSAEncrypt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(encrypt),
    }).then(response => response.json())
      .then(data => {setEncode(data.e); setCiphertext(data.text)})

  }

  return(
    <div>
      <h2 style={myStyle}>RSA Encryption</h2>
      <form id='eRSA' onSubmit={onSubmit}>
        <div className="form">
          <label>Plaintext: </label>
          <input type='text' placeholder='Plaintext' value={plaintext} onChange={(e) => {setPlaintext(e.target.value)}} />
          <label>Public Key: </label>
          <input type='number' placeholder='Base Integer' value={pubKey} onChange={(e) => {setPubKey(e.target.value)}} />
          <input type='number' placeholder='Encryption Integer' value={privKey} onChange={(e) => {setPrivKey(e.target.value)}} />
        </div>
      </form>

      <Button form={"eRSA"} type={"submit"} style={btn1Style} text={"Encrypt"} />
      <Button onClick={onClose} style={btn2Style} text={"Close"} />

      <p>Plaintext Encoded: {encode}</p>
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

export default RSAEncrypt
