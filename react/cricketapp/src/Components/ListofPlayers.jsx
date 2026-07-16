import React from 'react';

const ListofPlayers = () => {
  const players = [
    { id: 1, name: "Virat Kohli", score: 82 },
    { id: 2, name: "Rohit Sharma", score: 75 },
    { id: 3, name: "Shubman Gill", score: 90 },
    { id: 4, name: "KL Rahul", score: 55 },
    { id: 5, name: "Hardik Pandya", score: 60 },
    { id: 6, name: "Ravindra Jadeja", score: 45 },
    { id: 7, name: "Rishabh Pant", score: 68 },
    { id: 8, name: "Mohammed Shami", score: 30 },
    { id: 9, name: "Jasprit Bumrah", score: 15 },
    { id: 10, name: "Kuldeep Yadav", score: 40 },
    { id: 11, name: "Mohammed Siraj", score: 25 },
  ];

  const belowSeventy = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} — Score: {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {belowSeventy.map((player) => (
          <li key={player.id}>
            {player.name} — Score: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
