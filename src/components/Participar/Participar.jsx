import "./style.css";

function Participar() {
  return (
    <section id="section-participar">
      <div className="container-participar">
        <div id="section-participa-titulos">
          <h2>Como participar?</h2>
          <p>
            Três passos simples para <span>transformar sua carreira</span>
          </p>
        </div>

        <div id="section-container-passos">
          <div className="cards-participar-passos">
            <p className="title-passos">01</p>
            <h3>
              Defina sua área <br /> de interesse
            </h3>
            <p>
              Escolha a área da tecnologia que mais desperta sua paixão.
              Selecione a direção que você deseja seguir e prepare-se para
              explorar novas oportunidades.
            </p>
          </div>

          <div className="cards-participar-passos">
            <p className="title-passos">02</p>
            <h3>
              Inscreva-se
              <br /> na comunidade
            </h3>
            <p>
              Preencha seu cadastro e junte-se a uma rede vibrante de
              profissionais e entusiastas da tecnologia. A inscrição é rápida e
              fácil, e você estará a poucos cliques de se conectar com mentores,
              recursos e eventos que farão a diferença na sua jornada.
            </p>
          </div>

          <div className="cards-participar-passos">
            <p className="title-passos">03</p>
            <h3>
              Envolva-se <br /> ativamente
            </h3>
            <p>
              Aproveite tudo o que a Código Certo Coders tem a oferecer.
              Participe de projetos, troque experiências, e contribua para o
              crescimento coletivo. Quanto mais você se envolve, mais você
              cresce
            </p>
          </div>
        </div>
        <a href="" id="section-participar-btn">
          Quero transformar a minha carreira
        </a>
      </div>
    </section>
  );
}

export default Participar;
