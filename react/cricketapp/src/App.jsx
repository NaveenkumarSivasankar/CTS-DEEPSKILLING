import React from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

function App() {
  const flag = true;

  let content;
  if (flag === true) {
    content = <ListofPlayers />;
  } else {
    content = <IndianPlayers />;
  }

  return (
    <div className="app-container">
      <h1>Cricket App</h1>
      {content}
    </div>
  );
}

export default App;
