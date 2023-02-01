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

// const Feedback = ({all,good,neutral,bad,average,positive}) =>{
//     if(all===0){
//       return(
//         <div>No feedback given</div>
//       )
//     }
//     return(
//       <div>
//         <p>good {good}</p>
//         <p>neutral {neutral}</p>
//         <p>bad {bad}</p>
//         <p>all {all}</p>
//         <p>average {average}</p>
//         <p>positive {positive + '%'}</p>
//         </div>
  
//     )
//   }

// const App = () => {

//   const [good,setGood] = useState(0);
//   const [neutral,setNeutral] = useState(0);
//   const [bad,setBad] = useState(0);

//   const goodClick = () => {
//     setGood(good+1);
//   }

//   const neutralClick = () => {
//     setNeutral(neutral+1);
//   }
//   const badClick = () => {
//     setBad(bad+1);
//   }

//   let all = good+bad+neutral;
//   let average = (good*1+bad*(-1))/all;
//   let positive = good/all;

  
  
//   return(
//     <div>
//       <h1>GIve Feedback</h1>
//       <button onClick={goodClick}>good</button>
//       <button onClick={neutralClick}>neutral</button>
//       <button onClick={badClick}>bad</button>
//       <Feedback all={all} positive={positive} bad={bad} good={good} neutral={neutral} average={average}/>
//     </div>
//   )
// }

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  

  const [count,setCount] = useState(0);
  const nextClick = () => {
    setCount(count+1);
    
  }

  const backClick = () => {
    setCount(count-1);
    
  }
  const [votesNo,setVotesNo] = useState([0,0,0,0,0,0,0,0]);
  
  const copy = [...votesNo];

  const voteClick = () => {
    copy[count]+=1;
    setVotesNo(copy);
  }

  const MostVoteAnecdote = () => {
    let max=0;
    let maxIndex=0;
    for(let i=0;i<8;i++){
      if(max<votesNo[i]){
        max=votesNo[i];
        maxIndex=i;
      }
    }


    return(
      <p>{anecdotes[maxIndex]}</p>
      
    )
  }

  return(
    <div>
    <h1>anecdote fo the day</h1>
    <p>{anecdotes[count]}</p>
    
    <p>has {votesNo[count]} votes</p>
    <button onClick={backClick}>back</button>
    <button onClick={voteClick}>vote</button>
    <button onClick={nextClick}>next</button>
    <h1>anecdote with most votes</h1>
    <MostVoteAnecdote/>

    </div>
  )

}

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => {
//     return ()=>{ 
//     setValue(newValue);
//     }
//   }
  
  
//   return (
//     <div>
//       {value}
//       <button onClick={setToValue(1000)}>thousand</button>
//     </div>
//   )

 
// }


export default App

