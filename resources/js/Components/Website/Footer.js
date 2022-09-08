// import { set } from "lodash";
import React , {useState} from "react";

const Field = () =>  {
    const [field , setField] =  useState("");
    const [fieldList , setFieldList] =  useState({
        type:'', 
        label:'',
        
    });

    const addField = () => {
         setField();
    }
    return (
        <>
         <select onChange={addField}>
            <option value="text">Text</option>
            <option>Radio</option>
            <option>Select</option>
         </select>
        </>
    )
}

export default Field