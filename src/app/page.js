//"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";
import MyNavbar from "../components/Navbar";
import Search from "../components/Search";
export default function Home() {  
  return (
    <main>
      <div className="d-lg-flex align-items-center mb-3 pb-3">
        <div className="col-xs-1 flex-grow-2 align-self-center justify-content-center mx-auto align-middle mr-3 container p-5">
          <h1 className="display-3 bold text-center">
            <strong>Renew Planet</strong>
          </h1>
          <Search />
          <h4>What's Renew Planet?</h4>
          <p>
            Renew Planet is an application to add, search, and share the things
            about environment!
          </p>
        </div>
        <div
          className="d-none d-lg-flex align-items-center d-flex"
          style={{
            background:
              'url("https://c0.wallpaperflare.com/preview/945/89/298/4k-wallpaper-calm-waters-dark-environment.jpg")',
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            borderRadius: "24px 0 0 24px",
          }}
        >
          <img
            className="align-self-center justify-content-center mx-auto"
            src="favicon.ico"
          />
        </div>
      </div>
      <div className="d-lg-flex justify-content-center p-3 mt-3">
        <img
          style={{ maxWidth: "100%" }}
          className="align-self-center justify-content-center"
          src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_640.jpg"
        />
        <article className="p-4 align-self-center">
          <h4>We Want A Better Place</h4>
          <p>
            For Human to Live. It's Gonna Hard to search the second Earth, why
            we dont make the current Earth Better?
          </p>
        </article>
      </div>
      <div
        className="d-lg-flex text-center justify-content-center p-3 mt-3 pt-4"
        id="gak"
      >
        <img
          src="https://media.tenor.com/Irdc3PYki0cAAAAi/throws-trash.gif"
          style={{ width: "150px;" }}
        />
        <article>
          <h5 className="display-3">
            <strong>171+ Trilion Trash</strong>
          </h5>
          <h6 className="display-5">(And How To Handle It ?) </h6>
        </article>
      </div>
      <div className="d-lg-flex justify-content-center p-3 mt-3">
        <article className="p-4 align-self-center">
          <h4>
            <strong>Join Us!</strong>
          </h4>
          <p>
            Search How To Save Planet and handle the environment. <br /> Or help
            us to give more information!
          </p>
        </article>
        <img
          style={{ maxWidth: "100%" }}
          className="align-self-center justify-content-center"
          src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg"
        />
      </div>
    </main>
  );
}
