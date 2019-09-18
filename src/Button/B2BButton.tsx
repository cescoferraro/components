import * as React from 'react';
import {Button} from "@material-ui/core";
import PropTypes from "prop-types";
import {makeStylesGen} from "./styles";
import {defaultProps, propTypes} from "./props";

export const B2BButton = (
  {type, disabled, style, submit, label,onClick}:
    PropTypes.InferProps<typeof propTypes>
) => {
  const classes: any = makeStylesGen(type)();
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
