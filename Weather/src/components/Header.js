import React from "react";
import "../style/header-container.less";
import "../style/logo.less";

export default function Header() {


    return (
        <div className="header-container">
            <div className="logo">
                <span className="logo__caption">
                    <p className="item__mini-title">Mini</p>
                    YouTube
                </span>
            </div>
        </div>
    );
}
