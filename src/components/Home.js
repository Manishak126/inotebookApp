import React from 'react'
import Notes from './Notes'

// import { useEffect } from 'react';


const Home = (props) => {

    //  const a = useContext(NoteContext);
    //  useEffect(()=>{
    //    a.update();
    //    // eslint-disable-next-line
    //  },[])

  const {showAlert} = props;
  return (
    <div>
      {/* {a.state.name} is from {a.state.class} */}
     
   
    <Notes showAlert={showAlert}/>
    </div>
  );
}

export default Home
