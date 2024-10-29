import React from 'react';

function Home({
  onIncrement,
  counter,
  onDecrement
}) {
  return (
    <div>
      <button onClick={onIncrement}>
        Vous avez cliqué {counter} fois
      </button>
      <button style={{marginLeft: 8}} onClick={onDecrement}>Décrémenter</button>
    </div>
  );
};

export default Home;