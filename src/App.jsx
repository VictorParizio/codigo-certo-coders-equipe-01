import ConhecaAC3 from './components/ConhecaAC3/conhecaAC3';
import FaixaAnimada from './components/FaixasAnimadas/faixaAnimada';
import Participar from './components/section-participar/Participar'
import Depoimentos from './components/Depoimentos/depoimentos';
import Faq from './components/Faq/faq';

function App() {
  return (
    <>
      <Participar/>
      <ConhecaAC3 />
      <FaixaAnimada />
      <Depoimentos />
      <Faq />
    </>
  );
}

export default App
