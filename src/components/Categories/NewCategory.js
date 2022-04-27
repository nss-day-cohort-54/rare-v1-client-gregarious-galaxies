import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { postCategory } from "./CategoryManager";

export const AddCategory = () => {
    //useState hook function sets the initial value of dog to the defined properties, updateDog is a function you invoke later on to modify the values
    const [category, updateCategory] = useState({
        label: ""
    });
    const history = useHistory()

    const addNewCategory = () => {
        //object that we want to send to our API
        const newCategory = {
            label: category.label
        }

        postCategory(newCategory)
            .then(() => history.push(`/categories`))
    }

    //this will be the form you display, you need to capture user input and save to new object
    return (
        <form className="categoryForm">
            <h2 className="Form__title">Add a new category</h2>
            <fieldset>
                <div className="form-group">
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Category"
                        //this onChange function is an event listener that uses the setter function from above 
                        onChange={
                            (evt) => {
                                const copy = {...category}
                                copy.label = evt.target.value
                                updateCategory(copy)
                            }
                        } />
                </div>
                <div>
                <button id="btn" color="success" outline className="btn btn-addCategory" onClick={addNewCategory} >
                    Submit
                </button>
            </div>
            </fieldset>
        </form>
    )
}
