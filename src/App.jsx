import { useState } from "react";
import User from "./components/users/User";
import "./App.css";
import Products from "./components/products/Product";
import Posts from "./components/posts/Post";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

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
