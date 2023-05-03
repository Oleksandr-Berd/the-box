import './App.css';
import "react-alice-carousel/lib/alice-carousel.css";
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Reputation from "./components/Reputation/Reputation";
import About from './components/About/About';
import Services from './components/ServicesSection/Services';
import Experience from './components/Experience/Experience';
import Consultation from './components/Consultation/Consultation';
import Projects from './components/Projects/Projects';
import FeedBack from './components/FeedBack/FeedBack';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Hero />
        <Reputation />
        <About />
        <Services />
        <Experience />
        <Consultation />
        <Projects />
        <FeedBack />
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;
