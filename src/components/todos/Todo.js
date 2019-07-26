import React from 'react';

const detectColor = (type) => {
  switch(type) {
    case 'Default':
      return "badge-primary";
    case 'Home':
      return "badge-success"; 
    case 'Work':
      return "badge-info";
    default: 
      return "badge-light";    
  }
}

const Todo = ({ onClick, text, type }) => (
  <div className="col-md-4">
    <div className="alert alert-dark text-break" role="alert">
      <span className={"mr-2 badge " + detectColor(type) }>{type}</span>
      {text}
      <button type="button" className="close" onClick={onClick}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
)

export default Todo;