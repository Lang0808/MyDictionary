// flip card: https://www.w3schools.com/howto/howto_css_flip_card.asp
import "./Card.css";

function Card(props){
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {props.FrontSide}
                </div>
                <div className="flip-card-back">
                    {props.BackSide}
                </div>
            </div>
        </div>
    )
}

export default Card;