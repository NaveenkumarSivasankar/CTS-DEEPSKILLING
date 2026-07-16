import React from 'react';

function App() {
  const offices = [
    { name: "TechHub Workspace", rent: 45000, address: "MG Road, Bangalore" },
    { name: "SkyLine Tower", rent: 75000, address: "Bandra Kurla Complex, Mumbai" },
    { name: "GreenPark Office", rent: 32000, address: "Anna Salai, Chennai" },
    { name: "Metro Business Center", rent: 60000, address: "Connaught Place, Delhi" },
    { name: "Lakeside Chambers", rent: 55000, address: "HITEC City, Hyderabad" },
    { name: "Pinnacle Plaza", rent: 85000, address: "Salt Lake, Kolkata" },
  ];

  return (
    <div>
      <h1>Office Space Rental App</h1>
      <div className="card-container">
        {offices.map((office, index) => (
          <div className="card" key={index}>
            <h3>{office.name}</h3>
            <p>
              <span>Rent: </span>
              <span style={{ color: office.rent < 60000 ? "red" : "green" }}>
                ₹{office.rent}
              </span>
            </p>
            <p>
              <span>Address: </span>
              {office.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
