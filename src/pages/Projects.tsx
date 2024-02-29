import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

import ProjectCard from '../components/Project'

interface Item {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  tipo: string;
  github: string;
  link: string;
  hosted: boolean;
}

function Project() {
  const [ items, setItems] = useState<Item[]>([]);
  const galleryCollection = collection(db, 'projects')

  useEffect(() => {
    const getItems = async() => {
      const data = await getDocs(galleryCollection)
      setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id }) as Item))
    }

    getItems();
  },[])

  return (
    <main>
    <div className="projects">
      <div>
        <h1>Meus Projetos</h1>
      </div>
      <div className="projects-container">
        {items.map((item) => (
          <ProjectCard props={item} key={item.id} />
        ))}
      </div>
    </div>
    </main>
  )
}

export default Project