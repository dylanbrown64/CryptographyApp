const Button = ({ style, text, onClick, form, type }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className='btn'
      form={form}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button
