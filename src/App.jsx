import { useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PromoBlock from "./components/PromoBlock/PromoBlock";
import ProductBlock from "./components/ProductBlock/ProductBlock";
import Footer from "./components/Footer/Footer";
import Admins from "./components/Admins/Admins";


function App() {
  const promoRef = useRef(null);
  const productRef = useRef(null);
  const adminsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Header
        onScrollToPromo={() => scrollToSection(promoRef)}
        onScrollToProduct={() => scrollToSection(productRef)}
        onScrollToAdmins={() => scrollToSection(adminsRef)}
      />

      <div ref={promoRef}>
        <PromoBlock />
      </div>

      <div ref={productRef}>
        <ProductBlock />
      </div>

      <div ref={adminsRef}>
        <Admins />
      </div>

      <Footer />
    </>
  );
}

export default App;
