import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import { Component } from "react";
import Message from "./components/Message"
import Counter from "./components/Counter"
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";



class App extends Component {
  render() {
    return (
      <div className="App">
       <NameList />
      </div>
    );
  }
}











// function App() {
//   return (
//     <div className="App">
//       <Greet name="Bruce">
//         <p>This is children props</p>
//       </Greet>
//       <Greet name="Wale" />
//       <Greet name="Tayo" />

//       {/* <Welcome />
//     <Hello /> */}
//     </div>
//   );
// }

export default App;
