import './style.css';

export default function Store({ data }) {
    return (
        <div className='store-container'>
            <div className="store-text">
                <h1>38<sup>+</sup></h1>
                <h2>Stunning Homepages</h2>
                <p>
                    Choose a homepage to start navigating Flone. Build strong & impressive websites using Flone’s premade templates.
                </p>
            </div>
            <div className="store">
                {
                    data.map((item, index) => (
                        <a href='#' className="store-card" key={index}>
                            <div className="store-card-image">
                                <img src={item.image} alt={item.text} />
                            </div>
                            <p>{item.text}</p>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}