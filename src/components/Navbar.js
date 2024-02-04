import 'bootstrap/dist/css/bootstrap.min.css';
import { authOptions } from "@/utils/auth"
import { getServerSession } from "next-auth/next"

function MyNavbar() {
  return (
    <nav className="navbar navbar-dark p-2 sticky-top">
        <a className="navbar-brand" href="/">Renew Planet</a>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
    </nav>  
);
}

export default MyNavbar;

export async function getServerSideProps() {
  const session = await getServerSession(authOptions)
}