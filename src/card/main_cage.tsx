import {Typography} from "@material-ui/core";
import * as React from "react";
import {flexer} from "../flexer";

export const UserCardMainCage = (props: { isMobile: any, left: { label: string, info: string }, right: { label: string, info: string } }) =>
  <div style={{
    ...flexer,
    width: "100%",
    alignItems: "unset",
    justifyContent: "space-between",
    flexDirection: props.isMobile ? "column" : "row"
  }}>
    <div style={{flex: 1, paddingRight: 8}}>
      <Typography style={{color: "#1B3C4D"}} noWrap={true}>
        <span style={{fontSize: 12}}> {props.left.label} </span>
        <span style={{fontSize: 16}}> {props.left.info} </span>
      </Typography>
    </div>
    <div style={{flex: 1, paddingLeft: props.isMobile ? 0 : 8}}>
      <Typography style={{color: "#1B3C4D"}} noWrap={true}>
        <span style={{fontSize: 12}}> {props.right.label} </span>
        <span style={{fontSize: 16}}> {props.right.info} </span>
      </Typography>
    </div>
  </div>;