import React from "react";

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Receba Nossas Novidades</h2>
      <p>
        Inscreva-se na nossa newsletter e receba um desconto na primeira compra!
      </p>
      <form action="#">
        <input type="email" placeholder="Seu email" />
        <button type="submit">Assinar</button>
      </form>
    </section>
  );
}

export default Newsletter;
