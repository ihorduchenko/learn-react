import React, {useState, useEffect} from 'react';

const {log} = console;

const Hooks = () => {
  const [count, incrementCount] = useState(0);

  return (
    <div className="container py-5">
      <h1 className="display-3 mb-3">Hooks</h1>
      <p className="lead">Using React Hooks</p>
      <hr className="my-4" />
    </div>
  )
}

export default Hooks;