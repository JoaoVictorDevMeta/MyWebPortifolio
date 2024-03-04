import MyImage from '../assets/euPhoto.jpg';

function About() {
  return (
    <main>
        <div className='about'>
            <div className='text'>
                <h1>SOBRE MIM</h1>
                <h2>Atualmente estudante de Informática do IFPB, João Pessoa</h2>
                <p>
                    Desde o meu ingresso no curso Técnico Integrado em Informática, em 2022, tenho estudado tecnologias relacionadas ao desenvolvimento web, Front-End e Back-End, além de cybersegurança.
                    Durante esse período, participei de competições de programação, como a OBI, a OPI e a Maratona de Programação do SBC.
                </p>
                <p>
                    Entre as conquistas desses estudos, destaco a minha classificação na OPI <a href="http://www.dsc.ufcg.edu.br/~opi/">( Olipiada Paraibana de Informática )</a>, na qual conquistei a medalha de ouro, 
                    e o projeto Polo de Inovação do IFPB, no qual fui bolsista.
                </p>
                <p>
                    Atualmente estou aprofundando conhecimentos em cybersegurança com o programa <a href="https://hackersdobem.org.br">Hackers do Bem</a>, apoiado pelo SENAI, RNP, e Ministério da Ciência, Tecnologias e Informações.
                </p>
                <p>
                    Os desenhos deste projeto são fruto de um longo treino e estudo, que durou cerca de 5 anos e ainda está em constante desenvolvimento. Eles representam uma parte muito significativa da minha vida e refletem aquilo que eu mais gosto e me dedico.
                </p>
            </div>
            <div className='my-image'>
                <img src={MyImage} alt="MyPhoto" />
            </div>
        </div>
    </main>
  )
}

export default About