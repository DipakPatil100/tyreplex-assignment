import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Products/product";
import Reviews from "./components/Reviews";
import Slider from "./components/Slide";
import ShopCard from "./components/StoreInfo";
import StoreInfo from "./components/StoreInfo";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Slider /> */}
      {/* <StoreInfo /> */}
      <ShopCard />
      {/* <Reviews /> */}
      <Product />
      <Footer />
    </div>
  );
}

export default App;
