import Header from "./components/Header";
import Cart from "./containers/Cart/Cart";
import Menu from "./containers/Menu";
import DrinkList from "./containers/DrinkList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Cart />
        <Menu />
        <DrinkList />
      </div>
      <Footer />
      {}
    </div>
  );
};

export default App;
