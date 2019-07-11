//import AsyncStorage from "@react-native-community/async-storage";

export const setValue = async (key, val) => {
  try {
    await AsyncStorage.setItem(key, val);
  } catch (e) {}
  console.log("SetValue Async Done");
};

export const getValue = key => {
  return AsyncStorage.getItem(key).then(val => {
    return JSON.parse(val);
  }).catch((e) => {
      console.log('error get value')
  });
  console.log('get value Done')
};

export const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
        return true
    } catch (e) {
        return false
    }
    console.log('remove item done')
}