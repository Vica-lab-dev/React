import './style.css'
import siteLogo from './logo.svg'

let name = "Viktor";

function App() {
  return (
      <div>
          <p className="paragraph">My name is { name }</p>
          <img src={ siteLogo } alt=""/>
      </div>
  );
}

export default App;
