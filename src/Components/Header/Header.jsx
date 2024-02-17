import React from "react";
import "./Header.css";


//function to provide header
export default function Header() {

    return <div className="header flex-space-between">

        <div className="header-logo flex-align-center" role="button" tabIndex="0">

            <div className="header-logo-img">
                <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1667582669/Assets/Screenshot__350_-removebg-preview-removebg-preview_1_1_dxnrge.png" alt="th-logo" />
            </div>

            <h1>XState PoC</h1>
        </div>

        <a href="https://github.com/nakul-sharma-at-appointy/xstate-poc" className="header-link">GitHub</a>

    </div>

}