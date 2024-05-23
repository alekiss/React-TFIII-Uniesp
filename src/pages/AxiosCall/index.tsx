import axios from "axios"
import {useState} from "react";
import "./styles.css";

const AxiosCall = () => {
  const [joke, setJoke] = useState<any>();

  const randomJoke = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {setJoke("Question:" + response.data.setup +" Response:"+ response.data.punchline)})
  }

  console.log(joke)

  return (
    <div className="container">
      <div className="joke">
        <h1 >{joke}</h1>
    </div>
      <button onClick={randomJoke}  className="submit">{!joke ? "Click here for a not funny joke" : " Click here for a outher not funny joke"}</button>
    </div>
  )
}

export default AxiosCall