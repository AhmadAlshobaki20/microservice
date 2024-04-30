import { useEffect } from "react";
import axios from 'axios';

const useFetch = async (url) => {
    const response = await axios.get(url);
    return response;
}

useEffect(() => {
    useFetch();
}, [url])