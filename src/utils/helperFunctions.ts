import CryptoJS from "crypto-js";
export const hashfunction = (text: any) => {
  const passphrase = process?.env?.NEXT_PUBLIC_HASH_SECRET_KEY;
  const combined = passphrase + text;
  return CryptoJS.MD5(combined).toString(CryptoJS.enc.Hex);
};

export const isEmptyOrNull = (value: any) =>
  value === undefined ||
  value === "" ||
  value === null ||
  isEmptyArray(value) ||
  isEmptyObject(value);

function isObject(arg: any) {
  return typeof arg === "object" && !isNull(arg) && !isArray(arg);
}
function isEmptyObject(arg: any) {
  return isObject(arg) && Object.keys(arg).length === 0;
}

function isFunction(arg: any) {
  return typeof arg === "function";
}

function isNumber(arg: any) {
  return typeof arg === "number";
}

function isString(arg: any) {
  return typeof arg === "string";
}

function isArray(arg: any) {
  return Array.isArray(arg);
}

function isEmptyArray(arg: any) {
  return arg === undefined || (isArray(arg) && arg.length === 0);
}

function isNull(arg: any) {
  return arg === null;
}
export const isUserLogin = () => {
  const isLogin = localStorage.getItem("isLogin");
  if (isLogin) {
    return true;
  } else {
    return false;
  }
};
export function isNotEmptyOrNull(data: any) {
  return (
    data !== undefined &&
    data !== "undefined" &&
    data !== null &&
    !isEmptyArray(data) &&
    data !== "" &&
    !isEmptyObject(data)
  );
}
