import './style.css'
import siteLogo from './logo.svg'

console.log(siteLogo)

function App() {
  return (
      <div>
          <p className="paragraph">Test 123</p>
          <img src={ siteLogo } alt=""/>
      </div>
  );
}

export default App;
