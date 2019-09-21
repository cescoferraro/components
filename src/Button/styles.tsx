import {createStyles, makeStyles} from "@material-ui/styles";

export const makeStylesGen = (type: any) => makeStyles(() => {
  let background = "#0098A6";
  let sbackground = "white";
  let hoverbackground = "#006a74";
  let shoverbackground = "#b2b2b2";
  let textColor = "white";
  let stextColor = background;
  let regular = "primary";
  return createStyles({
    root: {
      minHeight: 50,
      minWidth: 300,
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