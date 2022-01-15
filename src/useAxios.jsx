import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { data } from './redux/actions/actions';
const useAxios = (url) => {
     const dispatch = useDispatch();
     const fetching = async (url) => {
          const res = await axios.get(url).catch((err) => {
               console.log('error' + err);
          });
          dispatch(data(res.data));
     };

     useEffect(() => {
          fetching(url);
     }, [url]);
};
export default useAxios;
