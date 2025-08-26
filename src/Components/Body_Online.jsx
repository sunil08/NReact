import React, { useEffect } from 'react'
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';
import { Link } from 'react-router';

export default function Body_Online() {

  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, SetFilteredRestaurants] = useState([]);

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6318871&lng=77.2843333&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    SetFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // Conditional rendering
  if(resList.length === 0){
    return <Shimmer/>;
  }
    
  return resList.length === 0 ? (<Shimmer/>
  ) : (
       <div className="body">
        <div className="filter">
          <div className='search'>
            <input type="text" className='search-box' value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
            {/* Whenever we want to change our value in our textbox we've to use e.target.value. We have to bind our input box. */}
            <button onClick={() => {
                console.log(searchText);
                const restaurantList = resList.filter((res)=> (res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                //setResList(restaurantList);
                SetFilteredRestaurants(restaurantList);
            }}>Search</button>
          </div>
            <button className="filter-btn" onClick={() => {
                const filteredList = resList.filter((res) => (res.info.avgRating == 4.1));
                setResList(filteredList);
                console.log(filteredList);
            }}>Top Rated Restaurants</button>   
        </div>
        <div className="res-container">
            {
                // resList.map((data) => <RestaurantCard key={data.info.id} restData={data}/>)
                filterRestaurant.map((data) => 
                <Link 
                to={"/restaurants/"+data.info.id}
                key={data.info.id}><RestaurantCard restData={data}/></Link>)
                // Key should be on parent JSX not on child so remove key from RestaurantCard
            }
        </div>
    </div>
  )
}


//  Code Slow
