import { isDirectEnroll } from "./isDirectEnroll";

export const wrapper = (product) => {
  return isDirectEnroll(product);
};
