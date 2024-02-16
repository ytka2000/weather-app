import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Trips from "./components/Trips";
import Forecast from "./components/Forecast";
import SideBar from "./components/SideBar/SideBar";

import styles from "./App.module.css";

function App() {
  return (
    <main id={styles.main}>
      <section className={styles["main-content"]}>
        <Header />
        <SearchBar />
        <Trips />
        <Forecast />
      </section>
      <SideBar />
    </main>
  );
}

export default App;
