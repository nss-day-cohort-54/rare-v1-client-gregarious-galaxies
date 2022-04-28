import React, { useState } from "react";
import { useHistory } from "react-router";
import { postTag } from "./TagManager";

export const AddTag=() => {
    const [tag, updateTag] = useState({
        label: ""
    });
    const history = useHistory()

    const addNewTag = () => {
        //object that we want to send to our API
        const newTag = {
            label: tag.label
        }

        postTag(newTag)
            .then(() => history.push(`/tags`))
    }

    return (
    <>
        <form className="tagForm">
            <h2 className="Form__title">Add A New Tag</h2>
            <fieldset>
                <div className="form-group">
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Tag"
                        //this onChange function is an event listener that uses the setter function from above 
                        onChange={
                            (evt) => {
                                const copy = {...tag}
                                copy.label = evt.target.value
                                updateTag(copy)
                            }
                        } />
                </div>
                <div>
                <button id="btn" className="btn-addTag" onClick={addNewTag} >
                    Submit Tag
                </button>
            </div>
            </fieldset>
        </form>
    </>
)
}