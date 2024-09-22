import React from "react";

function Blog() {
  return (
    <section className="blog">
      <h2>Últimos Artigos</h2>
      <div className="articles">
        <article>
          <h3>Como Cuidar da Sua Pele no Verão</h3>
          <p>Dicas essenciais para manter sua pele saudável e radiante.</p>
          <a href="#" className="btn">
            Leia Mais
          </a>
        </article>
        <article>
          <h3>Os Benefícios do Retinol para a Pele</h3>
          <p>
            Descubra como o retinol pode transformar sua rotina de skincare.
          </p>
          <a href="#" className="btn">
            Leia Mais
          </a>
        </article>
      </div>
    </section>
  );
}

export default Blog;
