import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';

const ContactList = ({ users }) => {
  // Sort users alphabetically by name
  const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));

  // Group users by the first letter of their name
  const groupedUsers = sortedUsers.reduce((acc, user) => {
    const firstLetter = user.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(user);
    return acc;
  }, {});

  return (
    <div>
      <h1>Contacts</h1>
      <div className="card">
        {Object.entries(groupedUsers).map(([letter, users]) => (
          <React.Fragment key={letter}>
            <h3>{letter}</h3>
            <ul className="list-group">
              {users.map((user) => (
                <button key={user.id} className="btn btn-light">
                  <Link to={`/user/${user.name}`} className="link">
                    <div className="align-left">
                    {user.name}
                    </div>
                  </Link>
                </button>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
