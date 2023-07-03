import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import axios from "axios";
import ContactList from './components/ContactList';
import UserDetails from './components/UserDetails';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data);
      });
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ContactList users={users} />} />
          <Route path="/user/:name" element={<UserDetails users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
