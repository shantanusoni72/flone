import './style.css';

export default function Hero() {
  return (
    <div className='hero-container'>
      <div className="hero">
        <div className="hero-text">
          <h1>Flone - Minimal React Template</h1>
          <p>
            A versatile React eCommerce Template for different purposes that emphasizes creativity, efficiency, and diversity.
          </p>
        </div>
        <ul className="hero-image-slider">
          <li>
            <img src='assets/slide-image-01.png' alt='' />
          </li>
          <li>
            <img src='assets/slide-image-02.png' alt='' />
          </li>
          <li>
            <img src='assets/slide-image-03.png' alt='' />
          </li>
        </ul>
      </div>
      <div className="hero-cards">
        <div className="hero-card">
          <h3>Latest React & Redux</h3>
          <p>Latest React and Redux used.</p>
        </div>
        <div className="hero-card">
          <h3>Mega Menu</h3>
          <p>Mega Menu is the door that has the entrance to every pages of your site. It navigates things for bringing ease.</p>
        </div>
        <div className="hero-card">
          <h3>Responsive Design</h3>
          <p>Flone is super responsive & work perfectly in all devices.</p>
        </div>
        <div className="hero-card">
          <h3>Real Support</h3>
          <p>We provide 7 days a week one by one real support.</p>
        </div>
      </div>
    </div>
  )
}
