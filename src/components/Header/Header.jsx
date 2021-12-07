import './header.styles.css'

const Header = (props) => {
 return (
    <div className="header">
      <h1>{props.children}</h1>
      <img src={props.image} alt='ilustracao de mulher' />
    </div>
  )
}

export default Header 