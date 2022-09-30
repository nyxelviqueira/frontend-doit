import { Link } from "react-router-dom";

export const NewServiceButton = () => {
    return (

        <button className="newServiceButton">
            <Link to={"/newservice"} className="newServiceButton">New Service</Link>

        </button>

    )
}