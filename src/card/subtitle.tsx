import {Typography} from "@material-ui/core";
import * as React from "react";
import {flexer} from "../flexer";

export const UserCardSubtitle = (props: { mobile: any, type: any, units: any, inp: any }) => {
  return (
    <div style={{
      ...flexer,
      flexDirection: "row",
      justifyContent: "space-between",
      marginRight: props.mobile ? "20%" : "20%",
      width: props.mobile ? "80%" : "80%",
      overflow: "hidden",
      height: 20,
      transform: "translateY( 10px )"
    }}>
      <Typography noWrap={true} style={{fontSize: 10, color: "#989D9E"}}>
        {props.type === "B2B" ? "Todos os " : props.units} Estabelecimentos {"     "}
      </Typography>
      <div style={{...flexer, height: "100%"}}>
        <div style={{...flexer, height: "100%", paddingRight: 4, transform: "translateY( -1px )"}}>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.4955 0.916687C2.9655 0.916687 0.916748 2.97002 0.916748 5.50002C0.916748 8.03002 2.9655 10.0834 5.4955 10.0834C8.03008 10.0834 10.0834 8.03002 10.0834 5.50002C10.0834 2.97002 8.03008 0.916687 5.4955 0.916687ZM5.50008 9.16669C3.47425 9.16669 1.83341 7.52585 1.83341 5.50002C1.83341 3.47419 3.47425 1.83335 5.50008 1.83335C7.52591 1.83335 9.16675 3.47419 9.16675 5.50002C9.16675 7.52585 7.52591 9.16669 5.50008 9.16669Z"
              fill="#989D9E"/>
            <path
              d="M5.72925 3.20831H5.04175V5.95831L7.448 7.40206L7.79175 6.83831L5.72925 5.61456V3.20831Z"
              fill="#989D9E"/>
          </svg>
        </div>
        <div style={{...flexer, width: "100%", height: "100%"}}>
          <Typography noWrap={true} style={{...flexer, fontSize: 10, color: "#989D9E"}}>
            Última alteração: {(props.inp).toString()}
          </Typography>
        </div>
      </div>
      <div style={{...flexer, height: "100%"}}>
        <div style={{...flexer, height: "100%", paddingRight: 4, transform: "translateY( -1px )"}}>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.4955 0.916687C2.9655 0.916687 0.916748 2.97002 0.916748 5.50002C0.916748 8.03002 2.9655 10.0834 5.4955 10.0834C8.03008 10.0834 10.0834 8.03002 10.0834 5.50002C10.0834 2.97002 8.03008 0.916687 5.4955 0.916687ZM5.50008 9.16669C3.47425 9.16669 1.83341 7.52585 1.83341 5.50002C1.83341 3.47419 3.47425 1.83335 5.50008 1.83335C7.52591 1.83335 9.16675 3.47419 9.16675 5.50002C9.16675 7.52585 7.52591 9.16669 5.50008 9.16669Z"
              fill="#989D9E"/>
            <path
              d="M5.72925 3.20831H5.04175V5.95831L7.448 7.40206L7.79175 6.83831L5.72925 5.61456V3.20831Z"
              fill="#989D9E"/>
          </svg>
        </div>
        <div style={{...flexer, width: "100%", height: "100%"}}>
          <Typography noWrap={true} style={{...flexer, fontSize: 10, color: "#989D9E"}}>
            Responsável: {"José da Silva"}
          </Typography>
        </div>
      </div>
    </div>
  );
};