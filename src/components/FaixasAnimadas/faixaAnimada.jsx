import './FaixaAnimada.css';

const FaixaAnimada = () => {
    const textos = Array(20).fill("Construindo o amanhã, hoje");

    return (
        <section className="faixa">
            <div className="faixa1">
                <div className="text-wrapper" id="text-wrapper1">
                    {textos.map((texto, index) => (
                        <p key={index}>{texto}</p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaixaAnimada;

