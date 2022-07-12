import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../config/routes';
import { UserContext } from '../context/UserContext';

function Card({ user, lastElementRef }) {
  const { setSeenUsers } = useContext(UserContext);
  const navigate = useNavigate();

  function handleNavigation() {
    setSeenUsers((prev) => {
      return [
        ...prev,
        {
          id: user.id,
          name: user.prefix + ' ' + user.name + ' ' + user.lastName,
        },
      ];
    });
    navigate(`${ROUTES.USER.replace(':id', `${user.id}`)}`);
  }

  return (
    <div ref={lastElementRef} className="card" onClick={handleNavigation}>
      <img
        src={`${user.imageUrl}?v=${user.id + 1}`}
        alt={user.name + ' ' + user.lastName}
      />
      <span>
        <strong>
          {user.prefix}&nbsp;{user.name}&nbsp;{user.lastName}
        </strong>
      </span>
      <span>{user.title}</span>
    </div>
  );
}

export default Card;
