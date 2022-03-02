import React from "react";
import { Segment } from "semantic-ui-react";

export default function ProfileBio({ user }) {
  return (
    <>
      <Segment vertical>
        <h3>Welcome to your Profile {user.username}!</h3>
      </Segment>
    </>
  );
}
 