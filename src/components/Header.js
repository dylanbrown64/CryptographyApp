const Header = ({ title }) => {
  return(
    <header style={headerStyle}>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Cryptography',
}

const headerStyle = {
  background: '#69359C',
  color: '#FFF',
  textAlign: 'center',
  padding: '10px',
}

export default Header
