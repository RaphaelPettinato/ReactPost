import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gmarconleal.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Raphael Pettinato</strong>
              <time title='09 de junho às 16:58' dateTime='2023-06-09 16:58:00'>Cerca de 1 hora atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>


          <p>Muito bom rapá, parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}