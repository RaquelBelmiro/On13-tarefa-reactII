import { TiSocialGithub, TiSocialLinkedin} from 'react-icons/ti'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import ImageContato from '../../assets/contato.svg'
import Footer from '../../components/Footer/Footer'

import './contato.styles.css'

const Contato = () => {
 return (
   <>
    <Menu />
    <Header image={ImageContato}>Chama no contatinho</Header>
    <div className="redes-sociais">
      <p className="siga">Siga-me nas redes sociais:</p>
      <p>contato@raquelbelmiro</p>
      <div>
        <a href="https://github.com/RaquelBelmiro" target="_blank" rel="noreferrer">
          <TiSocialGithub size={90} color="rgb(56, 56, 56)"/>
        </a>
        <a href="https://www.linkedin.com/in/raquel-belmiro/" target="_blank" rel="noreferrer">
          <TiSocialLinkedin size={90} color="rgb(56, 56, 56)"/>
        </a>
      </div>
    </div>
    <Footer />
  </>
 )
}

export default Contato 