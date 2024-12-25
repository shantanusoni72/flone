import Button from '../../Utils/Button/button';
import './style.css';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <h1>Feeling in love? <span>Purchase Flone !</span></h1>
                <p>
                    Impressive design, powerful features, and easy customization
                </p>
                <div className="footer-action">
                    <Button text='Purchase Now' link='#' />
                </div>
            </div>
        </div>
    )
}