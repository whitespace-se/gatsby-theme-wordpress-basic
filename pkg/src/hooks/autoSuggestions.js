import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import cx from "classnames";
import React from "react";

import Icon from "../components/Icon/Icon.js";

export const getSuggestions = (value) => {
  return value.split("<br />");
};

export const getFoundSuggestions = (value, suggestions) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let suggestionsArr = suggestions
    .filter((val) => {
      return val.trim().toLowerCase().startsWith(inputValue);
    })
    .map((val) => {
      return val.trim();
    });

  return inputLength === 0 ? [] : suggestionsArr.slice(0, 5);
};

export const getSuggestionValue = (suggestion) => {
  return suggestion;
};

export const renderInputComponent = (
  labelText,
  buttonText,
  labelClass,
  inputProps,
  search,
) => {
  return (
    <>
      <label htmlFor="search-form-query" className={labelClass}>
        {labelText}
      </label>
      <div
        className={cx(
          "c-search-form__wrapper",
          search && "c-search-form--not-empty",
        )}
      >
        <input {...inputProps} />
        <button
          className="c-search-form__submit"
          type="submit"
          aria-label={buttonText}
        >
          <Icon name="search-wide" size="12px" />
        </button>
      </div>
    </>
  );
};

const submitSelectedSuggestion = async (inputRef, submitRef) => {
  let res = await inputRef.current.dispatchEvent(
    new Event("input", { bubbles: true }),
  );

  if (res) {
    submitRef.current.dispatchEvent(new Event("submit"));
    return res;
  }
};

export const renderSuggestions = (
  suggestion,
  inputValue,
  submitRef,
  inputRef,
) => {
  let matches = match(suggestion, inputValue);
  let matchedParts = parse(suggestion, matches);

  return (
    <p
      className="c-search-form__suggestion"
      onClick={() => submitSelectedSuggestion(inputRef, submitRef)}
    >
      {matchedParts.map((part, index) => {
        if (part.highlight) {
          return <strong key={String(index)}>{part.text}</strong>;
        } else {
          return <span key={String(index)}>{part.text}</span>;
        }
      })}
    </p>
  );
};
