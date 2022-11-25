import './App.css';
import { useState } from "react";
import productData from "./assets/products.json";
import ProductItem from './components/ProductItem';
import Cart from './components/Cart';
import FilterGroup from './components/FilterGroup';

function App() {

  const [amount, setAmount] = useState(0);
  const [entry, setEntry] = useState({});
  const [like, setLike] = useState([]);
  const [items, setItems] = useState(productData.sort((a, b) => {
    return (b.rating - a.rating);
  }));
  const [filter, setFilter] = useState({});

  return (
    <>
      <div style={{ minWidth: "100%", right: "0" }}><h1 style={{ color: "#434343", fontSize: "70pt", backgroundColor: "#ff7a45", padding: "1rem", }}>My Mini Store</h1></div>
      <div className="App">

        <FilterGroup data={productData} item={items} filter={filter} setFilter={setFilter} like={like} entry={entry} setItems={setItems}></FilterGroup>
        <div style={{ display: "flex" }}>
          <div className='itemPlace'>
            {items.map((item, index) => (
              <ProductItem item={item} amount={amount} setAmount={setAmount} entry={entry} setEntry={setEntry} like={like} setLike={setLike}></ProductItem>
            ))}
          </div>

          <div><Cart amount={amount} setAmount={setAmount} entry={entry} setEntry={setEntry}></Cart></div>
        </div>
      </div>
    </>
  );
}

export default App;
