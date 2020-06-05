import React, { useState, useCallback, useEffect } from "react";
import "./CatalogPage.css";
import Menu from "../components/Menu";
import CatItemCard from "../components/CatItemCard";
import { Catalog } from "../components/Catalog";

import FooterContacts from "../components/FooterContacts";
import { Loader } from "../components/Loader";
import { useHttp } from "../hooks/http.hook";
import { useParams } from "react-router-dom";

export const CatalogPage = () => {
  const [carId, setCarId] = useState(useParams().id || 0);
  const [car, setCar] = useState(null);
  const { loading, request } = useHttp();

  const handleSelect = (index) => {
    setCarId(index);
    document.getElementById("model-showed").scrollIntoView(true);
  };

  const getCar = useCallback(async () => {
    try {
      if (carId) {
        const fetched = await request(`/api/car/${carId}`, "GET", null, {});
        setCar(fetched);
      } else {
        const fetched = await request(`/api/car`, "GET", null, {});
        setCar(fetched[0]);
      }
    } catch (e) {}
  }, [carId, request]);

  useEffect(() => {
    getCar();
  }, [getCar]);

  if (loading && !car) {
    return <Loader />;
  }

  return (
    <div>
      <div className="h-img">
        <Menu page="catalog" />
      </div>

        <Catalog select={handleSelect} />

      {!loading && car && <CatItemCard car={car} />}

      <div className="d-none d-sm-block f-cat-img">
        <FooterContacts />
      </div>
      <div className="d-block d-sm-none f-img-hider">
        <FooterContacts />
      </div>
      
    </div>
  );
};
