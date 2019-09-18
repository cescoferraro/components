import * as React from 'react';
import {Button} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";
import PropTypes from "prop-types";

let regular = "primary";
let defaultProps = {
  submit: false,
  style: {},
  onClick: () => {},
  type: regular,
  disabled: false
};

const B2BButtonTypes: any = [regular, "secondary"];

let propTypes = {
  submit: PropTypes.bool,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(B2BButtonTypes),
  onClick: PropTypes.func
};

const ya = (type: string) => makeStyles(() => {
  let background = "#0098A6";
  let sbackground = "white";
  let hoverbackground = "#006a74";
  let shoverbackground = "#b2b2b2";
  let textColor = "white";
  let stextColor = background;
  return createStyles({
    root: {
      background: type === regular ? background : sbackground,
      color: type === regular ? textColor : stextColor,
      "&:hover": {
        color: type === regular ? textColor : stextColor,
        background: type === regular ? hoverbackground : shoverbackground
      }
    },
    containedSecondary: {
      boxShadow: "none",
    }
  });
});

export const B2BButton = (
  {type, disabled, style, submit, label, onClick}:
    any
) => {
  const classes: any = ya(type)();
  return (
    <Button
      classes={{
        root: classes.root,
        containedSecondary: classes.containedSecondary,
      }}
      href={""}
      disabled={disabled}
      type={submit ? "submit" : "button"}
      style={{minWidth: 300, margin: 0, ...style}}
      color={type}
      variant={"contained"}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

B2BButton.propTypes = propTypes;
B2BButton.defaultProps = defaultProps;
