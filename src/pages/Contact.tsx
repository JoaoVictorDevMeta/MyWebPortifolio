import Mailer from '../components/Mailer'

import myImage from '../assets/eu - Copia.jpg';
import vector from '../assets/Vector 1 (1).png';

function Contact() {
  return (
    <div className='contact'>
      <div className='image'>
        <img src={myImage} alt="DesenhoDaMinhaPessoa" className='my-image' />
        <img src={vector} alt="vetor" className='vetor'/>
      </div>
      <div className='contact-form'>
        <div className='send-mail'>
          <Mailer variant='secondary'/>
        </div>
      </div>
    </div>
  )
}

export default Contact