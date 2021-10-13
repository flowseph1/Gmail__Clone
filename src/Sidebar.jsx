import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import SideBarOption from "./SideBarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
function Sidebar() {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button
                variant="text"
                startIcon={<AddIcon fontSize="large" />}
                className="sidebar__compose"
                onClick={() => dispatch(openSendMessage())}
            >
                Compose
            </Button>

            <SideBarOption
                Icon={InboxIcon}
                tittle="Inbox"
                number={54}
                selected={true}
            />
            <SideBarOption Icon={StarIcon} tittle="Starred" number={54} />
            <SideBarOption Icon={AccessTimeIcon} tittle="Snoozed" number={54} />
            <SideBarOption
                Icon={LabelImportantIcon}
                tittle="Important"
                number={54}
            />
            <SideBarOption Icon={NearMeIcon} tittle="Sent" number={54} />
            <SideBarOption Icon={NoteIcon} tittle="Drafts" number={54} />
            <SideBarOption Icon={ExpandMoreIcon} tittle="More" />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
