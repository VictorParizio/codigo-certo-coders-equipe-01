import Discord from "../../assets/images/discord.png";
import Github from "../../assets/images/github.png";
import Instagram from "../../assets/images/instagram.png";
import Linkedin from "../../assets/images/linkedin.png";
import Input from "./components/Input/Input";
import Paragraph from "./components/Paragraph/Paragraph";
import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="container-bg ">
      <div className="container-contact-form container">
        <div className="contact">
          <Title>
            Entre em <br /> <span>contato conosco. </span>
          </Title>
          <Paragraph>
            Entre em contato conosco, responderemos através dos contatos abaixo
            ou preencha o formulário que entraremos em contato o mais breve.
          </Paragraph>
          <div className="container-sociais">
            <h4>Nossas redes sociais</h4>
            <div className="rede-sociais">
              <img className="circle-sociais" src={Instagram} alt="instagram" />
              <img className="circle-sociais" src={Linkedin} alt="instagram" />
              <img className="circle-sociais" src={Github} alt="instagram" />
              <img className="circle-sociais" src={Discord} alt="instagram" />
            </div>
          </div>
          <Button>Entrar no grupo do WhatsApp</Button>
        </div>
        <div className="contact-form">
          <h3 className="title-form">Preencha o formulário abaixo</h3>
          <Paragraph>
            Preencha as informações abaixo para entrar em contatos conosco.
          </Paragraph>
          <div className="container-inputs">
            <Input />
          </div>
          <div className="container-button">
            <Button widthButton>Enviar</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
