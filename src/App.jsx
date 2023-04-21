import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Marina Portugal"
            role="Web Developer"
          />

          <Post
            author="Marina Portugal"
            role="Web Developer"
          />
        </main>
      </div>
    </>
  );
}
