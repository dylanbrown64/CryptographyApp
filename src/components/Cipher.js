import Button from './Button'
import { Link } from 'react-router-dom'

const Cipher = ({ cipher, onEncrypt, onDecrypt, onInfo }) => {
  return(
    <div className='cipher' style={cipherStyle}>
      <h3>{cipher.name}</h3>
      <Button onClick={onEncrypt} style={btn1Style} text='Encrypt' />
      <Button onClick={onDecrypt} style={btn2Style} text='Decrypt' />
      <Link to={onInfo}>
        <Button style={btn3Style} text='Info' />
      </Link>
      <p>{cipher.desc}</p>
    </div>
  )
}

const cipherStyle = {
  border: '1px solid gray',
  background: '#f4f4f4',
  textAlign: 'center'
}

const btn1Style = {
  backgroundColor: '#ffc75f',
  color: 'white',
  width: '85px',
  height: '40px',
  border: 'none',
  borderRadius: '4px',
  marginLeft: '10px',
  marginRight:'10px',
  cursor: 'pointer'
}

const btn2Style = {
  backgroundColor: '#ff5e78',
  color: 'white',
  width: '85px',
  height: '40px',
  border: 'none',
  borderRadius: '4px',
  marginLeft: '10px',
  marginRight:'10px',
  cursor: 'pointer'
}

const btn3Style = {
  backgroundColor: '#EEE0B1',
  color: 'white',
  width: '85px',
  height: '40px',
  border: 'none',
  borderRadius: '4px',
  marginLeft: '10px',
  marginRight:'10px',
  cursor: 'pointer'
}

export default Cipher
