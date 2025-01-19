import Carousel from 'react-multi-carousel';
import './style.css';

export default function Section1() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const section1 = {
        'slide': [
            {
                'label': 'Trying Flone\'s Blog',
                'heading': 'Display your best articles in a grid or an unique minimal layout.',
                'paragraph': 'A wide range of layouts for displaying your blogs and capture audiences\’ attention',
                'image': 'assets/slide-01-image-01.png'
            },
            {
                'label': 'Flone\'s Shop',
                'heading': 'Fully optimized & customizable shop samples, visually bold design & beautiful effects ',
                'paragraph': 'Get your readers familiar with your business’ featured projects and achievements. ',
                'image': 'assets/slide-02-image-01.png'
            }
        ]
    }
    return (
        <div className='section-1'>
            <Carousel
                containerClass='section-1-container'
                itemClass='section-1-item'
                responsive={responsive}
                showDots={true}
                arrows={false}
            >
                {
                    section1.slide.map((item, index) => (
                        <>
                            <div className="section-1-item-text" key={index}>
                                <label>{item.label}</label>
                                <h3>{item.heading}</h3>
                                <p>{item.paragraph}</p>
                            </div>
                            <div className="section-1-item-image">
                                <img src={item.image} alt='' />
                            </div>
                        </>
                    ))
                }
            </Carousel>
        </div>
    )
}
