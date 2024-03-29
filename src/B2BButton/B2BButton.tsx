import * as React from 'react';
import {CSSProperties} from 'react';
import {Button} from "@material-ui/core";
import {makeStylesGen} from "./styles";

export interface B2BButtonProps {
  type: "primary" | "secondary"
  submit: boolean
  disabled: boolean
  label: string
  style: CSSProperties
  onClick: () => void
}

/** A UserCardListItem  is a cool component. */
export const B2BButton = (
  {
    disabled = false,
    submit = false,
    type = "primary",
    label,
    onClick = () => {},
    style = {}
  }: B2BButtonProps) => {
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
