import AsyncStorage from "@react-native-async-storage/async-storage";

export const getValues = (key: string) => {
  return AsyncStorage.getItem(key);
};

export const setValues = (key: string, value: any) => {
  AsyncStorage.setItem(key, value)
    .then(() => console.log("ASYNC_SET_VALUE ::: SUCCESS"))
    .catch((e) => console.log("ASYNC_SET_VALUE ::: ", e));
};

export const clearStorage = () => {
  AsyncStorage.clear()
    .then(() => console.log("CLEAR STORAGE :: SUCESS"))
    .catch((e) => console.log("CLEAR STORAGE", e));
};
