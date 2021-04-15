import { Section } from "@jfrk/react-heading-levels";
import { withKnobs, text, select, number } from "@storybook/addon-knobs";
import React from "react";

import { Card } from "./Card";
import CardIndex from "./CardIndex";
import CardIndexEvent from "./CardIndexEvent";
import CardOperational from "./CardOperational";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    withKnobs,
    (storyFn) => (
      <div
        style={{
          display: "flex",
          minWidth: "100vw",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "380px" }}>
          <Section>{storyFn()}</Section>
        </div>
      </div>
    ),
  ],
};

function srcSet(ratio, url) {
  return [75, 150, 300, 450, 600, 800, 1220]
    .map((width) => {
      let height = Math.round(width / ratio);
      return `${url({ width, height })} ${width}w`;
    })
    .join(",\n");
}

export const promo = () => {
  let width = number("Bildbredd (px)", 380, {
    range: true,
    min: 100,
    max: 1000,
    step: 100,
  });
  let height = number("Bildhöjd (px)", 208, {
    range: true,
    min: 100,
    max: 1000,
    step: 100,
  });
  let imgID = select(
    "Bild-ID",
    {
      1026: "1026",
      1025: "1025",
      1027: "1027",
      1029: "1029",
    },
    1026,
  );
  return (
    <Card
      className={text("Klasser", "c-card--style-default")}
      title={text("Titel", "Självbetjäning (e-tjänster)")}
      excerpt={text(
        "Text",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      )}
      url={text("Länk-URL", "#")}
      base64=""
      aspectRatio={width / height}
      src={`https://picsum.photos/id/${imgID}/${width}/${height}`}
      srcSet={srcSet(
        width / height,
        ({ width, height }) =>
          `https://picsum.photos/id/${imgID}/${width}/${height}`,
      )}
      alt={text("Alternativ text", "Consectetur adipiscing elit")}
    />
  );
};

export const operatingInformation = () => {
  return (
    <CardOperational
      className="c-card--style-1 c-card--radius"
      postType="operational-status"
      items={[
        {
          title: text("Title", "Ledningsarbete pågår längs Havrejordsvägen"),
          date: "2020-05-05",
          operationalStatusCategories: {
            nodes: {
              categories: [
                {
                  name: text("Category", "Stadsplanering och trafik"),
                  categoryIcon: {
                    name: text("Category Icon", "fruit-apple"),
                  },
                },
              ],
            },
          },
          link: {
            url: text("URL", "#"),
          },
        },
        {
          title: text("Title", "Ledningsarbete pågår längs Havrejordsvägen"),
          date: "2020-05-05",
          operationalStatusCategories: {
            nodes: {
              categories: [
                {
                  name: text("Category", "Stadsplanering och trafik"),
                  categoryIcon: {
                    name: text("Category Icon", "fruit-apple"),
                  },
                },
              ],
            },
          },
          link: {
            url: text("URL", "#"),
          },
        },
        {
          title: text("Title", "Ledningsarbete pågår längs Havrejordsvägen"),
          date: "2020-05-05",
          operationalStatusCategories: {
            nodes: {
              categories: [
                {
                  name: text("Category", "Stadsplanering och trafik"),
                  categoryIcon: {
                    name: text("Category Icon", "fruit-apple"),
                  },
                },
              ],
            },
          },
          link: {
            url: text("URL", "#"),
          },
        },
        {
          title: text("Title", "Ledningsarbete pågår längs Havrejordsvägen"),
          date: "2020-05-05",
          operationalStatusCategories: {
            nodes: {
              categories: [
                {
                  name: text("Category", "Stadsplanering och trafik"),
                  categoryIcon: {
                    name: text("Category Icon", "fruit-apple"),
                  },
                },
              ],
            },
          },
          link: {
            url: text("URL", "#"),
          },
        },
      ]}
    />
  );
};

export const promo2 = () => {
  return (
    <Card
      className="c-card--style-2 c-card--radius"
      title={text("Title", "Självbetjäning")}
      excerpt={text(
        "Text",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      )}
      url={text("URL", "#")}
    />
  );
};

export const promo3 = () => {
  return (
    <Card
      className="c-card--style-3 c-card--radius"
      title={text("Title", "Synpunkter och frågor")}
      excerpt={text(
        "Text",
        "I forumet kan du ställa frågor, lämna förslag och skicka in synpunkter.",
      )}
      url={text("URL", "#")}
    />
  );
};

export const news = () => {
  let width = number("Bildbredd (px)", 380, {
    range: true,
    min: 100,
    max: 1000,
    step: 100,
  });
  let height = number("Bildhöjd (px)", 208, {
    range: true,
    min: 100,
    max: 1000,
    step: 100,
  });
  let imgID = select(
    "Bild-ID",
    {
      1026: "1026",
      1025: "1025",
      1027: "1027",
      1029: "1029",
    },
    1026,
  );
  return (
    <CardIndex
      className={text("Klasser", "")}
      title={text("Titel", "Lorem ipsum")}
      date="2020-05-05"
      excerpt={text(
        "Text",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      )}
      url={text("Länk-URL", "#")}
      image={{
        base64: "",
        aspectRatio: width / height,
        src: `https://picsum.photos/id/${imgID}/${width}/${height}`,
        srcSet: srcSet(
          width / height,
          ({ width, height }) =>
            `https://picsum.photos/id/${imgID}/${width}/${height}`,
        ),
        alt: text("Alternativ text", "Consectetur adipiscing elit"),
      }}
    />
  );
};

export const event = () => {
  let width = number("Bildbredd (px)", 380, {
    range: true,
    min: 100,
    max: 1000,
    step: 100,
  });
  let height = number("Bildhöjd (px)", 208, {
    range: true,
    min: 100,
    max: 1000,
    step: 100,
  });
  let imgID = select(
    "Bild-ID",
    {
      1026: "1026",
      1025: "1025",
      1027: "1027",
      1029: "1029",
    },
    1026,
  );
  return (
    <CardIndexEvent
      className={text("Klasser", "")}
      title={text("Titel", "Lorem ipsum")}
      date="2020-05-05"
      excerpt={text(
        "Text",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      )}
      url={text("Länk-URL", "#")}
      image={{
        base64: "",
        aspectRatio: width / height,
        src: `https://picsum.photos/id/${imgID}/${width}/${height}`,
        srcSet: srcSet(
          width / height,
          ({ width, height }) =>
            `https://picsum.photos/id/${imgID}/${width}/${height}`,
        ),
        alt: text("Alternativ text", "Consectetur adipiscing elit"),
      }}
    />
  );
};
