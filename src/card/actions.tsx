import {ExpendedB2BButton} from "../expandable/expandable";
import * as React from "react";
import {flexer} from "../flexer";

export const UserActions = ({actions, isMobile}: {
  
  actions: {
    top: {
      mode: ExpandedButtonTypes,
      label: string,
      onClick: () => void
    },
    bottom: {
      mode: ExpandedButtonTypes,
      label: string,
      onClick: () => void
    }
  },
  isMobile: any
}) => {
  return <div style={{
    position: "absolute",
    right: 32,
    ...flexer,
    justifyContent: "space-evenly",
    flexDirection: "column",
    height: "100%",
    width: isMobile ? "auto" : "auto"
  }}>
    <div style={{marginLeft: "auto"}}>
      <ExpendedB2BButton
        mode={actions.top.mode}
        label={actions.top.label}
        onClick={actions.top.onClick}
      />
    </div>
    <div style={{marginLeft: "auto"}}>
      <ExpendedB2BButton
        mode={actions.bottom.mode}
        label={actions.bottom.label}
        onClick={actions.bottom.onClick}
      />
    </div>
  </div>;
}