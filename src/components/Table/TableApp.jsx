import * as React from 'react';
import  App  from './Table'
import * as classes from './style.module.css';

function TableApp() {
  
  const myFunction = () => {
    var x = document.getElementById('myDIV');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
    return (
      <div>
      <button className={classes.Button} onClick={myFunction}>See more features</button>

      <div id='myDIV' className={classes.Content}>
        <App/>
      </div>
      </div>
    );
  }
  
  export default TableApp;