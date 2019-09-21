import * as React from 'react';
import {Button} from "@material-ui/core";
import {InferProps} from "prop-types";
import {makeStylesGen} from "./styles";
import {defaultProps, propTypes} from "./props";

export const B2BButton = (props: InferProps<typeof B2BButton.propTypes>) => {
  const classes: any = makeStylesGen(props.type)();
  return (
    <Button
      classes={{
        root: classes.root,
        containedSecondary: classes.containedSecondary,
      }}
      href={""}
      disabled={props.disabled}
      type={props.submit ? "submit" : "button"}
      style={{minWidth: 300, margin: 0, ...props.style}}
      color={props.type}
      variant={"contained"}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

B2BButton.propTypes = propTypes;
B2BButton.defaultProps = defaultProps;
