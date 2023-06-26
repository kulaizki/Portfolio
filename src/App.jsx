import './App.css';
import Header from './components/layout/Header';
import Intro from './components/intro/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <hr style={{ borderColor: 'yellow' }}/>
      <main className="Main">
        <Intro />
        <hr style={{ borderColor: 'yellow' }}/>
      </main>
    </div>
  )
}

export default App
