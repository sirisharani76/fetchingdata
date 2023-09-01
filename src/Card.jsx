import React, { useEffect, useState } from "react";

const Card = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://mocki.io/v1/50abfd24-2845-4dd7-bcce-9bd732e25c47")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.list);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;
