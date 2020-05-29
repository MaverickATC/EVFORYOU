import React from 'react';
import { useCallback } from "react";
import { Toast } from "react-bootstrap";

export const useMessage = () => {
  return useCallback((text) => {
      if(text){
       // Сделать тоаст с сообщением!!
      }
  }, []);
};
