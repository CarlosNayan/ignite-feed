export function Post({
  author,
  role,
  avatar,
  publishedAt,
  content,
  link,
  hashs,
}) {
  const publishedAtSplited = publishedAt.split(" ");

  return (
    <article style={styles.post}>
      <header>
        <div style={styles.authorInfo}>
          <img style={styles.avatar} src={avatar} alt="" />
          <div>
            <strong style={styles.author}>{author}</strong>
            <span style={styles.role}>{role}</span>
          </div>
        </div>

        <time>{`Publicado em ${publishedAtSplited[0]}, às ${publishedAtSplited[1]} ${publishedAtSplited[2]}`}</time>
      </header>

      <div style={styles.content}>
        <p>{content}</p>
        <p style={styles.link}>
          <a href="">{link}</a>
        </p>
        <p style={styles.hashs}>
          {hashs.map((item, index) => {
            return (
              <>
                <a href="">{item}</a>
              </>
            );
          })}
        </p>
      </div>
    </article>
  );
}

const styles = {
  post: {},
  authorInfo: {},
  author: {},
  role: {},
  avatar: {},
  content: {},
  link: {},
  hashs: {},
};
