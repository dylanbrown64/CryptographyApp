import { useState } from 'react'
import Button from "./Button"

const DHGenerate = ({ onClose, onEncrypt }) => {
  const [p, setp] = useState('')
  const [g, setg] = useState('')
  const [a, seta] = useState('')
  const [b, setb] = useState('')
  const [key,setKey] = useState('')

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

    if(!p || !g || !a || !b) {
      alert("Input All Parameters")
      return
    }

    if(!isPrime(p)) {
      alert("Public Key must be Prime")
      return
    }

    const encrypt = {
      "prime": parseInt(p),
      "generator": parseInt(g),
      "integer1": parseInt(a),
      "integer2": parseInt(b)
    }

    fetch("http://localhost:8000/dh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(encrypt),
    }).then(response => response.json())
      .then(data => setKey(data.key))

  }

  return(
    <div>
      <h2 style={myStyle}>Diffie-Hellman Key Generation</h2>
      <form id='dh' onSubmit={onSubmit}>
        <div className="form">
          <label>Public Key: </label>
          <input type='number' placeholder='Prime Number' value={p} onChange={(e) => {setp(e.target.value)}} />
          <input type='number' placeholder='Generator Base' value={g} onChange={(e) => {setg(e.target.value)}} />
          <label>Person A's Private Key: </label>
          <input type='number' placeholder='Private Integer' value={a} onChange={(e) => {seta(e.target.value)}} />
          <label>Person B's Private Key: </label>
          <input type='number' placeholder='Private Integer' value={b} onChange={(e) => {setb(e.target.value)}} />
        </div>
      </form>

      <Button form={"dh"} type={"submit"} style={btn1Style} text={"Get Key"} />
      <Button onClick={onClose} style={btn2Style} text={"Close"} />

      <p>Generated Key: {key}</p>
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

export default DHGenerate
