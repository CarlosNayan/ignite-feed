import IgniteSymbol from "../assets/Ignite-simbol.png";

export function Header() {
  return (
    <header style={styles.header}>
      <img style={styles.image} src={IgniteSymbol} alt="Logo do ignite" />
      <strong style={styles.text}>Ignite Feed</strong>
    </header>
  );
}

const styles = {
  header: {
    background: "var(--gray-800)",
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.25rem 0",
  },
  image: {
    height: "3rem", //48px
  },
  text: {
    fontSize: "25.585px",
    fontWeight: 700,
    lineHeight: "160%",
    marginLeft: 16,
  },
};
