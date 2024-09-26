import ConhecaAC3 from "./components/ConhecaAC3/conhecaAC3";
import ContactForm from "./components/ContactForm/ContactForm";
import Depoimentos from "./components/Depoimentos/depoimentos";
import FaixaAnimada from "./components/FaixasAnimadas/faixaAnimada";
import Faq from "./components/Faq/faq";
import Participar from "./components/section-participar/Participar";

function App() {
  return (
    <>
      <Participar />
      <ConhecaAC3 />
      <FaixaAnimada />
      <Depoimentos />
      <Faq />
      <ContactForm />
    </>
  );
}

export default App;
