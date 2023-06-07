import { useEffect } from "react";
import "./styles.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsList } from "./utils/apiCall";
import { setItemsList } from "./redux/products.slice";
import ProductsList from "./components/ProductsList";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsList("https://dummyjson.com/products")
      .then((res) => dispatch(setItemsList(res)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <ProductsList />
    </div>
  );
}
