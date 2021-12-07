import { Link } from "react-router-dom";
const Manu = () => {
    return (
        <div >
            <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
                <li> <Link to="home">Home </Link> </li>
                <li> <Link to="about">About</Link> </li>
                <li><Link to="contect">Contect</Link></li>
            </ul>
        </div>
    )
}
export default Manu;