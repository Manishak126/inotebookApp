import noteContext from "./noteContext";
import { useState } from "react";
import React from "react";

const NoteState=(props)=>{
    const host ="http://localhost:5000"
    const notesInitial =[]
    const [notes, setNotes] = useState(notesInitial)

// Get all Notes
const getNotes = async () => {
  try{
      // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem('token')
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4NDU5ZmZiOTJkNDdkZWY1NTFjMjI4In0sImlhdCI6MTcyMDAwMDI3Mn0.z_eQ1dfWV1WExFKtR1gyIDCNDo_ATPGehP20kb55CyE"
      },
    });

    const json=await response.json()
    // console.log(json)
    // setNotes(json)
     setNotes(Array.isArray(json) ? json : []);
     }catch(error){
      console.error("Error fetching notes", error)
     }
    // if (Array.isArray(json)) {
    //   setNotes(json);
    // } else {
    //   console.error("API response is not an array", json);
    //   setNotes([]);
    // }
};


// Add a Note
const addNote=async (title, description, tag)=>{
  try {
    // API Call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem("token"),
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4NDU5ZmZiOTJkNDdkZWY1NTFjMjI4In0sImlhdCI6MTcyMDAwMDI3Mn0.z_eQ1dfWV1WExFKtR1gyIDCNDo_ATPGehP20kb55CyE",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  } catch (error) {
    console.error("Error adding notes", error);
  }
}

// Delete a Note
const deleteNote=async (id)=>{
  try {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem("token"),
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4NDU5ZmZiOTJkNDdkZWY1NTFjMjI4In0sImlhdCI6MTcyMDAwMDI3Mn0.z_eQ1dfWV1WExFKtR1gyIDCNDo_ATPGehP20kb55CyE",
      },
    });
    const json = response.json();
    console.log(json);

    console.log("Deleting Note with id:" + id);
    // const newNotes=notes.filter((note)=>{return note._id!==id})
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  } catch (error) {
    console.error("Error adding notes", error);
  }
}

// Edit a Note
const editNote=async (id, title, description, tag )=>{
  try {
    // API Call
    const response = await fetch(`${host}/api/notes/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem("token"),
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4NDU5ZmZiOTJkNDdkZWY1NTFjMjI4In0sImlhdCI6MTcyMDAwMDI3Mn0.z_eQ1dfWV1WExFKtR1gyIDCNDo_ATPGehP20kb55CyE",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  } catch (error) {
    console.error("Error adding notes", error);
  }
}

    return(
       < noteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
        {props.children}
       </noteContext.Provider>
    )
}

export default NoteState;
