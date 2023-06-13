import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'


function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/RaphaelPettinato.png',
        name: 'Raphael Pettinato',
        role: 'Front-end developer'
      },
      content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-06-11 17:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/EvertonDays.png',
        name: 'Everton Dias',
        role: 'Front-end developer'
      },
      content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-06-21 17:00:00'),
    },
  ]

  return (
    <div>
      <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content= {post.content}
              publishedAt= {post.publishedAt}
            />
        )
        })}
      </main>
     </div>
    </div>
  )
}

export default App
