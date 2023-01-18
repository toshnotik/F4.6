import React, {useEffect, useState} from 'react';
import {Category, CategoryService} from "../api";
import {Link} from "react-router-dom";
import Table from "react-bootstrap/Table";

function CategoryItem(props: Category) {
    return (<tr className={"item"}>
                <td><Link to="/сategory" state={{categoryId: props.id, categoryTitle: props.title}}>{props.title}</Link></td>
            </tr>
    );
}

export default function CategoryList() {
    const [category, setCategory] = useState<Category[] | undefined>();
    const loadCategory = async () => {
        setCategory(await CategoryService.categoryList());
    };
    useEffect(() => {
        loadCategory();
    }, []);
    return (
        <div>
            <h2>Общий список</h2>
            <Table striped bordered hover className={"recipe"}>
                <thead><tr><th>Наименование</th></tr></thead>
                <tbody>
                {category && category.map(category => {return <CategoryItem key={category.id} {...category}/>;})}
                </tbody>
            </Table>
        </div>
    );
}