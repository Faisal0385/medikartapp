import Toast from "react-native-toast-message";

export const authToaster = (type, text1, text2, position) =>{
  Toast.show({
    type: type,
    text1: text1,
    text2: text2,
    position: position,
    visibilityTime: 3000,
  });
}


export const myErrorToast = (message, position) => {
  Toast.show({
    position: position,
    type: "error",
    text1: message,
    visibilityTime: 2000,
    autoHide: true,
  });
};

export const errorToast = (message) => {
  Toast.show({
    position: "bottom",
    type: "error",
    text1: message,
    visibilityTime: 2000,
    autoHide: true,
  });
};

export const successToast = (message) => {
  Toast.show({
    position: "top",
    type: "success",
    text1: message,
  });
};

export const warningToast = (message) => {
  Toast.show({
    position: "bottom",
    type: "warning",
    text1: message,
  });
};
