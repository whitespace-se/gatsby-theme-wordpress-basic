export function sortModuleItemsByPostType(items, { name: postTypeName }) {
  switch (postTypeName) {
    case "event":
      return items.sort((a, b) => {
        return a.date - b.date;
      });
    default:
      return items;
  }
}

export function sortItemsByTitle(items) {
  return items.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
}
