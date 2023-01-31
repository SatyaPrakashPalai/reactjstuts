import { useState } from "react"

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [{
//     name:'Fundamentals of React',exercises:10
//   },{name: 'Using props to pass data', exercises:7},{name:'State of a component',exercises:14}];
//  let sum= 0;
//  parts.forEach(value => sum=sum+value.exercises);



//   return (
//     <div>
//       <h1>{course}</h1>
//       {parts.map((e)=> {return <p>{e.name} {e.exercises}</p>} )}
//       <p>Number of exercises {sum}</p>
//     </div>
//   )
// }


// const App = ({name,age}) => {
//   const bornYear = () =>  new Date().getFullYear() - age 

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// };

// const App = () => {
//   const [counter,setCounter] = useState(0)

//   setTimeout(()=>setCounter(counter+1),1000)

//   return(
//     <div>{counter}</div>
//   )
// }


// const History = ({allClicks}) => {
//   if(allClicks.length===0){
//     return (
//       <div>
//         the app is used by pressing the buttons.
//       </div>
//     )
//   }
//   return(
//     <div>
//       button press history : {allClicks.join('')}
//     </div>
//   )
// }


// const App = () => {
//     const [left,setLeft] = useState(0);
//     const [right,setRight] = useState(0);
//     const [allClicks,setAllCLicks] = useState([]);

//     const handleLeftClick = () => {
//       setLeft(left+1);
//       setAllCLicks(allClicks.concat("L"));
//     }

//     const handleRightClick = () => {
//       setRight(right+1);
//       setAllCLicks(allClicks.concat("R"));
//     }

//     return(
//       <div>
//         <button onClick={handleLeftClick} > {left} </button>
//         <button onClick={handleRightClick} > {right} </button>
//         <History allClicks={allClicks} />
//       </div>
//     )
// }

const Feedback = ({all,good,neutral,bad,average,positive}) =>{
    if(all===0){
      return(
        <div>No feedback given</div>
      )
    }
    return(
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive + '%'}</p>
        </div>
  
    )
  }

const App = () => {

  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);

  const goodClick = () => {
    setGood(good+1);
  }

  const neutralClick = () => {
    setNeutral(neutral+1);
  }
  const badClick = () => {
    setBad(bad+1);
  }

  let all = good+bad+neutral;
  let average = (good*1+bad*(-1))/all;
  let positive = good/all;

  
  
  return(
    <div>
      <h1>GIve Feedback</h1>
      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>
      <Feedback all={all} positive={positive} bad={bad} good={good} neutral={neutral} average={average}/>
    </div>
  )
}

export default App