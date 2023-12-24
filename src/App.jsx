import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";

const postsData = [
  {
    id: 1,
    author: "Jane Cooper",
    role: "Dev Front-end",
    avatar:
      "https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D",
    publishedAt: "11/06/2022 08:13 AM",
    content: `Fala galeraa 👋! Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀.`,
    link: "👉 jane.design/doctorcare",
    hashs: ["#novoprojeto", "#nlw", "#rocketseat"],
  },
  {
    id: 2,
    author: "Devon Lane",
    role: "Dev Front-end",
    avatar:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "08/06/2022 16:58 AM",
    content: `Fala pessoal 👋! Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻.`,
    link: "👉 devonlane.design",
    hashs: ["#uxui", "#userexperience"],
  },
];
export function App() {
  return (
    <>
      <Header />
      <div style={styles.wrapper}>
        <SideBar />
        <main>
          {postsData.map((item, index) => {
            return (
              <Post
                key={`${item.id}_${item.author}_${index}`}
                objIndex={index}
                author={item.author}
                role={item.role}
                avatar={item.avatar}
                publishedAt={item.publishedAt}
                content={item.content}
                link={item.link}
                hashs={item.hashs}
              />
            );
          })}
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
