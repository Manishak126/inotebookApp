import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{
    // const s1={
    //     "name":"Manisha",
    //     "class":"ISE-6A"
    // }

    // const [state, setState]= useState(s1);
    // const update=()=>{
    //     setTimeout(()=>{
    //         setState({
    //             "name":"Anisha",
    //             "class":"ISE-5B"
    //         })
    //     },1000);
    // }

    const notesInitial =[
        {
            "_id": "669751d9b4e433f3f071ad55",
            "user": "668459ffb92d47def551c228",
            "title": "About me",
            "description": "I am Manisha",
            "tag": "Personal",
            "date": "2024-07-17T05:08:41.758Z",
            "__v": 0
        },
        {
            "_id": "66975226b4e433f3f071ad57",
            "user": "668459ffb92d47def551c228",
            "title": "Fav things",
            "description": "Sleep, Being happy",
            "tag": "It's me",
            "date": "2024-07-17T05:09:58.281Z",
            "__v": 0
        },
        {
            "_id": "669751d9b4e433f3f071ad55",
            "user": "668459ffb92d47def551c228",
            "title": "About me",
            "description": "I am Manisha",
            "tag": "Personal",
            "date": "2024-07-17T05:08:41.758Z",
            "__v": 0
        },
        {
            "_id": "66975226b4e433f3f071ad57",
            "user": "668459ffb92d47def551c228",
            "title": "Fav things",
            "description": "Sleep, Being happy",
            "tag": "It's me",
            "date": "2024-07-17T05:09:58.281Z",
            "__v": 0
        },
        {
            "_id": "669751d9b4e433f3f071ad55",
            "user": "668459ffb92d47def551c228",
            "title": "About me",
            "description": "I am Manisha",
            "tag": "Personal",
            "date": "2024-07-17T05:08:41.758Z",
            "__v": 0
        },
        {
            "_id": "66975226b4e433f3f071ad57",
            "user": "668459ffb92d47def551c228",
            "title": "Fav things",
            "description": "Sleep, Being happy",
            "tag": "It's me",
            "date": "2024-07-17T05:09:58.281Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return(
       < NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
       </NoteContext.Provider>
    )
}

export default NoteState;
