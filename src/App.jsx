import './App.css';
import Header from './components/layout/Header';
import Intro from './components/intro/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <main className="Main">
        <Intro />
        <hr />
      </main>
    </div>
  )
}

export default App
