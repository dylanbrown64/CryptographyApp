import { useState } from 'react'
import Button from "./Button"

const ElGamalDecrypt = ({ onClose, onEncrypt }) => {
  const [a, seta] = useState('')
  const [x, setx] = useState('')
  const [p, setp] = useState('')
  const [b, setb] = useState('')
  const [plaintext, setPlaintext] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!a || !x || !p || !b) {
      alert("Input Plaintext and Keys")
      return
    }

    if(p<=128){
      alert("Prime Integer must be Greater Than 128 to Encode")
      return
    }

    const encrypt = {
      "text": x,
      "ciphertext": parseInt(a),
      "prime": parseInt(p),
      "private": parseInt(b)
    }

    fetch("http://localhost:8000/ElGamalDecrypt", {
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
      <h2 style={myStyle}>ElGamal Decryption</h2>
      <form id='dElGamal' onSubmit={onSubmit}>
        <div className="form">
          <label>Ciphertext Pair: </label>
          <input type='text' placeholder='X' value={x} onChange={(e) => {setx(e.target.value)}} />
          <input type='number' placeholder='A' value={a} onChange={(e) => {seta(e.target.value)}} />
          <label>Public Key: </label>
          <input type='number' placeholder='Prime Integer' value={p} onChange={(e) => {setp(e.target.value)}} />
          <label>Private Key: </label>
          <input type='number' placeholder='Decryption Integer' value={b} onChange={(e) => {setb(e.target.value)}} />
        </div>
      </form>

      <Button form={"dElGamal"} type={"submit"} style={btn1Style} text={"Decrypt"} />
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

export default ElGamalDecrypt
