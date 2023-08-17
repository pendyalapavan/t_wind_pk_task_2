import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';

import pic1 from "./images/pic1.png"
import pic11 from "./images/pic11.jpg"
import pic2 from "./images/pic2.jpg"
import pic22 from "./images/pic22.jpg"

function App() {
  return (
    <div className="App">
      <Navbar />   

    <div className='Blog'>
      <div className='aa'>
        <h className="hb">Blog</h>
        <p>T-wind / Pages /<span>Blog</span></p>
      </div>
      <div className='bb'>
        <button className='btnn'>
          Create New
        </button>
      </div>
    </div>



      <div className="card-container">

        <Card tag="Fashion" img1={pic1} img2={pic11} />
        <Card tag="Fruits" img1={pic2} img2={pic22}/>
        <Card tag="Birds" img1={pic1} img2={pic11}/>
        <Card tag="Health" img1={pic2} img2={pic22}/>
      </div>

     <div className="card-container">

        <Card tag="Fashion" img1={pic1} img2={pic11}/>
        <Card tag="Fruits" img1={pic2} img2={pic22}/>
        <Card tag="Birds"img1={pic1} img2={pic11} />
        <Card tag="Health"img1={pic2} img2={pic22} />
      </div>
    </div>
  );
}

export default App;