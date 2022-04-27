import React, { useEffect, useState } from "react";
import { AddTag } from "./TagForm";
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
                return <div key={tag.id} className="tagListItem">
                    <li>{tag.label} <button>Edit</button><button>Delete</button></li>
                </div>
            })
        }
        <AddTag tags={tags}/>
        </>
    )
}