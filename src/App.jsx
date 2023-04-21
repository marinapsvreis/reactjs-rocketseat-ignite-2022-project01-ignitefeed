import styles from "./App.module.css";
import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Marina Portugal"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam eos adipisci numquam labore? Et, doloribus aliquam. Necessitatibus totam velit eos dignissimos minus maxime! Dicta veniam expedita odio tempora mollitia!"
          />
          <Post author="Diego Fernandes" content="Um novo post muito legal" />
        </main>
      </div>
    </>
  );
}
