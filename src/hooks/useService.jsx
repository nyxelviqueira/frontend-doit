import { useEffect, useState } from "react";
import { getSingleService } from "../services";


export const useService = (id) => {

    const [ service, setService ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState('');


    useEffect(() => {
        const loadService = async () => {
            try {
                setLoading(true);

                const data = await getSingleService(id);

                setService(data.service)
                
            } catch (error) {
                setError(error.message);

            } finally {
                setLoading(false);

            }

        }

        loadService();
    }, [id])


    return { service, loading, error, setService }; 
}

export default useService