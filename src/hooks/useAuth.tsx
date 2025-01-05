import { UserProps } from "@/contexts/MainContextTypes";
import { auth, db } from "@/services/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const userUnsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        const currUserUnsubscribe = onSnapshot(
          doc(db, "users", user.uid),
          (userData) => {
            setCurrentUser(userData.data() as UserProps);
            setInitializing(false);
          }
        );

        return () => currUserUnsubscribe();
      } else {
        setLoading(false);
        setInitializing(false);
      }
    });

    return () => userUnsubscribe();
  }, []);

  return {
    user,
    setUser,
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    initializing,
    setInitializing,
  };
}
