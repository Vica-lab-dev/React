const currentTime = new Date();
const currentTimeString = currentTime.toLocaleTimeString();
const darkBgColor = "darkBlue";
const lightBgColor = "white";

function App() {
  if (currentTimeString >= "20:00:00" || currentTimeString <= "07:00:00") {
    return <div style={{backgroundColor: darkBgColor, height: 1000, width: 1000}}></div>;
  }
    return <div style={{ backgroundColor: lightBgColor, height: 1000, width: 1000 }}></div>;
}

export default App;
