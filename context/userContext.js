import { useState, useEffect, createContext, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createFirebaseApp } from '../firebase/client';

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [loadingUser, setLoadingUser] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen authenticated user
    const app = createFirebaseApp()
    const auth = getAuth(app)
    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        if (!user) return setUser(null);
        
        const { uid, displayName, email, photoURL } = user;
        setUser({ uid, displayName, email, photoURL });
      } catch (error) {
        console.log('Firebase authentication error occurred.', error);
      } finally {
        setLoadingUser(false);
      }
    });

    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  )
}

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext)