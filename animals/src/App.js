import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";
// function App() {

//     const [count, setCount] = useState(0);

//     const handleClick = () => {
//         console.log("I was clicked");
//         setCount(count + 1);
//     };
//   return (
//     <div>
//       <button onClick={handleClick}>Add Animal</button>
//         <h1>Animal Count: {count}</h1>
//     </div>
//   );
// }



function getRandomAnimals(){
    const animals=["cat", "dog", "bird", "gator", "heart", "horse", "cow"];
    return animals[Math.floor(Math.random() * animals.length)];
}
function App(){
    const [animals, setAnimals] = useState([])

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimals()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return (<AnimalShow type={animal} key={index} />)
    });

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>

    )
}
export default App;