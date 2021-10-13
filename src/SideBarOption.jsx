import React from "react";
import "./SideBarOption.css";

function SideBarOption({ Icon, tittle, number, selected }) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            <Icon />
            <h3>{tittle}</h3>
            <p>{number}</p>
        </div>
    );
}

export default SideBarOption;
