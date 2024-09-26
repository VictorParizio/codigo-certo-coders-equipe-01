import "./Input.css";

const Input = () => {
  return (
    <div>
      {/* <div className="container-inputs">
        <input type="text" name="name" placeholder="Nome" />
        <input type="email" name="email" placeholder="E-mail" />
        <input type="text" name="phone" placeholder="Celular com DDD" />
      </div> */}

      <input className="inputs" type="text" name="name" placeholder="Nome" />
      <input
        className="inputs"
        type="email"
        name="email"
        placeholder="E-mail"
      />
      <input
        className="inputs"
        type="text"
        name="phone"
        placeholder="Celular com DDD"
      />
    </div>
  );
};

export default Input;
