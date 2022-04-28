import React, { useEffect, useState } from "react";
import { AddTag } from "./TagForm";
import { getTagById, getTags } from "./TagManager";
import "./Tags.css"

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
                    <li className ="tagItem">{tag.label} <button className ="btn-tagList">Edit</button><button className ="btn-tagList">Delete</button></li>
                </div>
            })
        }
        <AddTag tags={tags}/>
        </>
    )
}