import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">By BRUH Developer</h5>
            <ul>
              <li>
                <a className="text-white" href="https://www.fathin.my.id">
                  M.Fathin Halim
                </a>
              </li>
              <li>Min Akhilkariim Ziddan</li>
              <li>Williams Sandjaya</li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <div className="d-lg-flex" id="p">
              <img
                className="mr-3 mb-3 mb-lg-0"
                src="https://ik.imagekit.io/9hpbqscxd/SG/image-39.jpg?updatedAt=1705798245623"
                style={{ width: "140px" }}
              />

              <div>
                <h5 className="text-uppercase">Who's Bruh Developer</h5>
                <p>
                  Bruh Developer (Brogrammer Road To Unusual Hacker) is a
                  programmer teams for improve the team skill and experience
                  especialy at hackaton
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
