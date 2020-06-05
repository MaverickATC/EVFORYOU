import React, { useState, useCallback, useEffect } from "react";
import { AdmMenu } from "../components/AdmMenu";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";
import { BuyList } from "../components/BuyList";

export const BuyAsksPage = () => {
  const [asks, setAsks] = useState([]);
  const { request, loading } = useHttp();

  const fetchAsks = useCallback(async () => {
    try {
      const fetched = await request("/api/buy", "GET", null, {});
      setAsks(fetched);
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchAsks();
  }, [fetchAsks]);

  const handleDelete = async (id) => {
    try {
      await request(`/api/buy/del/${id}`, "POST", null, {});
      try {
        const fetched = await request("/api/buy", "GET", null, {});
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
      <h1>Запросы на покупку</h1>
      {!loading && <BuyList asks={asks} delete={handleDelete}/>}
    </>
  );
};
