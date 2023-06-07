import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../redux/products.slice";

export default function Product({ item }) {
  const [updateFlag, setUpdateFlag] = useState(false);
  const [itemDetails, setItemDetails] = useState({
    id: item.id,
    title: item.title,
    description: item.description,
    price: item.price
  });
  const dispatch = useDispatch();
  const editHandler = () => {
    setUpdateFlag((prev) => !prev);
  };
  const changeHandler = (event) => {
    const { value, name } = event.target;
    setItemDetails((prev) => ({ ...prev, [name]: value }));
  };
  const updateItemHandler = () => {
    dispatch(
      updateItem({
        ...item,
        id: itemDetails.id,
        description: itemDetails.description,
        title: itemDetails.title,
        price: itemDetails.price
      })
    );
    setUpdateFlag(false);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid grey"
      }}
    >
      <div>
        <img
          style={{ width: "100px", height: "auto" }}
          src={item.thumbnail}
          alt="thumbnail"
        />
      </div>
      <div style={{ textAlign: "left" }}>
        <div>id:{item.id}</div>
        <div>
          title:
          {updateFlag ? (
            <input
              onChange={changeHandler}
              name="title"
              value={itemDetails.title}
            />
          ) : (
            <span>{item.title}</span>
          )}
        </div>
        <div>
          description:
          {updateFlag ? (
            <input
              onChange={changeHandler}
              name="description"
              value={itemDetails.description}
            />
          ) : (
            <span>{item.description}</span>
          )}
        </div>
        <div>
          price:
          {updateFlag ? (
            <input
              onChange={changeHandler}
              name="price"
              value={itemDetails.price}
            />
          ) : (
            <span>{item.price}</span>
          )}
        </div>
      </div>
      <div>
        <button
          onClick={() => dispatch(deleteItem(item.id))}
          style={{ display: "block" }}
        >
          delete
        </button>
        <button onClick={editHandler} style={{ display: "block" }}>
          edit
        </button>
        {updateFlag && <button onClick={updateItemHandler}>update</button>}
      </div>
    </div>
  );
}
