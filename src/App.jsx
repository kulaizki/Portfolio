import './App.css';
import Header from './components/layout/Header';
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <main className="Main">
        <Intro />
        <hr />
        <Skills />
      </main>
    </div>
  )
}

export default App
