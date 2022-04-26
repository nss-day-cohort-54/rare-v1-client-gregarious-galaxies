import React, { useEffect, useState } from "react";
import { getTagById, getTags } from "./TagManager";

export const TagList = () => {
    const[tags, setTags]= useState([])

    useEffect(()=>{
        getTags()
        .then(tagData => setTags(tagData))
    },
        []
    )



    return(
        <>
        {
            tags.map(tag => {
                return <div className="tagListItem">
                    <li>{tag.label} <button>Edit</button><button>Delete</button></li>
                </div>
            })
        }
        </>
    )
}