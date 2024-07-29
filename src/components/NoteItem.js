import React from 'react'
import NoteContext from '../context/notes/noteContext';
import { useContext } from 'react';

const NoteItem = (props) => {
    const {note, updateNote}=props;
    const context = useContext(NoteContext);
    const {deleteNote}=context;
    
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-trash" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully", "success")}}></i>
          <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note); } }></i>
        </div>
      </div>
    </div>
  );
}

export default NoteItem
