import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Dashboard from './Dashboard';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { v4 } from 'uuid';
import Fieldsets from './Fieldsets';
import SeenUsers from './SeenUsers';

function UserPage() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [uid, setUid] = useState({ prev: '', next: '' });

  const { seenUsers } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError('');
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
      )
      .then((res) => {
        if (res.status) {
          setUid({
            prev: uid.next,
            next: res.data.id,
          });
          setUser(res.data);
        }
        throw Error;
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading && <h1 className="center">Loading ...</h1>}
      {error ? (
        <h1 className="center">{error}</h1>
      ) : (
        <div className="user-container">
          <div className="user-box">
            <div className="user-img">
              <img
                src={`${user?.imageUrl}?v=${user?.id + 1}`}
                alt={user?.name + ' ' + user?.lastName}
              />
            </div>
            <Fieldsets user={user} />
          </div>
          <div className="spans">
            {seenUsers?.map((element, i) => (
              <SeenUsers key={v4()} element={element} i={i} />
            ))}
          </div>

          <h2>Friends:</h2>
          {uid.next == id && (
            <Dashboard
              url={`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${uid.next}/friends`}
            />
          )}
        </div>
      )}
    </>
  );
}

export default UserPage;
