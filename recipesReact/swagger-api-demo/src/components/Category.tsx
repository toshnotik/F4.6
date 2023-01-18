import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {Recipe, RecipesService} from "../api";
import Table from "react-bootstrap/Table";

function CategoryItem(props: Recipe) {
    return (<tr className={"item"}>
            <td><Link to={`/dish`} state={{RecipeItem: props}}>{props.title}</Link></td>
            <td>{props.authors_names.join(', ')}</td>
        </tr>
    );
}

export default function Category() {
    const location = useLocation();
    const {categoryId, categoryTitle} = location.state;
    const [recipes, setRecipes] = useState<Recipe[] | undefined>();
    const loadRecipes = async () => {
        setRecipes(await RecipesService.recipesList());
    };
    useEffect(() => {
        loadRecipes();
    }, []);
    const filterRecipes = recipes?.filter(recipe => recipe.category===categoryId);

    return (
        <div>
        <h2>{categoryTitle}</h2>
        <Table striped bordered hover className={"recipe"}>
            <thead><tr><th>Наименование</th><th>Автор</th></tr></thead>
            <tbody>
            {filterRecipes && filterRecipes.map(recipe => {return <CategoryItem key={recipe.id} {...recipe}/>;})}
            </tbody>
        </Table>
        </div>
    );
}

