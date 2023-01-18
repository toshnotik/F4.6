import {useLocation} from "react-router-dom";

function Dish() {
    const location = useLocation();
    const {RecipeItem} = location.state;
    return (
        <div>
            <h2>{RecipeItem.title}</h2>
            <p>{RecipeItem.text}</p>
        </div>
    );
}

export default Dish;