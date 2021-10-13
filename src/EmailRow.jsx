import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function EmailRow({ id, tittle, subject, description, time }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
                id,
                tittle,
                subject,
                description,
                time,
            })
        );

        history.push("/mail");
    };

    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelOutlinedIcon />
                </IconButton>
            </div>
            <h3 className="emailRow__tittle">{tittle}</h3>
            <div className="emailRow__message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow__description">
                        - {description}
                    </span>
                </h4>
            </div>
            <p className="emailRow__time">{time}</p>
        </div>
    );
}

export default EmailRow;
