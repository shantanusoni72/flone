import Button from '../../Utils/Button/button';
import './style.css';

export default function Header() {
    return (
        <div className="header-container">
            <div className="header">
                <div className="header-image">
                    <img src='assets/flone-black.png' alt='' />
                </div>
                <ul className="menu-items">
                    <li>
                        <a href='#'>Demos</a>
                    </li>
                    <li>
                        <a href='#'>Features</a>
                    </li>
                    <li>
                        <a href='#'>Support</a>
                    </li>
                </ul>
                <div className="header-action">
                    <Button text='Purchase' link='#' />
                </div>
            </div>
        </div>
    )
}