// import { Link } from "gatsby";
import { H, Section } from "@jfrk/react-heading-levels";
import cx from "classnames";
import React from "react";

import {
  getPostTypeNameSingular,
  getPostTypeArchiveName,
  getPostTypeArchiveLink,
  getNoPostsLabel,
} from "../../utils/postTypes";
import { Button } from "../Button";
import { RoundIcon } from "../Icon";
import { Link } from "../Link";

export function CardOperational({ className, postType, items, ...restProps }) {
  const singleDisturbance =
    items.length == 1 &&
    items.map(
      (
        {
          title,
          uri: link,
          operationalStatusCategories: { nodes: categories },
        },
        key,
      ) => {
        return (
          <div key={key}>
            {title && (
              <Section>
                <div className="c-card__title">
                  <H className="c-card__title-heading">
                    {link ? (
                      <Link to={link} className="c-card__title-heading-link">
                        {title}
                      </Link>
                    ) : (
                      title
                    )}
                  </H>
                </div>
                {categories &&
                  categories.map(
                    ({ name, categoryIcon: { name: iconName } }, key) => {
                      return (
                        <div className="c-card__category" key={key}>
                          <RoundIcon
                            name={iconName}
                            size="1rem"
                            color="var(--color-light)"
                            bgColor="var(--color-tertiary)"
                          />
                          {name}
                        </div>
                      );
                    },
                  )}
              </Section>
            )}
          </div>
        );
      },
    );

  const multipleDisturbances =
    items.length > 1 &&
    items.slice(0, 3).map(({ title, uri: link }, key) => {
      return (
        <div className="c-card__multiple" key={key}>
          {title && (
            <Section>
              <div className="c-card__title">
                <div className="c-card--list">
                  <H className="c-card__title-heading">
                    {link ? (
                      <Link to={link} className="c-card__title-heading-link">
                        {title}
                      </Link>
                    ) : (
                      title
                    )}
                  </H>
                </div>
              </div>
            </Section>
          )}
        </div>
      );
    });

  return (
    <article
      className={cx("c-card c-card--spacing c-card--operational", className)}
      {...restProps}
    >
      <H className="c-card__heading">
        <Link to={getPostTypeArchiveLink(postType)}>
          {getPostTypeNameSingular(postType)}
        </Link>
      </H>

      {items.length == 1 ? (
        singleDisturbance
      ) : items.length > 1 || items.length > 3 ? (
        multipleDisturbances
      ) : (
        <p className="c-card__body">{getNoPostsLabel(postType)}</p>
      )}

      {items.length > 3 && (
        <Button
          className="c-card__footer"
          title={getPostTypeArchiveName(postType)}
          link={getPostTypeArchiveLink(postType)}
          iconBeforeName="arrow-right"
          iconBefore={true}
          buttonModifier="prominent-link"
          iconModifier="primary"
          iconBgColor="var(--color-action)"
          roundIcon={true}
          iconBeforeSize="20px"
        />
      )}
    </article>
  );
}
