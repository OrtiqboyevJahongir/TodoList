import React,{useState,useRef } from 'react';
import Clicker from './components/Clicker';

const App = () => {
  const [card , setCard] = useState('')
  const [phone , setPhone] = useState('')
  const [err , setErr] = useState('')
  

  const cardEl=useRef()
  const phoneEl=useRef()

    const validate = () =>{
      if(card.length<16){
        setErr("card")
        cardEl.current.focus()
        return;
      }

      if(phone.length<10){
        setErr("phone")
        cardEl .current.focus()
        return;
      }
      setErr("")
    }

  return (
    <>
    <div className="wrapper shadow w-50 mx-auto p-5 m-5">
        <div className="App">
        <Clicker
          hasError={err==="card"}
          placeholder={"card"}
          update={setCard}
          value={card}
          ref={cardEl}
        /> 
         <Clicker
          hasError={err==="phone"}
          placeholder={"phone"}
          update={setPhone}
          value={phone}
          ref={phoneEl}
        /> 
        <button  className="btn btn-danger mx-auto d-block w-50" onClick={validate}>send</button>
        </div>
        
        </div>
    </>
  );
};

export default App;