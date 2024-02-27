import './Image.scss'

type Imagem = {
  item:{
    imageURL: string
    title: string
    description: string
  }
}

function Image({item}:Imagem) {
  return (
    <div className='imageCard'>
      <img src={item.imageURL} alt="MyDrawings" />
      <div className='information'>
        <h4>{item.title}</h4>
        <span>{item.description}</span>
      </div>
    </div>
  )
}

export default Image