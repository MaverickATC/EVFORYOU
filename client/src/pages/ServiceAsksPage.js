import React, { useState, useCallback, useEffect } from "react";
import { AdmMenu } from "../components/AdmMenu";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";
import { ServiceAsksList } from "../components/ServiceAsksList";

export const ServiceAsksPage = () => {
  const [asks, setAsks] = useState([]);
  const { request, loading } = useHttp();

  const fetchAsks = useCallback(async () => {
    try {
      const fetched = await request("/api/service", "GET", null, {});
      setAsks(fetched);
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchAsks();
  }, [fetchAsks]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <AdmMenu />
      <h1>Service asks</h1>
      {!loading && <ServiceAsksList asks={asks} />}
    </>
  );
};
