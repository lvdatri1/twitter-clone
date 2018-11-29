export default function reducer(
  state = {
    username: "",
    password: "",
    loginStatus: "uninitiated",
    user: {}
  },
  action
) {
  console.log('first step in reducer', state);
  switch (action.type) {
    case "SET_USERNAME_STARTED": {
      console.log("In set username reducer");
      return { ...state, username: action.payload };
      break;
    }
    case "SET_PASSWORD_STARTED": {
      console.log("In set password reducer");
      return { ...state, password: action.payload };
      break;
    }
    case "DO_LOGIN_STARTED": {
      return { ...state, loginStatus: "ongoing" };
      break;
    }
    case "DO_LOGIN_SUCCESS": {
      console.log('success and we have', state);
      return { ...state, loginStatus: "success", user: action.payload };
      break;
    }
    case "DO_LOGIN_FAILED": {
      return { ...state, loginStatus: "failed" };
      break;
    }
    default: {
      return state;
    }
  }
}
