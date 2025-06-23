import React from 'react'

function ProductFilter() {
  return (
    <>
      <a
        className="btn btn-primary"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Link with href
      </a>
      <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-3" id="collapseExample">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque esse, quo autem excepturi omnis architecto ipsa necessitatibus veniam perspiciatis ipsum saepe iste adipisci, at aliquid enim sed aperiam culpa minus!
        </div>
        <div className="col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolor tenetur nobis commodi quia impedit nemo eos delectus nam architecto qui aperiam aspernatur accusantium, error molestiae, nulla provident laborum repudiandae.</div>
      </div>
    </>
  );
}

export default ProductFilter