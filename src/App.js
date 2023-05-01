import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Reputation from "./components/Reputation/Reputation";
import About from './components/About/About';
import Services from './components/ServicesSection/Services';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Hero />
        <Reputation />
        <About />
        <Services />
        <Experience/>
      </Layout>
    </div>
  );
}

export default App;
