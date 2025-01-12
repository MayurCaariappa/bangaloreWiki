import './App.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Food from '../components/Food';
import Cafe from '../components/Cafe';
import Date from '../components/Date';
import Party from '../components/Party';
import Outskirt from '../components/Outskirt';
import Footer from '../components/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      
      <div className="category-container">
        <Food />
        <Cafe />
        <Date />
        <Party />
        <Outskirt/>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
