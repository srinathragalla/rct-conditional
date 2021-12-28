// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
class App extends Component{
  render(){
    var i=7;
    return(
      <div>
        <h2>{i==7?'True' : 'False'}</h2>
        <h3>'the multiplication of 12 and 12 is'{12*12}</h3>
      </div>
    )
  }
}
export default App;
