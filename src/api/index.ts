import { useEffect, useState } from 'react';

export const status = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const baseUrl = '/data.json';
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const proxyUrl = '';


export const useFetch = (url: string) => {
  const [data, setData] = useState({
    status: status.LOADING,
    error: '',
    data: [],
  });

  const setPartData = (partialData: object) =>
    setData({ ...data, ...partialData });

  const fetchData = () => {
    setPartData({
      status: status.LOADING,
      data: [],
    });

    const options: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    fetch(proxyUrl + baseUrl + url, options)
      .then((response) => response.json())
      .then((respData) => {
        setPartData({
          status: status.SUCCESS,
          data: respData,
        });
      })
      .catch((error) => {
        setPartData({
          status: status.ERROR,
          error: 'Bad request',
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { ...data, fetchData };
};
