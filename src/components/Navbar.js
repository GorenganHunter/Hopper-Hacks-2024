import "bootstrap/dist/css/bootstrap.min.css";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import SignIn from "@/components/SignIn";

//sign in nya dimana
// agak laen lu naruh nya
// dom bantu bentar ng

// lu ctrl space si func signin dibawah aja biar autoimport
//dari mana dia
//GAK ADA CO
// gw liat error nya dia gabisa ditaruh langsung gitubgw search bentar
function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-2 sticky-top">
      <a className="navbar-brand" href="/">
        Renew Planet
      </a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active  mr-2">
          <a class="nav-link btn btn-outline-dark" href="/post">
            Add Post!
          </a>
        </li>
        <SessionProvider>
          <SignIn />
        </SessionProvider>
      </ul>
      {/* liat components/SignIn.js */}
      {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Login
  </button>*/}
    </nav>
  );
}

export default MyNavbar;

export async function getServerSideProps() {
  const session = await getServerSession(authOptions);
}
