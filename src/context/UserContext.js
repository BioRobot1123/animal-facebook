import { createContext, useState } from 'react';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [seenUsers, setSeenUsers] = useState([]);
  return (
    <UserContext.Provider value={{ seenUsers, setSeenUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
