export function SideBar() {
  const profileUrl =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const banner =
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <aside style={styles.SideBar}>
        <img style={styles.cover} src={banner} alt="" />
        <div style={styles.profile}>
          {/* <img src={profileUrl} alt="" /> */}
          <div>Leslie Alexander</div>
          <div>UI Designer</div>
        </div>
        <footer style={styles.footer}>
          <button
            style={styles.profileEditButton}
            onClick={() => console.log("clicou!!")}
          >
            Editar seu perfil
          </button>
        </footer>
      </aside>
    </>
  );
}

const styles = {
  SideBar: {
    background: "var(--gray-800)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  cover: {
    width: "100%",
    height: "72px",
    objectFit: "cover",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  footer: {
    borderTop: "1px solid var(--gray-600)",
    marginTop: "1.5rem",
    padding: "1.5rem 2rem 2rem",
  },
  profileEditButton: {
    width: "12rem",
    height: "3.1rem",
    background: "transparent",
    border: "1px solid var(--green-500)",
    color: "var(--green-500)",
    borderRadius: "8px",
    padding: "0 1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
