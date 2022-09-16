import './Cards.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Cards = (props) => {
    return (
        <div>
            <Card className="product-cards">
            <Card.Img className="product-img" variant="top" src={props.url}
            />
            <Card.Body>
            <Card.Title><h4>{props.title}</h4></Card.Title>
            <Card.Text className= "product-info">
            <p>{props.description}</p>
            <p>{props.price}</p>                      
            </Card.Text>
            <Button variant="primary" className="agregar-btn">Agregar a mi carrito</Button>
            </Card.Body>
            </Card>
        </div>
        
    )
}

export default Cards