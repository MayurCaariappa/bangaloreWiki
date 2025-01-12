import { useState } from 'react';
import './App.css';
import Header from '../components/Header';
import Food from '../components/Food';
import Cafe from '../components/Cafe';
import Date from '../components/Date';
import Party from '../components/Party';
import Outskirt from '../components/Outskirt';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      
      <div className="category-container">
        <Food />
        <Cafe />
        <Date />
        <Party />
        <Outskirt/>
      </div>
    </div>
  )
}

export default App
