import React from 'react';
import './App.css';

function Display(props){
    const {updateCount,updateFlag} = props;
    return(
        <div>
            {/* <h2> Counter : {props.s.count}</h2> */}
            <input type="number" value={props.s.count} name="txt" onChange={updateCount}/>
            <button onClick={updateFlag}> Submit </button>
        </div>
    );
}

export default Display;