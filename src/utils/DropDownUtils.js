const DropDownUtils = {
  generateDefaultOptions: () => {
    return [
      {
        name: "default",
        value: "",
      },
      {
        value: "asc",
        name: "price < high",
      },
      {
        value: "desc",
        name: "price > high",
      },
    ];
  },
};

export default DropDownUtils;
