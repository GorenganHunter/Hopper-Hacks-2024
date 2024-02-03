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
        <h3 className ="display-3 mx-auto">There's 69 Result</h3>
      </div>

      <div className="cd-lg-flex align-items-center mb-3 pb-3 container">
      <div className="d-lg-flex mt-3 align-items-center justify-content-center">
        <img className="d-lg-flex" src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_640.jpg" style={{maxHeight: "250px"}} />
        <article className="p-3">
          
          <h4>The Title of the an random Anime</h4>
          <h5>March 7, 2010</h5>
          <p>Bruh is a coders that love to solve problems by create and developing .......... </p>
        </article>
        <div class="row container">
          <div class="col-sm-12 text-center">
            <button id="btnSearch" class="btn btn-primary btn-md center-block" Style="width: 100px;" OnClick="btnSearch_Click" >Read</button>
            <button id="btnClear" class="btn btn-danger btn-md center-block" Style="width: 100px;" OnClick="btnClear_Click" >Edit</button>
          </div>
        </div>
      </div>
      <div className="d-lg-flex mt-3 align-items-center justify-content-center">
      <img className="d-lg-flex" src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_640.jpg" style={{maxHeight: "250px"}} />
        <article className="p-3">
          
          <h4>The Title of the an random Anime</h4>
          <h5>March 7, 2010</h5>
          <p>Bruh is a coders that love to solve problems by create and developing .......... </p>
        </article>
        <div class="row container">
          <div class="col-sm-12 text-center">
            <button id="btnSearch" class="btn btn-primary btn-md center-block" Style="width: 100px;" OnClick="btnSearch_Click" >Read</button>
            <button id="btnClear" class="btn btn-danger btn-md center-block" Style="width: 100px;" OnClick="btnClear_Click" >Edit</button>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}


