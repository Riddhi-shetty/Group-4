
import React from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Preferences from './Preferences';
import Dashboard from './Dashboard';
import Login from './Login';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard"> 
             <Dashboard />
          </Route>
          <Route path="/preferences"> 
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;


//
// function App() {
//   const token = getToken();
//   if(!token) {
//     return <Login setToken={setToken} />
//   }
//   return(
//     <div className="wrapper">
//       <h1>Application</h1>
//       <BrowserRouter>
//         <Switch>
//           <Route path="/dashboard"> 
//              <Dashboard />
//           </Route>
//           <Route path="/preferences"> 
//             <Preferences />
//           </Route>
//         </Switch>
//       </BrowserRouter>
// //     </div>
// //   );
// }

// export default App;

