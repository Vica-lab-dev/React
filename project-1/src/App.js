import siteLogo from './logo.svg'
import Products from './Components/Products'

let name = "Viktor";
let paragraphColor = "blue";

function App() {
  return (
      <>
          <div>
              <p className="paragraph">My name is { name }</p>
              <img src={ siteLogo } alt=""/>
              <p style={{color: paragraphColor}}>THIS IS MY FIRST REACT APP</p>
          </div>
          <Products/>
      </>

  );
}

export default App;
