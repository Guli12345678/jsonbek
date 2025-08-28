import User from "./components/users/User";
import "./App.css";
import Products from "./components/products/Product";
import Posts from "./components/posts/Post";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <User />
        <Posts />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
