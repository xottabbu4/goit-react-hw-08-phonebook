const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 350
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };

export default function Home() {
  return (
      <div style={styles.container}>
        <h1 style={styles.title}>Your personal phonebook</h1>
      </div>
  );
}