import React, { useReducer } from "react";
import { Segment } from "semantic-ui-react";

export default function ProfileBio ({user}) {
    console.log(user.username, "<---This is the profileBio User")
    return (
        <>
        
        <Segment vertical>
            <h3>Welcome to your Profile {user.username}!</h3>
          </Segment>
       
     <h1></h1>
     </>
    );
  }
