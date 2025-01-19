import './style.css';
import Hero from '../../Components/Hero/hero';
import Store from '../../Components/Store/store';
import Section1 from '../../Components/Section-1/section1.jsx'
import Section2 from '../../Components/Section-2/section2.jsx';
import home_content from '../../home.json';
import Section3 from '../../Components/Section-3/section3.jsx';

export default function Home() {
    return (
        <div className="home">
            <Hero />
            <Store data={home_content} />
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}