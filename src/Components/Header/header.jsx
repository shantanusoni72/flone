import Button from '../../Utils/Button/button';
import './style.css';

export default function Header() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        if (window.pageYOffset !== 0) {
            document.querySelector(".header-container.normal").style.display = "none";
            document.querySelector(".header-container.sticky").style.display = "flex";
        } else {
            document.querySelector(".header-container.normal").style.display = "flex";
            document.querySelector(".header-container.sticky").style.display = "none";
        }

        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) {
            document.querySelector(".header-container.sticky").style.top = "0";
        } else {
            document.querySelector(".header-container.sticky").style.top = "-200px";
        }
        prevScrollpos = currentScrollPos;
    }
    return (<>
        <div className="header-container sticky">
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
        <div className="header-container normal">
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
    </>)
}