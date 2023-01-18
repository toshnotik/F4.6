import {useEffect, useState} from "react";
import {Recipe, RecipesService} from "../api";
import Table from 'react-bootstrap/Table';
import "../styles/RecipesList.css";
import {Link} from "react-router-dom";

function RecipeItem(props: Recipe) {
    return (<tr className={"item"}>
               <td><Link to="/сategory" state={{categoryId: props.category, categoryTitle: props.category_title}}>
                   {props.category_title}</Link></td>
               <td><Link to={`/dish`} state={{RecipeItem: props}}>{props.title}</Link></td>
               <td>{props.authors_names.join(', ')}</td>
            </tr>
    );
}

export default function RecipesList() {
    const [recipes, setRecipes] = useState<Recipe[] | undefined>();
    const loadRecipes = async () => {
        setRecipes(await RecipesService.recipesList());
    };
    useEffect(() => {
        loadRecipes();
    }, []);
    return (
        <div>
            <h2>Общий список</h2>
            <Table striped bordered hover className={"recipe"}>
                <thead><tr><th>Категория</th><th>Наименование</th><th>Автор</th></tr></thead>
                <tbody>
                    {recipes && recipes.map(recipe => {return <RecipeItem key={recipe.id} {...recipe}/>;})}
                </tbody>
            </Table>
        </div>
    );
}