const CategoryStateUtils = {
  getCategoryNameBySlug: (categoryState, slug) => {
    const category = categoryState.categories.find(
      (category) => category.slug === slug
    );
    return category?.name;
  },
};

export default CategoryStateUtils;
