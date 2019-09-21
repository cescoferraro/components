import * as React from "react";
import {Typography} from "@material-ui/core";
import Grow from "@material-ui/core/Grow";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Add from "@material-ui/icons/Add";
// import GroupAdd from "@material-ui/icons/GroupAdd ";
import PropTypes from "prop-types";
import {GroupAdd} from "@material-ui/icons";


export const ExpendedB2BButton = (
  {label, color = "#989D9E", onClick, mode = "edit"}:
    { color?: string, label: string, mode?: ExpandedButtonTypes, onClick: () => void }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => { setHover(true) }}
      onMouseLeave={() => { setHover(false) }}
    >
      {
        <Fab
          variant={!hover ? "round" : "extended"}
          size={!hover ? "medium" : "large"}
          onClick={onClick}
          style={{background: "white", width: hover ? "unset" : 40, height: 40}}
          aria-label="delete"
        >
          <Grow in={hover}>
            <Typography
              style={{
                color,
                textTransform: "capitalize",
                paddingRight: 8,
                display: hover ? "unset" : "none"
              }}
            >
              {label}
            </Typography>
          </Grow>
          {mode === "edit" && <EditIcon style={{fill: color}}/>}
          {mode === "add" && <Add style={{fill: color}}/>}
          {mode === "delete" && <DeleteIcon style={{fill: color}}/>}
          {mode === "group" && <GroupAdd style={{fill: color}}/>}
        </Fab>
      }
    </div>
  );
};

ExpendedB2BButton.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  mode: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

ExpendedB2BButton.defaultProps = {};
