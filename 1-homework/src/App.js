const currentTime = 8;
const darkBgColor = "darkBlue";
const lightBgColor = "white";

function App() {
  if (currentTime > 20 || currentTime <= 7) {
    return <div style={{backgroundColor: darkBgColor, height: 1000, width: 1000}}></div>;
  }
    return <div style={{ backgroundColor: lightBgColor, height: 1000, width: 1000 }}></div>;
}

export default App;
