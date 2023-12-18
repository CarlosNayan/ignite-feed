import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";

export function App() {
  return (
    <>
      <Header />
      <div style={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author={"Jhon Doe"}
            content={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit placeat labore iure accusantium. Animi pariatur laborum illum ad, quia expedita et at assumenda neque, porro debitis quasi. Omnis, accusantium. Quibusdam."
            }
          />
        </main>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    maxWidth: "70rem",
    margin: "2rem auto",
    padding: "0 1rem",

    display: "grid",
    gridTemplateColumns: "256px 1fr",
    gap: "2rem",
    alignOtems: "flex-start",
  },
};
