import { useContext, useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

import { FilterContext } from '../context/filterContext'
import { Selector } from '../shared/Select'
import Image from '../components/Image'

interface Item {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  favorite: boolean;
}

function Gallery() {
  const [ items, setItems] = useState<Item[]>([]);
  const galleryCollection = collection(db, 'gallery')
  const { filter } = useContext(FilterContext);
  
  useEffect(() => {
    const getItems = async() => {
      const data = await getDocs(galleryCollection)
      setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id }) as Item))
    }

    getItems();
  },[])

  const filteredItems = items.filter(item => filter === 'all' ? true : item.favorite);

  return (
    <div className='gallery'>
      <div className='menu'>
        <h3
          style={{
            fontSize: '28px',
            fontWeight: '300',
          }}
        >Minha Galeria</h3>

        <Selector/>
      </div>
      <div className='images'>
        {filteredItems.map((item) => {
          return <Image item={item} key={item.id}/>
        })}

        {filteredItems.length === 0 ? <p>Nenhuma imagem encontrada</p> : <p>Obrigado pela Atenção!</p>}
      </div>
    </div>
  )
}

export default Gallery