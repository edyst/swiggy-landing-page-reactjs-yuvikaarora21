// import logo from "./logo.svg";gr
import "./App.css";
import Header from "./Components/Header/Header";
import Features from "./Components/Body/Features/Features";
import ReasturantSection from "./Components/Body/RestaurantSection/ReasturantSection";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <ReasturantSection />
      <Footer />
    </div>
  );
}

export default App;
