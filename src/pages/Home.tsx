import { useRef } from 'react'

import myImage from '../assets/eu - Copia.jpg';
import Card1 from '../assets/Card1.jpg';
import Card2 from '../assets/Card2.png';
import Card3 from '../assets/Card3.jpg';
import vector from '../assets/Vector 1 (1).png';
import { GiPencilBrush } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs, FaReact, FaInstagram, FaGithub, FaHtml5, FaCss3, FaPython } from "react-icons/fa";
import { SiSqlite, SiMongodb, SiExpress } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

import Card from "../components/Card";
import Button from "../shared/Button";

function Home() {
  const myWorks = useRef<HTMLHeadingElement>(null);

  const executeScroll = () => {
    if (myWorks.current) {
      myWorks.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main>
        <div className='land-info'>
          <div className='image'>
            <img src={myImage} alt="DesenhoDaMinhaPessoa" className='my-image' />
            <img src={vector} alt="vetor" className='vetor'/>
          </div>
          <div className='land-text'>
            <h2>Olá. Sou o João Victor  </h2>
            <h1>Entusiasta de Desenhos & Desenvolvimento</h1>
            <p>Cursando Informática no IFPB eu Full-Stack Developer Junior, João Victor, estou disposto a trazer inovação para o mundo. Procuro sempre aprender algo novo, isso que me encanta no mundo da tecnologia.</p>
            <Button variant="secondary" onClick={executeScroll} width="260px" height="60px">Veja os trabalhos</Button>
          </div>
          <ul className='social-media'>
            <li>
              <a href="https://www.linkedin.com/in/joaovictordevmeta/" target='_black'><span>linkedin</span><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/joaovictorgr/" target='_black'><span>@joaovictorgr</span><FaInstagram /></a>
            </li>
            <li>
              <a href="https://github.com/JoaoVictorDevMeta" target='_black'><span>JoaoVictorDevMeta</span><FaGithub /></a>
            </li>
          </ul>
        </div>

        <section>
          <h1>SERVIÇOS</h1>

          <div className='cards'>
            <Card title="Front-End" description="Desde de Frameworks como o React até o HTML puro" Icon={FaReact} image={null} link="" />
            <Card title="Desenhos ou Artes" description="Faço desenhos no papel e digitais, sou bem maleável em estilo" Icon={GiPencilBrush} image={null} link="" />
            <Card title="Back-End" description="Utilizo das melhores ferramentes para garantir um ótimo resultado" Icon={FaNodeJs} image={null} link="" />
          </div>

          <h1 ref={myWorks}>MEU TRABALHO</h1>

          <div className='cards'>
            <Card title="Desenvolvimento" description="Description" Icon={FaReact} image={Card2} link="/projects" />
            <Card title="Desenhos" description="Description" Icon={FaReact} image={Card1} link="/gallery" />
            <Card title="Sobre Mim" description="Description" Icon={FaReact} image={Card3} link="/about" />
          </div>

          <h1>LINGUAGENS E FRAMEWORKS</h1>

          <div className='cards langs'>
            <Card title="HTML" description="1 Ano de Experiencia" Icon={FaHtml5} image={null} link="" />
            <Card title="CSS" description="1 Ano de Experiencia" Icon={FaCss3} image={null} link="" />
            <Card title="Javascript" description="1 Ano de Experiencia" Icon={IoLogoJavascript} image={null} link="" />
            <Card title="Python" description="1 Ano de Experiencia" Icon={FaPython} image={null} link="" />
            <Card title="Node.js" description="6 meses de Experiencia" Icon={FaNodeJs} image={null} link="" />
            <Card title="React" description="6 meses de Experiencia" Icon={FaReact} image={null} link="" />
            <Card title="SQLite" description="6 meses de Experiencia" Icon={SiSqlite} image={null} link="" />
            <Card title="MongoDB" description="6 meses de Experiencia" Icon={SiMongodb} image={null} link="" />
            <Card title="ExpressJs" description="6 meses de Experiencia" Icon={SiExpress} image={null} link="" />
          </div>

          <h1
            style={{
              letterSpacing: '1px',
              fontWeight: '300',
            }}
          >Gostou? Entre em contato para Conversarmos!</h1>

          <p
            style={{
              fontSize: '24px',
              cursor: 'pointer',
              textAlign: 'center',
            }}
            onClick={scrollToTop}
          >Voltar para o Topo <IoIosArrowUp /></p>

        </section>
    </main>
  )
}

export default Home