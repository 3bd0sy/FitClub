import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programes from './components/Programes/Programes';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programes />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
