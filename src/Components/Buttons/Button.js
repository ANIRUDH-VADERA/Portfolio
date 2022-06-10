import React from 'react'
import "./Button.css";
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Button(props) {
  return (
    <div>
        <button className="btn">
            <i className={props.icon}></i>
            <h4>{props.title}</h4>
        </button>
    </div>
  )
}

export default Button