import React from "react";

function Asid(){
    return <>
    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">click</button>

<div className="offcanvas offcanvas-start bg-info-subtle" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel"></h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body bg-info-subtle ">
    <ul className="list-unstyled">
        <li>New Game</li>
        <li>previous Game</li>
        <li>Delete Game</li>
        <li>point Table</li>
    </ul>
  </div>
</div>
    </>
}
export default Asid;