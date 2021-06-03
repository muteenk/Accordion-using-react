import React from 'react';
import './App.css';
import Accordion from './Accordion';
import myAPI from './api';


function App() {
  return (
    <>
      <div className="main-box">
          <h2>Are you trying to question my existence ?</h2>
          {
            myAPI.map(e => {
              return(
                <Accordion data={e} key={e.id} />
              )
            })
          }
      </div>
    </>
  );
}

export default App;
