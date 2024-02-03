import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="d-flex">
        <div style={{
          height: "100vh",
        }} className="col-xs-1 justify-content-center mx-auto align-middle mr-3 container p-3 text-center">
          <h1>
            Renew Planet
          </h1>
          <input className="form-control" placeholder="bla bla"/>
          <h4>What's Renew Planet?</h4>
          <p>Renew Planet is an application to add, search, and share the things about environment!</p>
        </div>
        <div style={{
          background: 'url("https://www.popsci.com/uploads/2020/10/08/7D3OSO4EHJGSVCVOI4OBAAECBQ.jpg?auto=webp")',
          width: "100%",
          height: "100vh",
        }}>
          <img src="favicon.ico" />
        </div>
      </div>
    </main>
  );
}
