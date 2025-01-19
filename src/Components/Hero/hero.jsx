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
    </div>
  )
}
