import React, {createContext, useState, ReactNode, useContext} from 'react';
import axios from 'axios';

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  country: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
}

interface AppContextType {
  users: User[] | null;
  fetchUsers: () => Promise<void>;
  addUser: (user: Omit<User, 'id'>) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [users, setUsers] = useState<User[] | null>(null);

  // Here I Used the dummy Api from google. It displays users and deatils

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      setUsers(response.data.users);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  const addUser = (user: Omit<User, 'id'>) => {
    setUsers(prevUsers =>
      prevUsers
        ? [...prevUsers, {...user, id: prevUsers.length + 1}]
        : [{...user, id: 1}],
    );
  };

  return (
    <AppContext.Provider value={{users, fetchUsers, addUser}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('Set the AppProvider Properly');
  }
  return context;
};
