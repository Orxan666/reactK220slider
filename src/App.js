import { useState } from "react";
import "./App.scss";
import Header from "./header/Header";
import MyRoutes from "./layout/MyRoutes";

function App() {
// var number=0
// const test=()=>{
// console.log(number++);
// }

let [number,setNumber]=useState(0)

function increase(){
  setNumber(number+1)
}
function decrease(){
  setNumber(number-1)
}
  return <>
  <Header/>
  <MyRoutes/>
  

  </>;
}

export default App;
