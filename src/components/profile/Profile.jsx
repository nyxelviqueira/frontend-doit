import { useParams } from "react-router-dom";
import useProfile from "../../hooks/useProfile";
import useServices from "../../hooks/useServices"
import { Loading } from "../loading/Loading";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { ServicesList } from "../../components/servicesList/ServicesList";


export const Profile = (filterServices) => {
    const { id } = useParams();



    const { user, loading, error } = useProfile(id);
    const { services } = useServices();
    filterServices = services.filter(service => service.idUser === user.id);


    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error} />;



    return <section>
        <h1>{user.username}</h1>


        {/* Por qué funciona así y no `${process.env.REACT_APP_BACKEND}/uploads/${user.avatar}` */}
        <img
            src={`${process.env.REACT_APP_BACKEND}/${user.avatar}`}
            alt="avatar"
            width={100}
        />

        <p>
            {user.biography}
        </p>
        <p>
            {user.email}
        </p>
        <div>{new Date((user.createdAt)).toLocaleString()}</div>

        {/* Me falta filtrar por id de usuario */}
        <ServicesList services={filterServices} />



    </section>
}