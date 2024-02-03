import 'bootstrap/dist/css/bootstrap.min.css';


export default function search() {
  return (
    <main>
      <div className="d-lg-flex align-items-center pb-3 flex mt-2 p-5">
        <div  className="align-self-center mt-3 justify-content-center align-middle container-fluid p-4">
          <h1 className="display-3 bold">
            <strong>Renew Planet</strong>
          </h1>
          <input className="form-control p-4 mb-4 mt-4" placeholder="Search"/>
        </div>
      </div>

      <div className="d-lg-flex p-1 container-fluid p-4">
        <h3 className ="display-3">There's 69 Result</h3>
      </div>

      <div className="d-flex align-items-center p-3">
        <img className="align-self-center justify-content-center mx-auto" src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_640.jpg" />
        <article className="p-3 ">
          <h4>We Want A Better Place</h4>
          <p>For Human to Live. It's Gonna Hard 
            to search the second Earth, why we dont 
            make the current Earth Better?</p>
        </article>
      </div>
    </main>
  );
}


