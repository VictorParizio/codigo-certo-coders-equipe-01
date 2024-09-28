import { useState } from 'react';
import './faq.css';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';

function Faq() {

    const source = [
        {
            summary: "Há algum custo para se inscrever na Código Certo Coders?",
            detail: "A participação na comunidade é 100% gratuita. Todos os nossos recursos, oportunidades, cursos e eventos estão disponíveis sem qualquer custo para os membros."
        },
        {
            summary: "Como faço para me tornar um membro da Código Certo Coders?",
            detail: "Para se tornar um membro, basta seguir os três passos simples: Defina sua área de interesse, faça sua inscrição e participe ativamente da comunidade."
        },
        {
            summary: "Quais são os benefícios de participar da comunidade?",
            detail: "Ao se juntar à Código Certo Coders, você terá acesso a mentoria especializada, projetos voluntários, eventos de networking, e uma vasta biblioteca de recursos de aprendizagem."
        },
        {
            summary: "O que são soft skills e por que são importantes?",
            detail: "Soft skills são habilidades interpessoais, como comunicação, trabalho em equipe e liderança, que são essenciais para o sucesso profissional. Nossa comunidade oferece recursos para ajudar você a desenvolver essas habilidades."
        },
        {
            summary: "Posso participar mesmo que ainda não tenha experiência?",
            detail: "Sim! A Código Certo Coders acolhe tanto iniciantes quanto profissionais experientes. Oferecemos suporte e oportunidades de aprendizado para ajudá-lo a desenvolver suas habilidades, independentemente do seu nível de experiência."
        },
        {
            summary: "Quais são os requisitos para participar dos projetos voluntários?",
            detail: "Os projetos voluntários estão abertos a todos os membros da comunidade, independentemente do nível de experiência. Basta escolher um projeto que se alinhe com suas habilidades e interesses e se inscrever."
        },
        {
            summary: "Quais são os requisitos para participar do voluntariado?",
            detail: "Os requisitos para se voluntariar incluem colaboração e trabalho em equipe, vontade de aprender e crescer, e uma comunicação clara e eficaz."
        },
        {
            summary: "Quais são as áreas disponíveis para voluntariado?",
            detail: "As áreas disponíveis para voluntariado na Código Certo Coders incluem: Analista de Marketing, Gestor de Projetos, UX/UI Designer, Cientista de Dados, Desenvolvedor Front-End, Desenvolvedor Back-End, Desenvolvedor FullStack, DevOps e Desenvolvedor Mobile."
        },
    ];
    const [openedItems, setOpenedItems] = useState([]);

    const handleClick = (event, selectedItem) => {
        event.preventDefault();

        setOpenedItems((prev) => {
            if (prev.some(i => i === selectedItem)) {
                return prev.filter(previousItem => previousItem !== selectedItem);
            }
            return [...prev, selectedItem];
        });
    };

    // Divida o array source em duas metades
    const firstColumn = source.slice(0, Math.ceil(source.length / 2)); // Primeira metade (4 itens)
    const secondColumn = source.slice(Math.ceil(source.length / 2));    // Segunda metade (4 itens)

    //    
    return (
        <section className="faq-container">
            <h2 className="faq-titulo">
                Tire as suas <span className='color-red'>dúvidas.</span>
            </h2>

            <div className='faq-accordion'>
                <div className='faq-perguntas'>
                    {firstColumn.map((item) => (
                        <details
                            key={item.summary}
                            open={openedItems.some(i => i === item.summary)}
                            onClick={(event) => handleClick(event, item.summary)}
                        >
                            <summary>
                                <KeyboardDoubleArrowUpRoundedIcon fontSize="medium" className="faq-icon" />
                                {item.summary}
                            </summary>
                            {/* Envolver o conteúdo da resposta em uma div */}
                            <div>
                                <p>{item.detail}</p>
                            </div>
                        </details>
                    ))}
                </div>
                <div className='faq-perguntas'>
                    {secondColumn.map((item) => (
                        <details
                            key={item.summary}
                            open={openedItems.some(i => i === item.summary)}
                            onClick={(event) => handleClick(event, item.summary)}
                        >
                            <summary>
                                <KeyboardDoubleArrowUpRoundedIcon fontSize="medium" className="faq-icon" />
                                {item.summary}
                            </summary>
                            {/* Envolver o conteúdo da resposta em uma div */}
                            <div>
                                <p>{item.detail}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section >
    );
}

export default Faq;