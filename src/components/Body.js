import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Swiggy_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { LoggedInUser, setUserName } = useContext(UserContext);
  console.log("rendered");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(Swiggy_URL);
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>looks like you're offline!! please check your internet connection</h1>
    );
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(e);
            }}
          />
          {/* this is to filter out the object of resturant when u search something.
          searchText is jo hm search bar m likhenge.
          res.info.name= resturants ka nam h jo loop krke eke ek bar ata h
          hm dono ko res.info.name.includes(searchText) mila rhe h. agar milega naam to filteredresturant m add oga
          jo last m list of resturnt m jaega or ui p dikhega.

           */}
          <button
            className="px-4 py-1 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              let filteredList = ListOfRestaurants;
              if (searchText) {
                filteredList = filteredList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
              }
              filteredList = filteredList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
              // setSearchText(" ");

              /**  const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);**/
              // if (searchText) {
              // filteredList = ListOfRestaurants.filter((res) =>
              //     res.info.name.toLowerCase().includes(searchText.toLowerCase())&& res.info.avgRating>4
              //   );
              // }
              // setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={LoggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="reset px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              if (searchText || FilteredRestaurant) {
                setSearchText("");
                setFilteredRestaurant(ListOfRestaurants);
              }
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {FilteredRestaurant.length === 0
          ? "No data found"
          : FilteredRestaurant.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                {restaurant?.info?.aggregatedDiscountInfoV3?.header !==
                undefined ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}

        {/* 
        {FilteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
      </div>
    </div>
  );
};
export default Body;
