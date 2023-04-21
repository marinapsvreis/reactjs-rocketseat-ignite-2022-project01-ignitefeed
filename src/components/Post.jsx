import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/marinapsvreis.png"
          />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.role}</span>
          </div>
        </div>

        <time title="21 de Abril às 09:17h" dateTime="2023-04-21:09:17:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <div>
          <p>Fala pessoal 👋</p>
          <p>
            Finalmente finalizei meu novo site/portfólio. Foi um baita desafio
            criar todo o design e codar na unha, mas consegui 💪🏻{" "}
          </p>
          <p>
            <a href="">Acesse e deixe seu feedback 👉 devonlane.design</a>
          </p>
          <p>
            <a href="">#uiux</a> <a href="">#userexperience</a>
          </p>
        </div>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
