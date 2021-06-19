const CommonUtils = {
  getFilters: (filters) => {
    const generatedFilters = filters?.map((filter) => {
      let filterTypeObj = { filterType: filter.variant.name };
      filterTypeObj["filterOptions"] = [];
      filter.variant.variant_values.map((option) => {
        filterTypeObj.filterOptions.push({
          name: option.value,
          isChecked: false,
          id: option.id,
        });
        return filterTypeObj.filterOptions;
      });
      return filterTypeObj;
    });
    return generatedFilters;
  },
};

export default CommonUtils;
