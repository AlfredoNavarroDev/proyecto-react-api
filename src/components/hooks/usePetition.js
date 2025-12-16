import axios from "axios";
import { useEffect, useState } from "react";

const usePetition = (endpoint) => {
    const [data, setData] = useState(null)

    const base_url = import.meta.env.VITE_BASE_URL_BANDSINTOWN
    const app_id = import.meta.env.VITE_APP_ID_BANDSINTOWN

    useEffect(() => {
        axios.get(`${base_url}${endpoint}${app_id}`)
        .then(res => setData(res.data))
        .catch(err => console.error("Error:", err))
    }, [])

  return data;
}

export default usePetition;