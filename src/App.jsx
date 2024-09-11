import ConhecaAC3 from './components/ConhecaAC3';
import FaixaAnimada from './components/faixaAnimada';
import Depoimentos from './components/depoimentos';

function App() {
  return (
    <>
      <div className="container-conheca">
        <ConhecaAC3 />
      </div>
      <FaixaAnimada />
      <div className="container-depoimentos">
        <div className="container">
          <Depoimentos />
        </div>
      </div >
    </>
  );
}

export default App
