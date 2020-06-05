import { useState, useCallback, useEffect } from "react";

const storageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = useCallback((jwtToken, Id, isAdmin) => {
    setToken(jwtToken);
    setUserId(Id);
    setIsAdmin(isAdmin);

    localStorage.setItem(storageName, JSON.stringify({ userId: Id, token: jwtToken, admin: isAdmin }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);

    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.userId, data.admin);
    }
    setReady(true);
  }, [login]);

  return { login, logout, token, userId, ready, isAdmin };
};
