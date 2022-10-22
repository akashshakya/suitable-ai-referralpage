
import './App.css';
import React, {useState} from 'react'
import Banner from './components/Banner';
import CandidateCard from './components/CandidateCard';

function App() {

  const CandidateObjectArray = [
    {
      candidateName: "Anmol Mahajan", 
      designation : "Sr.Engineer",
      stepNumber : 4
    },
    {
      candidateName: "Virat Kohli", 
      designation : "Sr.Engineer",
      stepNumber : 2
    },
    {
      candidateName: "Adam Gilchrist", 
      designation : "Sr.Engineer",
      stepNumber : 1
    },
    {
      candidateName: "Elon Musk", 
      designation : "Sr.Engineer",
      stepNumber : 1
    },
    {
      candidateName: "Steve Jobs", 
      designation : "Sr.Engineer",
      stepNumber : 4
    },
    {
      candidateName: "Steve Wozniak", 
      designation : "Sr.Engineer",
      stepNumber : 2
    },
    {
      candidateName: "Mark Zuckerberg", 
      designation : "Sr.Engineer",
      stepNumber : 4
    },
    {
      candidateName: "Roger Federer", 
      designation : "Sr.Engineer",
      stepNumber : 3
    },
    {
      candidateName: "Cristiano Ronaldo", 
      designation : "Sr.Engineer",
      stepNumber : 4
    },
    {
      candidateName: "Sachin Tendulkar", 
      designation : "Sr.Engineer",
      stepNumber : 3
    }
  ]

  const [suggestions, setSuggestions] = useState(CandidateObjectArray)
  const [text, setText] = useState("")


  let searchHandle = (e) => {
    let value = e.target.value;
    let searchArray = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      searchArray = CandidateObjectArray.sort().filter(word => regex.test(word.candidateName))
    }
    setSuggestions(searchArray);
    setText(value);
    if(value.length <= 0){
      setSuggestions(CandidateObjectArray)
    }
    console.log(suggestions)
  }


  return (
    <div>
      <Banner searchHandle={searchHandle} text={text}/>
      <CandidateCard CandidateObjectArray={suggestions}/>
    </div>

  );
}

export default App;
