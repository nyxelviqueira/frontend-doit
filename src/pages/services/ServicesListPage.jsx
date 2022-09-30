import { NewServiceButton } from "../../components/newServiceButton/NewServiceButton";
import { ServicesList } from "../../components/servicesList/ServicesList";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useServices from "../../hooks/useServices"


export const ListServicesPage = () => {
    const { services, loading, error } = useServices();
    const { user } = useContext(AuthContext);

    if (loading) return <p>Reload services</p>
    if (error) return <p>{error}</p>

    return user ? <>
        <NewServiceButton />
        <ServicesList services={services} />
    </> : (<ServicesList services={services} />)
}