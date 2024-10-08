import ConhecaAC3 from "./components/ConhecaAC3/conhecaAC3";
import Depoimentos from "./components/Depoimentos/depoimentos";
import FaixaAnimada from "./components/FaixasAnimadas/faixaAnimada";
import Faq from "./components/Faq/faq";
import Participar from "./components/Participar/Participar";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/footer"

function App() {
  return (
    <>
      <ConhecaAC3 />
      <FaixaAnimada />
      <Participar />
      <Depoimentos />
      <Faq />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
