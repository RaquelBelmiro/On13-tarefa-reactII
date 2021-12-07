import {useState, useEffect} from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import ImagePortfolio from '../../assets/portfolio.svg'
import './portfolio.styles.css'

const Portfolio = () => {
  const [repositories, setRepositories] = useState([])
  const [busca, setBusca] =  useState('')
  const [filtro, setFiltro] = useState([])
  useEffect(()=>{
    async function getData(){
      const response = await fetch('https://api.github.com/users/RaquelBelmiro/repos')
      const data = await response.json()

      setRepositories(data)
    }
    getData()
  
  },[])

  useEffect(() => {
    setFiltro(
      repositories.filter(repo =>{
      return repo.name.includes(busca)
      })
    )
  }, [repositories, busca])
  return(
    <>
    <Menu />
    <Header image={ImagePortfolio}>Meus projetos</Header>
    <div className="main">
    <input 
      placeholder="Busque o repositório" 
      onChange={e => setBusca(e.target.value)}
    />

        <div className="card-container" >
          {filtro.map(repo=>
            <div className="card">
              <h3 key={repo.id}>{repo.name}</h3>
              <a href={repo.html_url} target="_blank" rel="noreferrer" className ="enter-repo">
                <BsArrowReturnRight size={16} color="#fff"/>
              </a>
            </div>
          )}
        </div>
    </div>
    <Footer />
  </>
)
}


export default Portfolio 