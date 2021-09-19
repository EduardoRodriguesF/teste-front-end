import React from 'react';
import './styles.scss';

const NewsletterSignIn: React.FC = () => (
  <div className="newsletter-signin-container">
    <p><span>Assine nosso <b>Newsletter</b></span><br /> e receba novidades e promoções</p>
    <form>
      <input name="name" type="text" placeholder="Seu nome" />
      <input name="email" type="text" placeholder="Seu e-mail" />
      <button type="submit">Enviar</button>
    </form>
  </div>
);

export default NewsletterSignIn;
