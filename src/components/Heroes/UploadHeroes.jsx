import React from "react";

const UploadHeroes = (props) => {
    return (
        <>
            <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: 'img/about-header.jpg'}}>
                <div className="container position-relative d-flex flex-column align-items-center">
                    <h2>{props.section}</h2>
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li>{props.section}</li>
                    </ol>

                </div>
            </div>
        </>
    )
}
export default UploadHeroes