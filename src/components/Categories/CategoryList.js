import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "./CategoryManager";
import { AddCategory } from "./NewCategory";


export const CategoryList = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categoryData => setCategories(categoryData))
    },
        []
        //only runs on initial load
    )

    return (
        <>
        <h3>Categories</h3>
            {
                categories.map(category => {
                    return <div className="panel-block" key={category.id}>
                        <article className='aCategory'>
                            <div className="message-body">
                                <p className="category__category">{category.label}</p>
                                <button id="btn" color ="success" outline > Edit </button><br></br>
                                <button id="btn" color ="success" outline > Delete </button>
                            </div>
                        </article >
                    </div>
                })
            }
            <AddCategory categories={categories}/>
        </>
    )
};

// onClick={() => {removeDog(dog.id)}}
// onClick={() => history.push(`/edit-dog-profile/${dog.id}`)}