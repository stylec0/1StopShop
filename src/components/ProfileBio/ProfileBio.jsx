import React, { useReducer } from "react";
import { Segment } from "semantic-ui-react";

export default function ProfileBio ({user}) {
    console.log(user.username, "<---This is the profileBio User")
    return (
        <>
        <h1>This is the Profile Bio</h1>
        <Segment vertical>
            <h3>{user.username}</h3>
          </Segment>
        </>
     
    
    );
  }
