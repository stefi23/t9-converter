import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import Key from "./components/Key"

function App() {
  const [ userInput, setUserInput ] = useState("")
  const [ suggestions, setSuggestions ] = useState([])


  const addUserInput = (number) => {
    setUserInput(userInput + number.toString())
  }


 useEffect(() => {
   if(userInput.length > 0) {
   (async () => {
      try {
      let data = await getSuggestions()     
      setSuggestions(suggestions => [...data ])
    
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
    })();
    }
  }, [userInput])

const getSuggestions = async () => {
    try {
      const resp = await axios.get(`/t9-suggestions?userInput=${userInput}`);
      return resp.data

    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };


  return (
    <div className="App">
      <h1> T9 Converter</h1>
      <p>Description and usage</p>
      <div className="phone-container">
        <div className="phone-container__screen">
          <p>User input: {userInput}</p>
          <p>Predictions: 
          {
          suggestions.length > 0 ?
          suggestions.map((suggestion, index) => (
                    <span key={index}
                        >   {suggestion}              
                    </span>
                  ))
           : null     
                
          }
        </p>

        </div>
         <div className="phone-container__keyboard">
          <div className="phone-container__keyboard__grid">
            <Key value="1" letters=" " disabled={true}/>
            <Key value="2" letters="abc" addUserInput={() => addUserInput("2")}/>
            <Key value="3" letters="def" addUserInput={() => addUserInput("3")}/>
            <Key value="4" letters="ghi" addUserInput={() => addUserInput("4")}/>
            <Key value="5" letters="jkl" addUserInput={() => addUserInput("5")}/>
            <Key value="6" letters="mno" addUserInput={() => addUserInput("6")}/>
            <Key value="7" letters="pqrs" addUserInput={() => addUserInput("7")}/>
            <Key value="8" letters="tuv" addUserInput={() => addUserInput("8")}/>
            <Key value="9" letters="wxyz" addUserInput={() => addUserInput("9")}/>
            <Key value="*" letters=" " disabled={true} />
            <Key value="0" letters=" " disabled={true}/>
            <Key value="#" letters="del" disabled={true}/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
