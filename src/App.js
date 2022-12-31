import { useEffect }  from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Ferramentas from "./components/UI/Ferramentas";
import Sobre from "./components/UI/Sobre";
import Objetivos from "./components/UI/Objetivos";
import Depoimentos from "./components/UI/Depoimentos";
import Newsletter from "./components/UI/Newsletter";
import Professores from "./components/UI/Professores";
import Footer from "./components/UI/Footer";
import "./app.css";


function App() {

  useEffect(()=> {
    Aos.init();
  },[])


  return (
    <>
      <Header />   
      <Hero/>   
      <Ferramentas />  
      <Sobre/>  
      <Objetivos/>   
      <Depoimentos/>
      <Professores/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default App;

