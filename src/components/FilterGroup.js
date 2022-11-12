import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Checkbox, Slider, Switch, Radio } from 'antd';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FilterTwoTone } from '@ant-design/icons';

export default function FilterGroup(props) {

    const category = ['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration'];
    const filter = props.filter;
    const setFilter = props.setFilter;
    const productData = props.data;
    const like = props.like;
    const setItems = props.setItems;
    const entry = props.entry;

    function onChange() {
        var res = productData;
        var val = 0;
        if ("category" in filter) {
            val = filter["category"];
            if (val.length !== 0) {
                res = res.filter((item) => {
                    return (val.includes(item.category));
                });
            }
        }
        if ("price" in filter) {
            val = filter["price"];
            res = res.filter((item) => {
                return (item.price > val[0] && item.price < val[1]);
            });
        }
        if ("sort" in filter) {
            val = filter["sort"];
            switch (val) {
                case 'a':
                    res = res.sort((a, b) => {
                        return (a.rating - b.rating);
                    })
                    break;
                case 'b':
                    res = res.sort((a, b) => {
                        return (b.rating - a.rating);
                    })
                    break;
                case 'c':
                    res = res.sort((a, b) => {
                        return (a.price - b.price);
                    })
                    break;
                case 'd':
                    res = res.sort((a, b) => {
                        return (b.price - a.price);
                    })
                    break;
                default:
            }
            res = [...res] // new reference
        }
        if ("like" in filter) {
            val = filter["like"];
            if (val) {
                res = res.filter((item) => {
                    return (like.includes(item.title));
                });
            }
        }
        if ("cart" in filter) {
            val = filter["cart"];
            if (val) {
                res = res.filter((item) => {
                    return (item.title in entry);
                });
            }
        }
        setItems(res);
    }

    const filterChange = (checkedValues) => {
        const temp = filter;
        temp["category"] = checkedValues;
        setFilter(temp);
        onChange();
    }

    const sortChange = (e) => {
        const temp = filter;
        temp['sort'] = e.target.value;
        setFilter(temp);
        onChange();
    }

    const priceChange = (value) => {
        const temp = filter;
        temp["price"] = value;
        setFilter(temp);
        onChange();
    }

    const changeFavour = (checked) => {
        const temp = filter;
        temp["like"] = checked;
        setFilter(temp);
        onChange();
    };

    const changeCart = (checked) => {
        const temp = filter;
        temp["cart"] = checked;
        setFilter(temp);
        onChange();
    }

    return (
        <div style={{ marginBottom: "3rem" }}>
            <Card border="warning" style={{ width: '80%', minWidth: '64rem' }}
                className="shadow-lg p-3 mb-5 rounded">
                <Card.Header style={{ fontSize: "25pt" }}><FilterTwoTone /> Filter</Card.Header>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <span style={{ fontSize: "15pt", color: "#237804", marginRight: "20px" }}>Category:</span>
                            <b><Checkbox.Group options={category} onChange={filterChange} /></b>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span style={{ fontSize: "15pt", color: "#237804", marginRight: "20px" }}>Range of Price:</span>
                            <Slider
                                style={{ width: '50rem' }}
                                range={{ draggableTrack: true }}
                                step={10}
                                defaultValue={[0, 1800]}
                                min={0}
                                max={2000}
                                onChange={priceChange}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span style={{ fontSize: "15pt", color: "#237804", marginRight: "20px" }}>Only In Cart:</span>
                            <Switch style={{ display: "inline", }} checkedChildren="Open" unCheckedChildren="Close" onChange={changeCart} />
                            <span style={{ fontSize: "15pt", color: "#237804", marginRight: "20px", marginLeft: "60px" }}>Only Favourite:</span>
                            <Switch style={{ display: "inline", }} checkedChildren="Open" unCheckedChildren="Close" onChange={changeFavour} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span style={{ fontSize: "15pt", color: "#237804", marginRight: "20px" }}>Sort:</span>
                            <Radio.Group defaultValue="" buttonStyle="solid" onChange={sortChange}>
                                <Radio.Button value="a">Popular low to high</Radio.Button>
                                <Radio.Button value="b">Popular Hight to Low</Radio.Button>
                                <Radio.Button value="c">Price low to high</Radio.Button>
                                <Radio.Button value="d">Price High to high</Radio.Button>
                            </Radio.Group>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}