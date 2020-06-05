import React, { useState, useCallback, useEffect } from "react";
import { AdmMenu } from "../components/AdmMenu";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";
import { TestDriveList } from "../components/TestDriveList";

export const TDriveAsksPage = () => {
  const [asks, setAsks] = useState([]);
  const { request, loading } = useHttp();

  const fetchAsks = useCallback(async () => {
    try {
      const fetched = await request("/api/td", "GET", null, {});
      setAsks(fetched);
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchAsks();
  }, [fetchAsks]);

  const handleDelete = async (id) => {
    try {
      await request(`/api/td/del/${id}`, "POST", null, {});
      try {
        const fetched = await request("/api/td", "GET", null, {});
        setAsks(fetched);
      } catch (e) {}
    } catch (e) {}
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <AdmMenu />
      <h1>Запросы на тест-драйв</h1>
      {!loading && <TestDriveList asks={asks} delete={handleDelete} />}
    </>
  );
};
