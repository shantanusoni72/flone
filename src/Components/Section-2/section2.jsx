import Carousel from 'react-multi-carousel';
import './style.css';

export default function Section2() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const section2 = {
        cards: [
            'assets/image-01.jpg',
            'assets/image-02.jpg',
            'assets/image-03.jpg',
            'assets/image-05.jpg',
            'assets/image-01.jpg',
            'assets/image-02.jpg'
        ]
    }
    return (
        <div className='section-2'>
            <h1>Immensity of templates & layovte with advanced options</h1>
            <div className='section-2-row'>
                <div className="section-2-row-1-col">
                    <h2>Premade Headers</h2>
                    <p>
                        Power up your pages with beautifully designed header styles. Each style comes with a variety of header options for your
                        choice.
                    </p>
                </div>
                <div className="section-2-row-1-col">
                    <h2>Premade Footers</h2>
                    <p>
                        Enhance the navigation experience with 3+ footer styles exclusively designed for Flone. The power of customization
                        is given in your hands.
                    </p>
                </div>
            </div>
            <Carousel 
                responsive={responsive} 
                containerClass='section-2-carousel' 
                itemClass='section-2-item' 
                showDots={true} 
                arrows={false} 
                infinite={true}
            >
                {
                    section2.cards.map((item, index) => (
                        <img key={index} src={item} alt='' />
                    ))
                }
            </Carousel>
        </div>
    )
}
