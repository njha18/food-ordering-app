import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = (items) => {
  console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action now
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-10/12">
            <div className="py-2">
              <span> {item.card.info.name}</span>
              <span>
                {" "}
                -₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs"> {item.card.info.description}</p>
          </div>
          <div className="w-2/12 p-2">
            <div className="absolute">
              <button
                className="p-2 mx-5  rounded bg-black text-white shadow-lg text-xs"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="h-22 w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
