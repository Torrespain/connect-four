import React from 'react';
import '../App.css';

const raw = (props) => props.lineGrid.map((color, index) => {
    return(
        <div className="col-md-2">
            <span className={color} value={index} onClick = {()=>props.clicked (index)}></span>
        </div>
          
    )
});

export default raw;