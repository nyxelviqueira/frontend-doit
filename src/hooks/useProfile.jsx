import { useEffect, useState } from "react";
import { getUserDataService } from "../services";

export const useProfile = (id) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadUser = async () => {

            try {
                setLoading(true);
                const data = await getUserDataService(id);


                setUser(data.user);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            };
        };

        loadUser();
    }, [id]);

    return { user, error, loading };
};

export default useProfile;