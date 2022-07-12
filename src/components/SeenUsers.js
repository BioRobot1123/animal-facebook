import ROUTES from '../config/routes';
import { Link } from 'react-router-dom';

function SeenUsers({ element, i }) {
  if (i === 0) {
    return (
      <span>
        <Link to={`${ROUTES.USER.replace(':id', `${element.id}`)}`}>
          {element.name}
        </Link>
      </span>
    );
  }

  return (
    <span>
      &nbsp;&gt;&nbsp;
      <Link to={`${ROUTES.USER.replace(':id', `${element.id}`)}`}>
        {element.name}
      </Link>
    </span>
  );
}

export default SeenUsers;
