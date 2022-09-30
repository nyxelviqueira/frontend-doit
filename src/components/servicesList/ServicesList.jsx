import { Service } from "../service/Service"

export const ServicesList = ({ services }) => {
    return services.length ? (
        <ul className="services-list">
            {services.map((service) => {


                return (<Service key={service.id} service={service}></Service>
                );
            })}

        </ul>
    ) : (<p>There are not services created</p>)
}