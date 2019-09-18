import * as React from 'react';
import {Typography} from "@material-ui/core";
import PropTypes from "prop-types";

const buttonPropTypes = {
  /** textColor label */
  textColor: PropTypes.string,
  /** title label */
  title: PropTypes.string.isRequired,
  /** subtitle label */
  subtitle: PropTypes.string.isRequired,
  /** mobile label */
  mobile: PropTypes.bool
};

/** Another label */
export const B2BMainText = (
  {mobile = false, textColor, title, subtitle}:
    any
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

B2BMainText.defaultProps = {
  textColor: "#1B3C4D",
  mobile: false
};

B2BMainText.propTypes = buttonPropTypes;
