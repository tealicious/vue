import Api from "./api";
import { fireBaseUrl } from "../../main";
import firebase from "firebase";
export default class AuthApi extends Api {
  constructor() {
    super();
    this.baseUrl = fireBaseUrl;
  }

  register(loginInfo, successCallback, failureCallback) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .then(user => successCallback(user.user))
      .catch(err => failureCallback(err));
  }

  signIn(loginInfo, successCallback, failureCallback) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .then(user => successCallback(user.user))
      .catch(err => failureCallback(err));
  }
}
