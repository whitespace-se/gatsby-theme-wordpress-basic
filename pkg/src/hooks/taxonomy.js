const taxonomies = [
  {
    name: "categories",
    hierarchical: true,
    label: { singular: "Kategori", plural: "Kategorier" },
  },
  {
    name: "tags",
    hierarchical: false,
    label: { singular: "Etikett", plural: "Etiketter" },
  },
  {
    name: "operationalStatusCategories",
    hierarchical: true,
    label: { singular: "Kategori", plural: "Kategorier" },
  },
];

export function useTaxonomies() {
  return taxonomies;
}

export function useTaxonomy(name) {
  return taxonomies.find((taxonomy) => taxonomy.name === name);
}
