import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { Actions } from "react-native-router-flux";
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS
} from "./types";

const collectIdAndDocs = doc => {
  return { id: doc.id, ...doc.data() };
};

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const currentUserId = firebase.auth().currentUser.uid;

  return dispatch => {
    firebase
      .firestore()
      .collection("users")
      .doc(currentUserId)
      .collection("employees")
      .add({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const currentUserId = firebase.auth().currentUser.uid;

  return dispatch => {
    firebase
      .firestore()
      .collection("users")
      .doc(currentUserId)
      .collection("employees")
      .doc(uid)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.pop();
      });
  };
};
export const employeeDelete = uid => {
  const currentUserId = firebase.auth().currentUser.uid;

  return dispatch => {
    firebase
      .firestore()
      .collection("users")
      .doc(currentUserId)
      .collection("employees")
      .doc(uid)
      .delete()
      .then(() => {
        dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
        Actions.pop();
      });
  };
};

export const employeesFetch = () => {
  const currentUserId = firebase.auth().currentUser.uid;

  return dispatch => {
    firebase
      .firestore()
      .collection("users")
      .doc(currentUserId)
      .collection("employees")
      .onSnapshot(snapshots => {
        const employees = snapshots.docs.map(collectIdAndDocs);
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: employees });
      });
  };
};
