import React from 'react'
import './Card.scss'

type CardProps = {
    title: string;
    description: string;
    Icon: React.ComponentType;
    image: string | null;
    link: string;
}

function Card({title, description, Icon, image, link}: CardProps) {
  return (
    <div className={'card ' + (image && 'image-card')}>
      {image ? <img src={image}/> : <Icon/> }
      <div className='text'>
        <h5>{title}</h5>
        <hr />
        <span>{!image && description}</span>
        {image && <a href={link}>Mais Sobre</a>}
      </div>
    </div>
  )
}

export default Card