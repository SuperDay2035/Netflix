import Navbar from "./Components/Navbar/Navbar";
import "./App.scss"
import Enjoy from "./Components/Enjoy/Enjoy";
import Download from "./Components/Download/Download";
import Watch from "./Components/Watch/Watch";
import Create from "./Components/Create/Create";
import Accordion from "./Components/Accodions/Accordion";

function App() {
  return (
    <div className="App">

        <Navbar></Navbar>
        <Enjoy></Enjoy>
        <Download></Download>
        <Watch></Watch>
        <Create></Create>
        <Accordion></Accordion>
    </div>
  );
}

export default App;
