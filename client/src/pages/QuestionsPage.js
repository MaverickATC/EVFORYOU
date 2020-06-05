import React, { useState, useCallback, useEffect } from "react";
import { AdmMenu } from "../components/AdmMenu";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";
import { QuestionsList } from "../components/QuestionsList";

export const QuestionsPage = () => {
  const [asks, setAsks] = useState([]);
  const { request, loading } = useHttp();

  const fetchAsks = useCallback(async () => {
    try {
      const fetched = await request("/api/question", "GET", null, {});
      setAsks(fetched);
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchAsks();
  }, [fetchAsks]);

  const handleDelete = async (id) => {
    try {
      await request(`/api/question/del/${id}`, "POST", null, {});
      try {
        const fetched = await request("/api/question", "GET", null, {});
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
      <h1>Questions</h1>
      {!loading && <QuestionsList asks={asks} delete={handleDelete} />}
    </>
  );
};
