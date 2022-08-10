import React from 'react';
import './App.css';

function HelloWorld(props){
  console.log(props)
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
}

function App() { //funcion javascript simple
  return (
    <div>
      This is my first react project:
      <HelloWorld mytext="Hello World" subtitle="English"/>
      <HelloWorld mytext="Hola mundo" subtitle="Spanish"/>
      <HelloWorld mytext="Olá mundo" subtitle="Portuguese"/>
    </div>
  );
}

/*const App = () => <div>Hola Hellouch!!!<HelloWorld/></div> //Es equivalente al componente app (funcion flecha)

class App extends React.Component {
  render(){
    return <div>Hola Hellouch!!!<HelloWorld/></div>
  }
}*/
export default App;
