import { useState } from "react";

export function Post({
  objIndex,
  author,
  role,
  avatar,
  publishedAt,
  content,
  link,
  hashs,
}) {
  const [isLinkHovered, setLinkIsHovered] = useState(false);
  const [hashsIsHovered, setHashsIsHovered] = useState(null);

  const publishedAtSplited = publishedAt.split(" ");

  return (
    <article style={styles(objIndex, undefined).post}>
      <header style={styles().header}>
        <div style={styles().authorInfo}>
          <img style={styles().avatar} src={avatar} alt="" />
          <div>
            <strong style={styles().author}>{author}</strong>
            <span style={styles().role}>{role}</span>
          </div>
        </div>

        <time
          style={styles().time}
          title={`Publicado em ${publishedAtSplited[0]}, às ${publishedAtSplited[1]} ${publishedAtSplited[2]}`}
        >{`Publicado em ${publishedAtSplited[0]}`}</time>
      </header>

      <div style={styles().content}>
        <p style={styles().topic}>{content}</p>
        <p style={styles().linkAndHashsParagraph}>
          <a
            style={styles(null, isLinkHovered).link}
            onMouseEnter={() => setLinkIsHovered(true)}
            onMouseLeave={() => setLinkIsHovered(false)}
            href=""
          >
            {link}
          </a>
        </p>
        <p style={styles().linkAndHashsParagraph} key={null}>
          {hashs.map((item, index) => {
            return (
              <a
                key={`${item}_${index}`}
                style={styles(null, index === hashsIsHovered).hashs}
                onMouseEnter={() => setHashsIsHovered(index)}
                onMouseLeave={() => setHashsIsHovered(null)}
                href=""
              >
                {item}
              </a>
            );
          })}
        </p>
      </div>
    </article>
  );
}

const styles = (objIndex, elHovered) => {
  return {
    post: {
      background: "var(--gray-800)",
      borderRadius: "8px",
      padding: "2.5rem",
      marginTop: objIndex > 0 ? "2rem" : 0,
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    authorInfo: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.6,
    },
    author: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      color: "var(--gray-100)",
    },
    time: {
      fontSize: "0.875rem",
      cursor: "default",
    },
    role: {
      fontSize: "0.875rem",
      color: "var(--gray-400)",
    },
    avatar: {
      width: "72px",
      height: "72px",
      objectFit: "cover",
      borderRadius: "8px",
      padding: 4,
      border: "2px solid var(--Brand-Colors-Ignite-light, #00B37E)",
    },
    content: {
      lineHeight: 1.6,
      color: "var(--gray-300)",
      marginTop: "1.5rem",
    },
    topic: {
      marginTop: "1.5rem",
    },
    linkAndHashsParagraph: {
      marginTop: "1rem",
      display: "flex",
      flexDirection: "row",
    },
    link: {
      textDecoration: "none",
      fontWeight: "bold",
      color: elHovered ? "var(--green-300)" : "var(--green-500)",
    },
    hashs: {
      margin: 3,
      textDecoration: "none",
      fontWeight: "bold",
      color: elHovered ? "var(--green-300)" : "var(--green-500)",
    },
  };
};
