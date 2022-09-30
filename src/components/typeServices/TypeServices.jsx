import '../components.css';
import { Link } from "react-router-dom";

export const TypeServices = () => {
    return <>
        <Link to={`/services`}><li className="explore-services">Explore Services
            <ul className="cont-services">
                <li className="explore-services">Programming and Development</li>
                <li className="explore-services">Design and art</li>
                <li className="explore-services">Music and Audio</li>
                <li className="explore-services">Video and Animation</li>
                <li className="explore-services">Writing and Translation</li>
                <li className="explore-services">Administrative and Secretary</li>
                <li className="explore-services">Digital Marketing</li>
                <li className="explore-services">Business</li>
                <li className="explore-services">Various</li>
            </ul>
        </li>
        </Link>
    </>
}