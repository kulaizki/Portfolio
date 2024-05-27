import "./App.css";
import Header from "./components/layout/Header";
import Intro from "./components/intro/Intro";
import Experience from "./components/experience/Experience";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <main className="Main">
        <Intro />
        <hr />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
