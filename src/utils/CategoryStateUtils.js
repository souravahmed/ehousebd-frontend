const CategoryStateUtils = {
  getCategoryNameBySlug: (categories, slug) => {
    const category = categories.find((category) => category.slug === slug);
    return category?.name;
  },
};

export default CategoryStateUtils;
