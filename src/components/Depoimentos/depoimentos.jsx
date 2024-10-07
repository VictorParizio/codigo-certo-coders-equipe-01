import './depoimentos.css';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const depoimentos = [
    { id: 1, image: 'src/assets/images/img-depoimentos-h.png', texto: "Participei de projetos voluntários onde aprimorei as minhas soft e hard skills, além de ter contribuido para o crescimento da Código Certo Coders.", autor: "João Almeida" },
    { id: 2, image: 'src/assets/images/img-depoimentos-m.png', texto: "Participar dos projetos voluntários da Código Certo Coders foi uma experiência transformadora. Contribuí diretamente para o sucesso da comunidade.", autor: "Ana Souza" },
    { id: 3, image: 'src/assets/images/img-depoimentos-h.png', texto: "Os programas de mentoria da Código Certo Coders me ajudaram a acelerar meu aprendizado.", autor: "Carlos Oliveira" },
    { id: 4, image: 'src/assets/images/img-depoimentos-m.png', texto: "A rede de contatos que construí participando dos eventos da Código Certo Coders foi fundamental para minha carreira.", autor: "Bruna Lima" },
    { id: 5, image: 'src/assets/images/img-depoimentos-h.png', texto: "Além das habilidades técnicas, o foco da Código Certo Coders no desenvolvimento pessoal e soft skills fez toda a diferença para mim.", autor: "Henrique Pereira" },
    { id: 6, image: 'src/assets/images/img-depoimentos-m.png', texto: "Ao participar dos projetos voluntários, pude aplicar meus conhecimentos em situações reais e desenvolver soluções junto a uma equipe colaborativa.", autor: "Fernanda Costa" },
    { id: 7, image: 'src/assets/images/img-depoimentos-h.png', texto: "A mentoria na Código Certo Coders me proporcionou uma visão mais clara de como traçar meu caminho na tecnologia.", autor: "Rafael Santos" },
    { id: 8, image: 'src/assets/images/img-depoimentos-m.png', texto: "Os eventos promovidos pela comunidade foram incríveis para ampliar meu networking. Fiz conexões importantes com profissionais de diversas áreas.", autor: "Juliana Ferreira" }
];

function Depoimentos() {
    const [slidesPerView, setSlidesPerView] = useState(4); // Estado inicial para telas maiores

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 550) {
                setSlidesPerView(1); // Até 550px
            } else if (window.innerWidth > 550 && window.innerWidth <= 880) {
                setSlidesPerView(2); // Entre 551px e 880px
            } else if (window.innerWidth > 880 && window.innerWidth <= 1024) {
                setSlidesPerView(3); // Entre 881px e 1024px
            } else {
                setSlidesPerView(4); // Acima de 1025px
            }
        }

        handleResize(); // Verifica o tamanho da tela quando o componente carrega

        window.addEventListener("resize", handleResize); // Adiciona o evento de resize

        return () => {
            window.removeEventListener("resize", handleResize); // Remove o evento ao desmontar o componente
        };
    }, []);

    return (
        <section className='container-bg'>
            <div className='container'>
                <h2 className='depoimentos-title'>O que nossos <span className='color-red'>membros dizem?</span></h2>
                <div className='depoimentos-card'>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={slidesPerView}
                        navigation
                        pagination={{ clickable: true }}
                        className="swiper-container"
                    >
                        {depoimentos.map((depoimento) => (
                            <SwiperSlide key={depoimento.id}>
                                <div className='depoimento'>
                                    <img src={depoimento.image} className='slide-img' alt="Depoimento" />
                                    <p>{depoimento.texto}</p>
                                    <cite>{depoimento.autor}</cite>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Depoimentos;