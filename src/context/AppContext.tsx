import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      const fetchedUsers = response.data.users;

      await AsyncStorage.setItem('users', JSON.stringify(fetchedUsers));

      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Error fetching users', error);

      const storedUsers = await AsyncStorage.getItem('users');
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      }
    }
  };

  const addUser = (user: Omit<User, 'id'>) => {
    setUsers(prevUsers => {
      const newUser = {...user, id: prevUsers ? prevUsers.length + 1 : 1};
      const updatedUsers = prevUsers ? [...prevUsers, newUser] : [newUser];
      AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
