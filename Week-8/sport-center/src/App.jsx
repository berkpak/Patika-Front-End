import './App.css';
import Bmi from './components/Bmi';
import Cards from './components/Cards';
import Classes from './components/Classes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Purchase from './components/Purchase';
import Review from './components/Review';
import Trainers from './components/Trainers';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Cards />
      <Classes />
      <Bmi />
      <Trainers />
      <Purchase />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
