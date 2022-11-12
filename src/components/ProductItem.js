import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShopTwoTone, PlusSquareTwoTone, MinusSquareTwoTone} from '@ant-design/icons';

export default function ProductItem(props) {
    const item = props.item;

    return (
        <div>
            <Card style={{
                width: '31rem', height: '45rem', position: 'relative',
                fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
            }}
                className="shadow-lg p-3 mb-5 rounded">
                <Carousel style={{ width: "28rem", height: "20rem", margin: "auto", marginTop: "5px" }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ width: "28rem", height: "20rem"}}
                            src={item.images[0]}
                            alt="1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ width: "28rem", height: "20rem"}}
                            src={(item.images.length > 1) ? item.images[1] : item.images[0]}
                            alt="2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ width: "28rem", height: "20rem"}}
                            src={(item.images.length > 2) ? item.images[2] : item.images[0]}
                            alt="3"
                        />
                    </Carousel.Item>
                </Carousel>
                <Card.Body>
                    <Card.Title><h3><b>{item.title}</b></h3></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted ">Brand: {item.brand}</Card.Subtitle>
                    <Card.Text><p style={{ fontSize: '13pt' }}>{item.description}</p></Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <span style={{ fontSize: '13pt' }}>&#9733; Rate: {item.rating}</span>
                            <span style={{ marginLeft: "160px", fontSize: '13pt' }}><ShopTwoTone /> In stock: {item.stock}</span>
                        </ListGroup.Item>
                        <ListGroup.Item><h4>Price: ${item.price}</h4></ListGroup.Item>
                    </ListGroup>
                    <ToggleButton
                        style={{ position: 'absolute', bottom: '3.5%', left: '8%' }}
                        type="checkbox"
                        variant="outline-danger"
                        checked={(props.like.includes(item.title))}
                        onClick={() => favour(props)}>
                        <b>&hearts; Favourite</b>
                    </ToggleButton>
                    <ButtonGroup style={{ marginLeft: "270px", position: 'absolute', bottom: '2%', left: '8%', width: "20px" }}>
                        <Button variant="warning" onClick={() => addToCart(props)}><PlusSquareTwoTone /><b>AddOne</b></Button>
                        <Button variant="secondary" onClick={() => removeToCart(props)}><MinusSquareTwoTone /><b>Remove</b></Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

function addToCart(props) {
    props.setAmount(props.amount + props.item.price);
    const tempDic = props.entry;
    if (!(props.item.title in tempDic)) {
        tempDic[props.item.title] = 0;
    }
    tempDic[props.item.title]++;
    props.setEntry(tempDic);
}

function removeToCart(props) {
    const tempDic = props.entry;
    if (props.item.title in tempDic) {
        tempDic[props.item.title]--;
        props.setAmount(props.amount - props.item.price);
        if (tempDic[props.item.title] === 0) { delete tempDic[props.item.title] };
    }
    props.setEntry(tempDic);
}

function favour(props) {
    const temp = props.like;
    if (!(temp.includes(props.item.title))) {
        temp.push(props.item.title);
    } else delete temp[temp.indexOf(props.item.title)]
    props.setLike([...props.like]);
}