import './App.css';
import React from 'react';
import { nanoid } from 'nanoid'

function App() {
  const[quote,setQuote]=React.useState([])
  const[randomColor,setRandomColor] = React.useState("green")
  const url = "https://type.fit/api/quotes"
  const [randomQuote,setRandomQuote] = React.useState({text:"Genius is one percent inspiration and ninety-nine percent perspiration",author:"Thomas Edison"})
  
  React.useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setQuote(data.map(item=>{
      return{
        ...item,id:nanoid()
      }
    })))
  },[])
 
function showQuote(){
  let randomNumber = Math.floor((Math.random() * 1643) + 1);
  setRandomQuote({text:quote[randomNumber].text,author:quote[randomNumber].author}) 
  let str = "0123456789abcdef"
        let color = ""
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * str.length)
            color += str[index]
        }
        // return "#" + color
  setRandomColor("#"+color)
}



  return (
    <>
    <div style={{backgroundColor:randomColor}} className="wrapper">
      <div id="quote-box">
         <div id="text" style={{color:randomColor}}>{randomQuote.text}</div>
        <div id="author"style={{color:randomColor}}>- {randomQuote.author}</div>
        <button style={{backgroundColor:randomColor}} onClick={()=>showQuote()} id="new-quote">New Quote</button>
      </div>
      <div className='footer'>by <a style={{color:"white"}} href='https://github.com/rahmanizahra?tab=repositories' target="_blank">Zahra</a></div>
      </div>
      
    </>
    
  );
}

export default App;
