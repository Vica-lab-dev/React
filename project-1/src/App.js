import './style.css'
import siteLogo from './logo.svg'

let name = "Viktor";
let paragraphColor = "blue";

function App() {
  return (
      <div>
        <p className="paragraph">My name is { name }</p>
        <img src={ siteLogo } alt=""/>
        <p style={{color: paragraphColor}}>THIS IS MY FIRST REACT APP</p>
      </div>
  );
}

export default App;
