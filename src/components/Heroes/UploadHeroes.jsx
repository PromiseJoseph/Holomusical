import React from "react";
import { NavLink } from "react-router-dom";
const UploadHeroes = (props) => {
    return (
        <>
            <div className={"breadcrumbs d-flex align-items-center " + props.hero} >
                <div className="container position-relative d-flex flex-column align-items-center">
                    <h4 className="fw-bold text-light" style={{textTransform:"uppercase"}}>{props.section}</h4>
                    <ol>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li className="fw-bold" >{props.section}</li>
                    </ol>

                </div>
            </div>
        </>
    )
}
export default UploadHeroes