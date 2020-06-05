import React, { useState, useCallback, useEffect } from "react";
import { AdmMenu } from "../components/AdmMenu";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";
import { ClientsList } from "../components/ClientsList";

export const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const { request, loading } = useHttp();

  const fetchClients = useCallback(async () => {
    try {
      const fetched = await request("/api/client", "GET", null, {});
      setClients(fetched);
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  const handleDelete = async (id) => {
    try {
      await request(`/api/client/del/${id}`, "POST", null, {});
      try {
        const fetched = await request("/api/client", "GET", null, {});
        setClients(fetched);
      } catch (e) {}
    } catch (e) {}
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <AdmMenu />
      <h1> Clients </h1>
      {!loading && <ClientsList clients={clients} delete={handleDelete}/>}
    </>
  );
};
