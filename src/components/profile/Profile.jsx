import { useParams } from "react-router-dom";
import useProfile from "../../hooks/useProfile";
import useServices from "../../hooks/useServices";
import { Loading } from "../loading/Loading";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { ServicesList } from "../../components/servicesList/ServicesList";
import avatarDefault from "../../../src/assets/avatar.png";

export const Profile = (filterServices) => {
  const { id } = useParams();

  const { user, loading, error } = useProfile(id);
  const { services } = useServices();
  filterServices = services.filter((service) => service.idUser === user?.id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return user ? (
    <>
      <section className="profile">
        <div className="avatarNameContainer">
          <h2>{user?.username}</h2>
          {user?.avatar ? (
            <img
              //Hay veces que me funciona sin poner carpeta uploads y otras que tengo que ponerla
              src={`${process.env.REACT_APP_BACKEND}/${user?.avatar}`}
              alt="avatar"
              width={100}
              className="avatar"
            />
          ) : (
            <img
              src={avatarDefault}
              alt="avatarDefault"
              width={100}
              className="avatar"
            />
          )}
        </div>
        <div className="biographyContainer">
          {user?.biography ? (
            <>
              <h2>Biography</h2>
              <p>{user?.biography}</p>
            </>
          ) : (
            <div></div>
          )}
        </div>
        <div className="emailContainer">
          <h2>Email</h2>
          <p>{user?.email}</p>
        </div>
        <div className="cretedAtContainer">
          <h2>Created at</h2>
          <p>{new Date(user?.createdAt).toLocaleString()}</p>
        </div>
      </section>

      <section className="servicesCreated">
        <h2>Created services</h2>
        <ServicesList services={filterServices} />
      </section>
    </>
  ) : (
    <ErrorMessage />
  );
};
