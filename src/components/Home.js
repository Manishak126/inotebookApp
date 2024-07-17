import React from 'react'
import Notes from './Notes'

// import { useEffect } from 'react';


const Home = () => {

    //  const a = useContext(NoteContext);
    //  useEffect(()=>{
    //    a.update();
    //    // eslint-disable-next-line
    //  },[])

  
  return (
    <div>
      {/* {a.state.name} is from {a.state.class} */}
     
   
    <Notes/>
    </div>
  );
}

export default Home
