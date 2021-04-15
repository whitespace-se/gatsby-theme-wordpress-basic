import parseDate from "date-fns/parse";

export function getEventMeta(event) {
  return event.postMetaJSON ? JSON.parse(event.postMetaJSON) : {};
}

export function getNextEventOccasion(event) {
  let { occasions_complete: occasions = [] } = getEventMeta(event);
  return (
    occasions.find(
      (occasion) =>
        new Date(occasion.end_date || occasion.start_date) > new Date(),
    ) || occasions[occasions.length - 1]
  );
}

export function getNextEventOccasionStartDate(event) {
  let occasion = getNextEventOccasion(event);
  return occasion
    ? parseDate(occasion.start_date, "yyyy-MM-dd HH:mm", new Date())
    : null;
}
