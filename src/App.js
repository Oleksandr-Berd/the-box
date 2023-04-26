import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
      </Layout>
    </div>
  );
}

export default App;
