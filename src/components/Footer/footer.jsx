import './footer.css'
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';


function Footer() {
    return (
        <section className='footer-container'>
            <div className='footer-box'>
                <div className='footer-image'>
                    <img src='src/assets/images/icones/logo-branco.svg' />
                </div>
                <div className='footer-icones'>
                    <h3>Nos acompanhe em nas redes sociais</h3>
                    <ul className='footer-lista-icones'>
                        <li>
                            <a href='https://www.instagram.com/codigocertocoders' target="_blank" rel="noopener noreferrer"> <img src="src/assets/images/icones/icon-insta.svg" alt="Icone do Instagram" width={40} height={40} /></a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/company/codigocertocoders' target="_blank" rel="noopener noreferrer"> <img src="src/assets/images/icones/icon-Linkedin.svg" alt="Icone do Linkedin" width={40} height={40} /></a>
                        </li>
                        <li>
                            <a href='https://github.com/codigocerto' target="_blank" rel="noopener noreferrer"> <img src="src/assets/images/icones/icon-git.svg" alt="Icone do Git" width={40} height={40} /></a>
                        </li>
                        <li>
                            <a href='https://discord.com/invite/y3GHwPvsMK' target="_blank" rel="noopener noreferrer"> <img src="src/assets/images/icones/icon-discord.svg" alt="Icone do Discord" width={40} height={40} /></a>
                        </li>
                    </ul>
                </div>

                <div className='footer-menu'>
                    <ul>
                        <li className="footer-icon"> <a href='https://chat.whatsapp.com/CYrfRQRLVcM6r0CreK4gYU'><KeyboardDoubleArrowRightRoundedIcon fontSize="small" />Entrar em Contato</a></li>
                        <li className="footer-icon"> <a href='#'><KeyboardDoubleArrowRightRoundedIcon fontSize="small" />Trabalhe Conosco</a></li>
                        <li className="footer-icon"> <a href='#'><KeyboardDoubleArrowRightRoundedIcon fontSize="small" />Politica e Privacidade</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-vermelho'>
                <p>© 2024 Código Certo Coders. Todos os direitos reservados. | Equipe de Desenvolvimento 01</p>
            </div>
        </section>
    )
}
export default Footer;