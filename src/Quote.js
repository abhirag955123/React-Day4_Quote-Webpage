import React from 'react';
import './Quote.css'; 

function Quote() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play-circle">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16"></polygon>
          </svg>
          <h1>GeekFoods</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/quote">Quote</a></li>
            <li><a href="/resturants">Restaurants</a></li>
            <li><a href="/foods">Foods</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <button className="get-started-btn">Get started</button>
      </header>

      <main className="main">
        <section className="quote-section">
          <div className="quote">
            <p className="quote-text">It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.</p>
            <p className="quote-author">Adam Scott</p>
          </div>

          <div className="quote">
            <p className="quote-text">Eat breakfast like a king, lunch like a prince, and dinner like a pauper.</p>
            <p className="quote-author">Adelle Davis</p>
          </div>

          <div className="quote">
            <p className="quote-text">We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.</p>
            <p className="quote-author">Adelle Davis</p>
          </div>

          <div className="quote">
            <p className="quote-text">Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet..</p>
            <p className="quote-author">Albert Einstein</p>
          </div>

          <div className="quote">
            <p className="quote-text">Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.</p>
            <p className="quote-author">Alice May Brock</p>
          </div>

          <div className="quote">
            <p className="quote-text">Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, "Your fatness is an affront to me, so we have the right to treat you as offensively as you appear." Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.</p>
            <p className="quote-author">Anthelme Brillat-Savarin</p>
          </div>


          <div className="quote">
            <p className="quote-text">Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!</p>
            <p className="quote-author">Calvin Trillin</p>
          </div>

          <div className="quote">
            <p className="quote-text">Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good..</p>
            <p className="quote-author">Calvin Trillin</p>
          </div>

          <div className="quote">
            <p className="quote-text">Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good..</p>
            <p className="quote-author">Calvin Trillin</p>
          </div>


        {/* idhar se apna footer start hai */}

          <footer className="footer">
        <div className="footer-top">
          <h2>GeekFoods</h2>
          <p className="footer-text">All rights reserved under Abhishek Pal.</p>
        </div>

        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">History</a>
          <a href="#">Project</a>
          <a href="#">Services</a>
        </div>

        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com/inc_abhishek" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/inc-abhishek/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.github.com/abhirag955123" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    

        </section>
      </main>
    </div>
  );
}

export default Quote;
