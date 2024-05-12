import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import BarNav from './components/BarNav';
import BarNavMens from './components/BarNavMens';
import BarNavWomens from './components/BarNavWomens';
import Home from './components/Home';
import Accesories from './components/Accesories';
import Pants from './components/Pants';
import Shoes from './components/Shoes';
import Tshirts from './components/Tshirts';
import ThinksOfMusic from './components/ThinksOfMusic';
import React from 'react';
import CarToBuy from './components/CarToBuy';
import CheckIn from './components/CheckIn';
import Help from './components/Help';


// cliente id : AXWgQqljNGoCFgk8F2idPFxX9c5nQezVBKbrwnWSoD71AC_bhFj5oQ4iAw7waa2JMjIOA7mLo9lyZ-ze-

function App() {
  const [visibilityBarNavWomens, setVisibilityBarNavWomens] = useState(false)
  const [visibilityBarNavMens, setVisibilityBarNavMens] = useState(false)
  const [visibilityMens, setVisibilityMens] = useState(false)
  const [visibilityWomens, setVisibilityWomens] = useState(false)
const [carBuy, setCarBuy] = useState([])
const [visibilityCarBuy, setVisibilityCarBuy] = useState(false)
const [totalPrice, setTotalPrice] = useState({products: null, pay: 0});



return (
<BrowserRouter>
<React.Fragment>
<div className="App">
  <BarNav visibilityCarBuy={visibilityCarBuy} setVisibilityCarBuy={setVisibilityCarBuy} carBuy={carBuy} visibilityWomens={visibilityWomens} visibilityMens={visibilityMens} setVisibilityWomens={setVisibilityWomens} setVisibilityMens={setVisibilityMens} setVisibilityBarNavMens={setVisibilityBarNavMens} setVisibilityBarNavWomens={setVisibilityBarNavWomens} />
  

  {visibilityCarBuy && <CarToBuy setCarBuy={setCarBuy} carBuy={carBuy} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />}
  {visibilityBarNavMens && <BarNavMens />}
 {visibilityBarNavWomens && <BarNavWomens />}

 </div>
</React.Fragment>


<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/checkIn' element={<CheckIn />}></Route>
  <Route path='/Accesories' element={<Accesories setCarBuy={setCarBuy} visibilityWomens={visibilityWomens} visibilityMens={visibilityMens} />}></Route>
  <Route path='/Pants' element={<Pants setCarBuy={setCarBuy} visibilityWomens={visibilityWomens} visibilityMens={visibilityMens} />}></Route>
  <Route path='/Shoes' element={<Shoes carBuy={carBuy} setCarBuy={setCarBuy} visibilityWomens={visibilityWomens} visibilityMens={visibilityMens} />}></Route>
  <Route path='/Tshirts' element={<Tshirts setCarBuy={setCarBuy} visibilityWomens={visibilityWomens} visibilityMens={visibilityMens} />}></Route>
  <Route path='ThinksOfMusic'  element={<ThinksOfMusic setCarBuy={setCarBuy} visibilityWomens={visibilityWomens} visibilityMens={visibilityMens} />} ></Route>
</Routes>



</BrowserRouter>

   
  
);
}



export default App;
