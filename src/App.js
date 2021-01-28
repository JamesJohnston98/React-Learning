import React, { useState, useEffect } from 'react';


function App() {

  const [rType, setRType] = useState('posts');

//allow a side effect to happen and to query the json placeholder api when the resource type changes
//this will run every time the application renders
//the second parameter means that it will run only when the resource changes
  useEffect(() => {
    console.log('Resource Changed');

    //when the use effect is run this is run to remove what had been run previously.
    return () => {
      console.log('return from resource change');
    }
  }, [rType]);
  return (
  //empty element wrapping the multiple components that we wish to retrun 
<>
<div>
<button onClick={() => setRType('posts')}>Posts</button>
<button onClick={() => setRType('users')}>Users</button>
<button onClick={() => setRType('comments')}>comments</button>
</div>
<h1>{rType}</h1>
</>

    );
}

export default App;
