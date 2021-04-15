const map = {
  all: {
    nameSingular: "Alla",
    namePlural: "Alla",
  },
  post: {
    archive: { title: "Nyhetsarkiv", url: "/nyheter" },
    nameSingular: "Nyheter",
    namePlural: "Nyheter",
    labels: {
      name: "Nyheter",
      singularName: "Nyheter",
    },
    archiveName: "Nyhetsarkiv",
  },
  page: {
    nameSingular: "Sida",
    namePlural: "Sidor",
    labels: {
      name: "Sidor",
      singularName: "Sida",
    },
    archiveName: "Sidarkiv",
  },
  event: {
    archive: { title: "Alla evenemang", url: "/evenemang" },
    nameSingular: "Evenemang",
    namePlural: "Evenemang",
    labels: {
      name: "Evenemang",
      singularName: "Evenemang",
    },
    archiveName: "Alla evenemang",
  },
  attachment: {
    nameSingular: "Dokument",
    namePlural: "Dokument",
    labels: {
      name: "Dokument",
      singularName: "Dokument",
    },
  },
  "operational-status": {
    archive: { title: "Fler meddelanden", url: "/driftinformation" },
    nameSingular: "Driftinformation",
    namePlural: "Driftinformation",
    labels: {
      name: "Driftinformation",
      singularName: "Driftinformation",
      noPosts: "Inga rapporterade driftstörningar just nu.",
    },
    archiveName: "Fler meddelanden",
  },
  "bulletin-board": {
    archive: { title: "Alla anslagstavlor", url: "/anslagstavla" },
    nameSingular: "Anslagstavla",
    namePlural: "Anslagstavla",
    labels: {
      name: "Anslagstavla",
      singularName: "Anslagstavla",
    },
    archiveName: "Alla anslagstavlor",
  },
};

export function getPostType(type) {
  return map[type];
}

export function getPostTypeNameSingular(type) {
  return map[type].nameSingular;
}

export function getPostTypeArchiveName(type) {
  return map[type].archiveName;
}

export function getPostTypeArchiveLink(type) {
  return map[type].archive.url;
}

export function getNoPostsLabel(type) {
  return map[type].labels.noPosts;
}
