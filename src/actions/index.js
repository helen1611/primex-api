import getFirebaseUrl from "../services/get-firebase-url";
import {
  ADD_USERS,
  FETCH_COUNTRIES,
  FETCH_ORGANISATION,
  FETCH_USERS,
  COUNTRY_SELECTED,
} from "./action-types";

export const fetchUsers = () => async (dispatch) => {
  const firebaseUrl = getFirebaseUrl();
  const apiUrl = `${firebaseUrl}/users`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  const users = data.documents.map((doc) => {
    const id = doc.name.slice(doc.name.lastIndexOf("/") + 1);
    const user = {
      id,
    };
    for (const field in doc.fields) {
      user[field] = doc.fields[field].stringValue;
    }
    return user;
  });
  dispatch({ type: FETCH_USERS, payload: users });
};

export const addUsers = (user) => async (dispatch) => {
  const firebaseUrl = getFirebaseUrl();
  // dispatch({ type: ADD_USERS, payload: user });
  // db.collection("users").add(user)
  // .then((docRef) => {
  //   console.log("Document written with ID: ", docRef.id);

  // })
  // .catch((error) => {
  //     console.error("Error adding document: ", error);
  // });
};

export const fetchCountries = () => async (dispatch) => {
  const firebaseUrl = getFirebaseUrl();
  const apiUrl = `${firebaseUrl}/countries`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  
  const countries = data.documents.map((doc) => {
    const id = doc.name.slice(doc.name.lastIndexOf("/") + 1);
    const country = {
      id,
    };
    for (const field in doc.fields) {
      country[field] = doc.fields[field].stringValue;
    }
    
    return country;
  });
  dispatch({ type: FETCH_COUNTRIES, payload: countries });

  // db.collection("countries").get().then((querySnapshot) => {
  //   const countriesDb = [];
  //   querySnapshot.forEach((doc) => {
  //     countriesDb.push({
  //         id: doc.id,
  //         ...doc.data()
  //       })
  //   });
  //   dispatch({ type: FETCH_COUNTRIES, payload: countriesDb });
  // });
};

export const fetchOrganisations = () => async (dispatch) => {
  const firebaseUrl = getFirebaseUrl();
  const apiUrl = `${firebaseUrl}/organisations`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  const organisations = data.documents.map((doc) => {
    const id = doc.name.slice(doc.name.lastIndexOf("/") + 1);
    const organisation = {
      id,
    };
    for (const field in doc.fields) {
      organisation[field] = doc.fields[field].stringValue;
    }
    return organisation;
  });
  dispatch({ type: FETCH_ORGANISATION, payload: organisations });
};


export const fetchUsersByCountry = () => async (dispatch) => {
  const firebaseUrl = getFirebaseUrl();
  const apiUrl = `${firebaseUrl}/users`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  
  
  const users = data.documents.map((doc) => {
    const id = doc.name.slice(doc.name.lastIndexOf("/") + 1);
    const user = {
      id,
    };
    for (const field in doc.fields) {
      user[field] = doc.fields[field].stringValue;
    }
    return user;
  });
  console.log('users:', users);
  users.filter( user => user.country !== '3');
  console.log('filter users:', users);
  // console.log('Filter users:', users);
  dispatch({ type: COUNTRY_SELECTED, payload: users });
  
};