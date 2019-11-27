import React from "react";
import { Container, Card, CardName, CardInfo } from "./style";
import { IDashboard } from "./types";
import Api from './emails.json';

export const Dashboard = (props: IDashboard) => {
  console.log(Api.users);
  return (
    <>
    <Container>
      {
        Api.users.map(e => 
          (
          <Card>
            <CardName>
            <p style={{paddingRight: '5px'}}>{e.name}</p>
            <p>{e.lastname}</p>
            </CardName>
            <CardInfo>
            <p style={{paddingRight: '5px'}}>{e.state}</p>
            <p style={{paddingRight: '5px'}}>{e.city}</p>
            </CardInfo>
            <p style={{paddingRight: '5px'}}>{e.email}</p>
          </Card>
          )
        )
      }
    </Container>
    </>
  );
};
