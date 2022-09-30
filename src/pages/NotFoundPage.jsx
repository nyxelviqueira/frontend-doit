import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <section>
            <img src="https://c.tenor.com/JbNEIYy1jnQAAAAd/travolta-desert.gif" alt="Not found" />
            <Link to={'/'}>Go to home page</Link>
        </section>)
}