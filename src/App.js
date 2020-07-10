 import React from 'react';
 import './App.css'
import Dinner from './dinner.js';
function App() {
  return (
    <div className='App'>
  {/* <h1>hellow world from sami</h1> */}
    <Dinner dishName="chicken Karahi"  sweetDish="gulaab jamun"/>
    <Dinner dishName="chicken biryani"  sweetDish="kheer"/>
    <Dinner dishName="chicken nihari"  sweetDish="halwa"/>
    <Dinner dishName="chalay ab nahi aoutomatoicalayyy"  sweetDish="halwa1"/>



    </div>
  )
}

export default App;
