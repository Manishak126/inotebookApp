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
            "_id": "669251d9b4e433f3f071ad55",
            "user": "668459ffb92d47def551c228",
            "title": "About me",
            "description": "I am Manisha",
            "tag": "Personal",
            "date": "2024-07-17T05:08:41.758Z",
            "__v": 0
        },
        {
            "_id": "66973226b4e433f3f071ad57",
            "user": "668459ffb92d47def551c228",
            "title": "Fav things",
            "description": "Sleep, Being happy",
            "tag": "It's me",
            "date": "2024-07-17T05:09:58.281Z",
            "__v": 0
        },
        {
            "_id": "669751d9c4e433f3f071ad55",
            "user": "668459ffb92d47def551c228",
            "title": "About me",
            "description": "I am Manisha",
            "tag": "Personal",
            "date": "2024-07-17T05:08:41.758Z",
            "__v": 0
        },
        {
            "_id": "66975126b4e433f3f071ad57",
            "user": "668459ffb92d47def551c228",
            "title": "Fav things",
            "description": "Sleep, Being happy",
            "tag": "It's me",
            "date": "2024-07-17T05:09:58.281Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

// Add a Note
const addNote=(title, description, tag)=>{
    // TODO: API call
    const note={
            "_id": "669791d9c4e433f3f071ad55",
            "user": "668459ffb92d47def551c228",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-07-17T05:08:41.758Z",
            "__v": 0
    }
    setNotes(notes.concat(note))
}

// Delete a Note
const deleteNote=(id)=>{
    // TODO: API call
    console.log("Deleting Note with id:"+id);
    const newNotes=notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
}

// Edit a Note
const editNote=(id, title, description, tag )=>{
    // API Call
    // Logic to edit in client
    for(let index=0; index<notes.length; index++){
        const element=notes[index];
        if(element._id===id){
            element.title=title;
            element.description=description;
            element.tag=tag;
        }
    }

}

    return(
       < NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
        {props.children}
       </NoteContext.Provider>
    )
}

export default NoteState;
