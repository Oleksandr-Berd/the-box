import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/Reputation/Reputation';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Hero />
        <About/>
      </Layout>
    </div>
  );
}

export default App;
