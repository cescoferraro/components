import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";
import {isWidthDown} from "@material-ui/core/withWidth";
import {UserCardSubtitle} from "./subtitle";
import {UserCardMainCage} from "./main_cage";
import {UserActions} from "./actions";
import {flexer} from "../flexer";
import {sharedStyles} from "./styles";
import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";

interface IButtonAction {
  mode: string,
  /** A button with a configurable background color. */
  label: string,
  onClick: () => void
}

interface IUserCardData {
  /** A button with a configurable background color. */
  name: string,
  creationdate: string,
  type: string,
  email: string,
  units: number,
  phone: string,
  role: string,
  disabled: boolean
}

/** A UserCardListItem  is a cool component. */
export const UserCardListItem = (
  {breakpoint, actions, data}:
    {
      /** Material-UI Breakpoint ["xs","sm", "md", "lg"]. */
      breakpoint: Breakpoint,
      /** Actions Buttons configurations. */
      actions: {
        top: IButtonAction,
        bottom: IButtonAction
      },
      /** The data to be displayed. */
      data: IUserCardData
    }
) => {
  const classes: any = sharedStyles();
  const isMobile = isWidthDown("xs", breakpoint);
  const {name, units, creationdate, type, disabled, email, role, phone} = data;
  return (
    <ListItem style={{paddingTop: 2, paddingLeft: 5, paddingRight: 5, height: isMobile ? 210 : 160}}>
      <Card style={{background: disabled ? "#f0f0f0" : "white", width: "100%"}}>
        <CardContent style={{height: "100%", padding: "16px!important"}} classes={{root: classes.root}}>
          <div style={{...flexer, alignItems: "stretch", height: "100%", width: "100%"}}>
            <div style={{
              ...flexer,
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-around",
              flex: 1,
              minWidth: 0
            }}>
              <div style={{width: "100%"}}>
                <Typography
                  style={{textTransform: "uppercase", color: "#007380"}}
                  noWrap={true}
                  variant="h6"
                >
                  {name}
                </Typography>
              </div>
              <UserCardMainCage
                isMobile={isMobile}
                left={{label: "Email", info: email}}
                right={{label: "Nivel de Acesso", info: role}}
              />
              <UserCardMainCage
                isMobile={isMobile}
                left={{label: "Telefone", info: phone}}
                right={{label: "Perfil de Acesso", info: role}}
              />
              <UserCardSubtitle
                mobile={isMobile}
                type={type}
                units={units}
                inp={creationdate}
              />
            </div>
            <UserActions
              actions={actions}
              isMobile={isMobile}
            />
          </div>
        </CardContent>
      </Card>
    </ListItem>
  )
};

