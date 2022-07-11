import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 } from 'uuid';
import Card from './Card';

let initialRender = true;

function Dashboard() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function loadUsers() {
    setLoading(true);
    setError(false);
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/20`
      )
      .then((res) => {
        console.log(res);
        setUsers((prev) => {
          return [...prev, ...res.data.list];
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  function handleScroll(e) {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (initialRender) {
      initialRender = false;
      return;
    }
    loadUsers();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  console.log(page);
  console.log(users);

  return (
    <>
      <div className="dashboard">
        {users?.map((item) => (
          <Card key={v4()} user={item} />
        ))}
      </div>
      {loading && <h2>Loading...</h2>}
      {error && <h1>{error}</h1>}
    </>
  );
}

export default Dashboard;
