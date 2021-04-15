import { getEventMeta } from "../utils/events";

export function isEventRepeatable(event) {
  let data = getEventMeta(event);
  return data.occasions_complete.length > 1 ? true : false;
}
