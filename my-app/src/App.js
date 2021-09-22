import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import { Fragment } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Container from './components/container/container';
import Footer from './components/footer/footer';

function App() {

  //Título y descripción desde props
  let obj = {
    title: "This is a BootStrap Page",
    description: "Resize this responsive page to see the effect!"
  }

  //Validar fecha
  var d = new Date(),
  fecha = d.getFullYear();
  console.log(fecha);
  

  return (
    <Fragment>
      <Nav />
      <Header 
      title={obj.title}
      description={obj.description}
      />
      <div className="container" style={{"marginTop":"30px"}}>
        <div className="row">
          <Sidebar />
          <Container />
        </div>
      </div>
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;

