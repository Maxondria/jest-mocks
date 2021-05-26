import { isDirectEnroll } from "./isDirectEnroll";

export const assumeIamASaga = (product) => {
  return isDirectEnroll(product);
};
