import './conhecaAC3.css';

function ConhecaAC3() {
    return (
        <section className='conheca-ac3-container'>
            <div className="conheca-ac3">
                <div className='conheca-ac3-text'>
                    <h2>Por que escolher a <span className='color-red'>Código Certo Coders?</span></h2>
                    <p>Na Código Certo Coders, acreditamos que o desenvolvimento pessoal e profissional na área de tecnologia vai além do aprendizado técnico, ele envolve colaboração, inovação e a construção de redes de contatos valiosas.</p>
                    <p>Oferecemos uma ampla gama de recursos e oportunidades para que você possa expandir suas habilidades, participar de projetos práticos e conectar-se com mentores experientes que irão guiar o seu crescimento, nossa comunidade é um ambiente vibrante e acolhedor, onde a troca de conhecimento e a cooperação são incentivadas.</p>
                    <a href="https://chat.whatsapp.com/CYrfRQRLVcM6r0CreK4gYU" className="btn" target="_blank" rel="noopener noreferrer" aria-label="Entrar em contato com Código Certo Coders">Entrar em contato</a>
                </div>
                <div className='conheca-ac3-img'>
                    <img src='src/assets/images/avatar_c3.webp' alt='Ilustração da comunidade Código Certo Coders' />
                </div>
            </div>
        </section>
    )
}

export default ConhecaAC3;