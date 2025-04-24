import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div
      data-testid="resCard"
      className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="test font-bold py-4 text-lg">{name}</h3>
      <h4 title={cuisines.join(",")}>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};
//Higher Order Component
//input Restaurant Card==> RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    if (props === undefined) return;
    const { aggregatedDiscountInfoV3 } = props?.resData?.info;
    return (
      <div className="relative">
        <label className=" font-bold bg-black text-white m-2 p-2 rounded-lg absolute items-center">
          {aggregatedDiscountInfoV3.header +
            "" +
            aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
