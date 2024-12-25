import './style.css';
import Hero from '../../Components/Hero/hero';
import Store from '../../Components/Store/store';
import home_content from '../../home.json';

export default function Home() {
    return (
        <div className="home">
            {/* <Hero /> */}
            <Store data={home_content} />
        </div>
    )
}