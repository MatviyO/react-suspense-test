import React from 'react';
import {useResource} from "./resource";
import {Posts} from "./Posts";

const resource = useResource()

function App() {
  return (
    <div className="container">
        <h1>suspense</h1>
        <Posts resource={resource} />
    </div>
  );
}

export default App;
