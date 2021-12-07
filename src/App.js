// import { useState } from 'react';
// import Header from './components/Header';
// import Tasks from './components/Tasks';
// const App = () => {
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       text: "Doctoe appoinment",
//       day: 'fab 7 monday 1997',
//       reminder: true,
//     },
//     {
//       id: 2,
//       text: "Doctoe appoinment",
//       day: 'fab 7 monday 1997',
//       reminder: true,
//     },
//     {
//       id: 3,
//       text: "Doctoe appoinment",
//       day: 'fab 7 monday 1997',
//       reminder: true,
//     }
//   ])
//   return (
//     <div>
//       <Header />
//       <Tasks tasks={tasks}/>
//     </div>
//   )
// }

// export default App;
import Manu from "./Manu";
import Home from "./Home";
import About from "./About";
import Contect from "./Contect";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Manu />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contect" component={Contect} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App;