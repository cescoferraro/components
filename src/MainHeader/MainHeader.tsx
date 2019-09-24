import * as React from 'react';
import {Typography} from "@material-ui/core";

/** Another label */
export const MainHeader = (
  {mobile = false, textColor, title, subtitle}:
    {
      /** textColor label */
      textColor: string
      /** title label */
      title: string
      /** subtitle label */
      subtitle: string
      /** mobile label */
      mobile: boolean
    }
) => {
  const isMobile = mobile;
  let innerColor = textColor;
  // let innerColor = color("cor", textColor);
  return (
    <div style={{width: "100%"}}>
      <div style={{height: isMobile ? 16 : 40}}/>
      <Typography
        style={{fontSize: 30, textAlign: "center", color: innerColor}}
        variant={isMobile ? "h5" : "h4"}
      >
        {title}
      </Typography>
      {!isMobile &&
      <Typography
          style={{fontSize: 12, textAlign: "center", color: innerColor}}
          variant={isMobile ? "h4" : "h3"}
      >
        {subtitle}
      </Typography>
      }
      <div style={{height: isMobile ? 16 : 40}}/>
    </div>
  );
};

