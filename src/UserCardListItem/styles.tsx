import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core";

export const sharedStyles = makeStyles((theme: Theme) => {
    return createStyles({
      root: {
        display: "flex",
      },
      appBar: {
        background: "#FAFAFA",
        boxShadow: "none",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    });
  },
);
