import React from "react"
import Header from "./components/Header"
import './style.css';
import MemeForm from "./components/MemeForm";


export default function App(){
  return(
    <div>
      <Header />
      <MemeForm />
    </div>
  )
}