import React from "react";
import "./Header2.css";


//function to provide header
export default function Header2({...props}) {

    const {heroText} = props

    return <div className="header-2 flex-space-between">

<div className="header-logo flex-align-center" role="button" tabIndex="0">

<div className="header-logo-img">
    <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1667582669/Assets/Screenshot__350_-removebg-preview-removebg-preview_1_1_dxnrge.png" alt="th-logo" />
</div>

<h1>{heroText}</h1>
</div>

        <a href="https://github.com/nakul-sharma-at-appointy/xstate-poc" className="header-link">GitHub</a>
    </div>

}