import React, { useState, useCallback, useEffect } from "react";
import { AdmMenu } from "../components/AdmMenu";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";
import { CarsList } from "../components/CarsList";

export const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const { request, loading } = useHttp();

  const fetchCars = useCallback(async () => {
    try {
      const fetched = await request("/api/car", "GET", null, {});
      setCars(fetched);
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  
  const handleDelete = async (id) => {
    try {
      await request(`/api/car/del/${id}`, "POST", null, {});
      try {
        const fetched = await request("/api/car", "GET", null, {});
        setCars(fetched);
      } catch (e) {}
    } catch (e) {}
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <AdmMenu />
      
      {!loading && <CarsList cars={cars} delete={handleDelete}/>}
    </>
  );
};
