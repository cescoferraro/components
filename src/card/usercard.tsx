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
import PropTypes, {InferProps} from "prop-types";

export const UserCardListItem = (
  {breakpoint, actions, data}:
    InferProps<typeof propTypes>
) => {
  const classes = sharedStyles();
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

let top = {
  mode: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

let dataType = {
  name: PropTypes.string.isRequired,
  creationdate: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  units: PropTypes.number.isRequired,
  phone: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const propTypes = {
  actions: PropTypes.shape({top: top, bottom: top}).isRequired,
  data: PropTypes.shape(dataType).isRequired,
  breakpoint: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"] as any).isRequired
};

UserCardListItem.propTypes = propTypes;
UserCardListItem.defaultProps = {};
