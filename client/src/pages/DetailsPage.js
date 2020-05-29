import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";
import CatItemCard from "../components/CatItemCard";
import { AdmMenu } from "../components/AdmMenu";

export const DetailsPage = () => {
  const { request, loading } = useHttp();
  const [car, setCar] = useState(null);
  const carId = useParams().id;

  const getCar = useCallback(async () => {
    try {
      const fetched = await request(`/api/car/${carId}`, "GET", null, {});
      setCar(fetched);
    } catch (e) {}
  }, [carId, request]);

  useEffect(() => {
    getCar();
  }, [getCar]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <AdmMenu />
      {!loading && car && <CatItemCard car={car} />}
    </>
  );
};
