import ConhecaAC3 from './components/ConhecaAC3/conhecaAC3';
import FaixaAnimada from './components/FaixasAnimadas/faixaAnimada';
import Participar from './components/section-participar/Participar'
import Depoimentos from './components/Depoimentos/depoimentos';
import Faq from './components/Faq/faq';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
      <Participar />
      <ConhecaAC3 />
      <FaixaAnimada />
      <Depoimentos />
      <Faq />
      <Footer />
    </>
  );
}

export default App
