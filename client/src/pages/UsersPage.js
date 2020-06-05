import React, { useState, useCallback, useEffect } from "react";
import { AdmMenu } from "../components/AdmMenu";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";
import { UsersList } from "../components/UsersList";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const { request, loading } = useHttp();

  const fetchUsers = useCallback(async () => {
    try {
      const fetched = await request("/api/auth/", "GET", null, {});
      setUsers(fetched);
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <AdmMenu />
      
      {!loading && <UsersList users={users} />}
    </>
  );
};
