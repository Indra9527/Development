import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShoppingTwoTone } from '@ant-design/icons';

export default function Cart(props) {
    const entry = props.entry;
    return (
        <div>
            <Card style={{ width: '32rem' }} className="shadow-lg p-3 mb-5 rounded">
                <Card.Header><h2><ShoppingTwoTone /> Your Cart</h2></Card.Header>
                <Card.Body>
                <ListGroup variant="flush">
                    {Object.keys(props.entry).map((key, index) => ( 
                        <ListGroup.Item><h4 key={index}><span style={{ color: 'red' }}>{entry[key]}</span>x {key}</h4></ListGroup.Item>
                    ))} 
                    <br></br>
                    <ListGroup.Item><h3 style={{ color: 'red' }}>Total: ${props.amount}</h3></ListGroup.Item>
                </ListGroup>
                <br></br>
                <Button variant="outline-success" onClick={() => check(props)} style={{ marginLeft: '260px' }}><b>CheckOut</b></Button>
                </Card.Body>
            </Card>
        </div>
        
    )
}

function check(props) {
    props.setAmount(0);
    props.setEntry({});
}
