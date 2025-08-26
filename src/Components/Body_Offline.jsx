import RestaurantCard from "./RestaurantCard";
import resData from "../Utils/mockData";
import { useState } from "react";

const Body_Offline = () => {
    const [resList, setResList] = useState(resData); // it can be empty, null or have a value
    // This is array destructuring.

    return(
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredList = resList.filter((res) => (res.info.avgRating < 4));
                setResList(filteredList);
                console.log(filteredList);
            }}>Top Rated Restaurants</button>   
        </div>
        <div className="res-container">
            {/* <RestaurantCard restData={resData[0]}/> */}
            {
                resList.map((data) => <RestaurantCard key={data.info.id} restData={data}/>)
                // Each of the items must be uniquely identified and it is possible because of the "key"
            }
        </div>
    </div>
)}

export default Body_Offline;