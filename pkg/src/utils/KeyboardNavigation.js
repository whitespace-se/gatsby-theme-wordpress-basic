export function navigateMenuByKeys(itemOnFocus, itemsToFocusOn) {
  const parent = itemOnFocus.parentNode.parentNode.id;
  let listItems = Array.from(
    document.querySelectorAll(`#${parent} > ${itemsToFocusOn}`),
  );

  let itemOnFocusindex = listItems.indexOf(itemOnFocus.parentNode);

  navigateByKeys(itemOnFocus, itemOnFocusindex, listItems, "a");
}

export function navigateByKeys(item, itemIndex, listItems, elToFocusOn) {
  item.addEventListener("keyup", (e) => {
    e.preventDefault();
    let previousIndex =
      itemIndex - 1 < 0 ? listItems.length - 1 : itemIndex - 1;
    let nextIndex = itemIndex + 1 > listItems.length - 1 ? 0 : itemIndex + 1;

    switch (e.keyCode) {
      case 38: // up
        var previousItem = listItems[previousIndex].id;
        document.querySelector(`#${previousItem} ${elToFocusOn}`).focus();
        break;
      case 40: // down
        var nextItem = listItems[nextIndex].id;
        document.querySelector(`#${nextItem} ${elToFocusOn}`).focus();
        break;
      case 35: // end
        document
          .querySelector(
            `#${listItems[listItems.length - 1].id} ${elToFocusOn}`,
          )
          .focus();
        break;
      case 36: //home
        document.querySelector(`#${listItems[0].id} ${elToFocusOn}`).focus();
        break;
      default:
        break;
    }
  });
}
