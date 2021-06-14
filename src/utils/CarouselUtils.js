const imageNameFromPath = (imagePath) => {
  if (!imagePath) {
    return "";
  }
  const splitPath = imagePath?.split(".")[0].split("/");
  return splitPath[splitPath?.length - 1];
};

const CarouselUtils = {
  convertProductBanner: (banners) => {
    let imagesPath = [];
    banners?.map((banner) => {
      imagesPath.push({
        alt: imageNameFromPath(banner.banner_path),
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
        alt: imageNameFromPath(productImage.image),
        path: productImage.image,
      });
      return imagesPath;
    });
    return imagesPath;
  },
  getImageNameFromPath: (path) => {
    return imageNameFromPath(path);
  },
};

export default CarouselUtils;
