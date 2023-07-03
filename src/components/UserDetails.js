import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = ({ users }) => {
  const { name } = useParams();
  const user = users.find((user) => user.name === name);

  if (!user) {
    return <p>Loading user details...</p>;
  }

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">{user.name}</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">Username</th>
            <td>{user.username}</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th scope="row">Address</th>
            <td colspan="2">{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</td>
          </tr>
          <tr>
            <th scope="row">Phone</th>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <th scope="row">Website</th>
            <td>{user.website}</td>
          </tr>
          <tr>
            <th scope="row">Company</th>
            <td colspan="2">{user.company.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
