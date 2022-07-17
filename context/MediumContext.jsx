import { createContext, useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db, auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

const MediumContext = createContext();
const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    setUsers(
      querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          data: {
            ...doc.data(),
          },
        };
      })
    );
  };

  const getPosts = async () => {
    const querSnapshot = await getDocs(collection(db, "articles"));
    setPosts(
      querSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          data: {
            body: doc.data().body,
            brief: doc.data().brief,
            category: doc.data().category,
            postLength: doc.data().postLength,
            bannerimage: doc.data().bannerimage,
            title: doc.data().title,
            postedOn: doc.data().postedOn.toDate(),
            author: doc.data().author,
          },
        };
      })
    );
  };

  const addUserToFirebase = async user => {
    await setDoc(doc(db, 'users', user.email), {
        email: user.email,
        name: user.displayName,
        imagurl: user.photoURL,
        followerCount: 0
    })
  }

  const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider);
    const user = userData.user 
    setCurrentUser(user);
    addUserToFirebase(user)
  };

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  return (
    <MediumContext.Provider value={{ posts, users, handleUserAuth , currentUser }}>
      {" "}
      {children}{" "}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
