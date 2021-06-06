const getImageNameFromPath = (imagePath) => {
  const splitPath = imagePath.split(".")[0].split("/");
  return splitPath[splitPath.length - 1];
};

const CarouselUtils = {
  convertProductBanner: (banners) => {
    let imagesPath = [];
    banners?.map((banner) => {
      imagesPath.push({
        alt: getImageNameFromPath(banner.banner_path),
        path: banner.banner_path,
      });
      return imagesPath;
    });
    return imagesPath;
  },

  convertProductImages: (imageGalleries) => {
    let imagesPath = [];
    imageGalleries[0].product_images.map((productImage) => {
      imagesPath.push({
        alt: getImageNameFromPath(productImage.image),
        path: productImage.image,
      });
      return imagesPath;
    });
    return imagesPath;
  },
};

export default CarouselUtils;
