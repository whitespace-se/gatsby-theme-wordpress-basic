import { useState } from "react";

export function useSet(initialState = []) {
  const [values, setValues] = useState(initialState);
  return [
    values,
    {
      has: (value) => values.includes(value),
      add: (value) => {
        setValues((values) => {
          if (!values.includes(value)) {
            return [...values, value];
          }
          return values;
        });
      },
      delete: (value) => {
        setValues((values) => {
          let index = values.indexOf(value);
          if (index !== -1) {
            return [...values.slice(0, index), ...values.slice(index + 1)];
          }
          return values;
        });
      },
      toggle: (value) => {
        setValues((values) => {
          let index = values.indexOf(value);
          if (index !== -1) {
            return [...values.slice(0, index), ...values.slice(index)];
          } else {
            return [...values, value];
          }
        });
      },
    },
  ];
}
