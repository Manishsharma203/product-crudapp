import { useSelector } from "react-redux";
import Product from "./Product";

export default function ProductsList() {
  const { itemsList } = useSelector((state) => state.products);
  return (
    <div
      style={{
        display: "flex",
        gap: "2px",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
      {itemsList.map((item) => (
        <div style={{ flexBasis: "100%" }} key={item.id}>
          <Product item={item} />
        </div>
      ))}
    </div>
  );
}
