import React from 'react';

const IndianPlayers = () => {
  const players = [
    "Sachin Tendulkar",
    "MS Dhoni",
    "Sourav Ganguly",
    "Yuvraj Singh",
    "Rahul Dravid",
    "Virender Sehwag",
  ];

  const [first, second, third, fourth, fifth, sixth] = players;

  const oddTeam = [first, third, fifth];
  const evenTeam = [second, fourth, sixth];

  const t20Players = ["Suryakumar Yadav", "Rinku Singh", "Tilak Varma"];
  const ranjiTrophyPlayers = ["Sarfaraz Khan", "Devdutt Padikkal", "Ruturaj Gaikwad"];

  const mergedPlayers = [...t20Players, ...ranjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged T20 + Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
