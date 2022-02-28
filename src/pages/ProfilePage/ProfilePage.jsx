import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import ItemsList from "../../components/ItemsList/ItemsList";
import userService from "../../utils/userService";
import { useParams } from "react-router-dom";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import Loading from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";


export default function ProfilePage(props) {
    const [items, setItems] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { username } = useParams();

    console.log(username, " <----- this username");

    //async function getProfile() {
    //    try {
    //      const data = await userService.getProfile(username);
    //      console.log(data, " <- data");
    
    //      setLoading(() => false);
    //      setItems(() => data.items);
    //      setUser(() => data.user);
    //    } catch (err) {
    //      console.log(err);
    //      setLoading(() => false);
    //      setError("Profile Does not exist!");
    //    }
    //  }


    useEffect(() => {

        async function getProfile() {
            try {
                const data = await userService.getProfile(username);
                console.log(data, " <- data");
            
                setLoading(() => false);
                //setItems(() => data.items);
                setUser(() => data.user);
            }   catch (err) {
                console.log(err);
                setLoading(() => false);
                setError("Profile Does not exist!");
            }
        }

        getProfile();
    }, [username]);

    if (loading) {
        return (
          <>
            <Header handleLogout={props.handleLogout} user={props.user} />
            <Loading />
          </>
        );
      }
    
      if (error) {
        return (
          <>
            <Header handleLogout={props.handleLogout} user={props.user} />
            <ErrorMessage error={error} />;
          </>
        );
      }

    return (
        <>
      <Header handleLogout={props.handleLogout} user={props.user}/>
      <ProfileBio user={props.user} />
        <h1>This is the ProfilePage</h1>
        
     
        </>
    );
  }