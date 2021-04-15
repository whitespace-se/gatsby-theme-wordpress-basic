import PhoneNumber from "awesome-phonenumber";

export function formatPhoneNumber(number, format) {
  return new PhoneNumber(number, "SE").getNumber(format);
}
