import './App.css'; // Assuming you have styles in this file
import Navbar from './Components/Navbar';
import Chatbot from './Components/Chatbot';
import Hero from "./Components/Hero";
import Deals from './Components/Deals';
import Bestseller from "./Components/Bestseller";
import Feedback from "./Components/Feedback";
import Followus from "./Components/Followus";
import Footer from "./Components/Footer";




function App() {
  return (
      //  overflow-x-auto this property is used for controling the bottom scroll
    <div className='overflow-x-auto'>
      <Navbar/>
    <Hero/>
    <Deals/>
    <Bestseller/>
    <Feedback/>
    <Followus/>
    <Footer/>

    <Chatbot/>
</div>  
  );
}

export default App;
