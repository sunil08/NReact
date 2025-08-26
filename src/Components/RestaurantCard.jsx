import { BASE_ITEM_IMAGE_URL } from "../Utils/constants";

const RestaurantCard = ({restData}) => {
    const {cloudinaryImageId, name, cuisines, avgRating} = restData?.info // Optional chaining restData?.info
    return(
        <div id="res-card">
            <img className="card-image" src={BASE_ITEM_IMAGE_URL+cloudinaryImageId} alt="haldiram-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
        </div>
    )
}

export default RestaurantCard;