export function getEventDate(startDate, endDate, dateFormat, timeFormat) {
  const eventDate = new Date(startDate).toLocaleString("sv-SE", dateFormat);
  const startTime = new Date(startDate).toLocaleString("sv-SE", timeFormat);
  const endTime = new Date(endDate).toLocaleString("sv-SE", timeFormat);

  return eventDate + ", " + startTime + "–" + endTime;
}
