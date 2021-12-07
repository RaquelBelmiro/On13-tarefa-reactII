import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Image from '../../assets/ilustra.svg'
import Footer from '../../components/Footer/Footer'

import './home.styles.css'

const Home = () => {
 return (
   <>
    <Menu />
    <Header image={Image}>Seja bem vinda ao meu mundo!</Header>
    <div className="texto">
      <h3>A inovação acontece nas intersecções. E essa soma de diferentes repertórios e vivências podem moldar a construção de uma nova estrutura social para 2021 e além.</h3>
    </div>
    <Footer />
  </>
 )
}

export default Home 