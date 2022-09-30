import { useEffect, useState } from "react";
import { getAllServicesService } from "../services";

const useServices = (id) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {

        const loadServices = async () => {
            try {
                setLoading(true);

                const data = await getAllServicesService(id);
                setServices(data.services);

            } catch (error) {
                setError(error.message)

            } finally {
                setLoading(false);
            }

        }
        loadServices()
    }, [id])


    return { services, loading, error }


}

export default useServices;