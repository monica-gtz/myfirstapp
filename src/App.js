import React from 'react';
import './App.css';

function HelloWorld(){
  return(
    <div id="hello">This is my first react project</div>
  );
}

/*const App = () => <div>Hola Hellouch!!!<HelloWorld/></div> //Es equivalente al componente app (funcion flecha)

class App extends React.Component {
  render(){
    return <div>Hola Hellouch!!!<HelloWorld/></div>
  }
}*/

function App() { //funcion javascript simple
  return (
    <div>Hola Hellouch!!!<HelloWorld/></div>
  );
}

export default App;
