import Header from './components/common/Header';
import Footer from './components/common/footer';
import Halfpage from './components/features/Halfpage';
import ImageGallery from './components/features/ImageGallery';
import ImageGrid from './components/common/Imagegrid';
import ReservationForm from './components/features/Reservationform';


import Contactform from './components/features/Contactform';
import './App.css';
import MyComponent from './components/common/Background';



const App = () => {
  
  return (
    <>
      <Header />
      <MyComponent/>
      <Footer/>
     <Halfpage/>
     <ImageGallery/>
     <ImageGrid/>
     <ReservationForm/>
    
     
      <Contactform/>
      
  
     
    </>
  );
};

export default App;
