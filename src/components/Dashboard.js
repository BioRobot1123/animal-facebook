import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 } from 'uuid';
import Card from './Card';
import Loading from './Loading';

let initialRender = true;

function Dashboard({ url }) {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function loadUsers() {
    setLoading(true);
    setError(false);
    axios
      .get(`${url}/${page}/20`)
      .then((res) => {
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
      window.addEventListener('scroll', handleScroll);
      initialRender = false;
      return;
    }

    loadUsers();
  }, [page]);

  return (
    <>
      <div className="dashboard">
        {users?.map((item) => (
          <Card key={v4()} user={item} />
        ))}
      </div>
      {loading && <Loading />}
      {error && <h1 className="center">{error}</h1>}
    </>
  );
}

export default Dashboard;
