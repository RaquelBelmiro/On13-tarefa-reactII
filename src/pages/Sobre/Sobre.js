import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import ImageAbout from '../../assets/about.svg'
import Footer from '../../components/Footer/Footer'


import './sobre.styles.css'
const Sobre = () => {
 return (
   <>
    <Menu />
    <Header image={ImageAbout}>Prazer, Raquel</Header>
    <div className='main'>
      <img src="https://avatars.githubusercontent.com/u/48841722?s=400&u=1911fcac01b9aedb26ac78ea69f0e8e5c9a8320a&v=4" alt="foto" />
      <div>
        <h2>Raquel Belmiro</h2>
        <p>Desenvolvedora FrontEnd em formação</p>
        <p>Estudante de Sistemas de Informação</p>
      </div>
    </div>
    <Footer />
  </>
 )
}

export default Sobre 