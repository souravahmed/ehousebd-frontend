const CarouselUtils = {
  convertProductBanner: (banners) => {
    let imagesPath = [];
    banners?.map((banner) => {
      imagesPath.push(banner.banner_path);
      return imagesPath;
    });
    return imagesPath;
  },

  convertProductImages: (imageGalleries) => {
    let imagesPath = [];
    imageGalleries[0].product_images.map((productImage) => {
      imagesPath.push(productImage.image);
      return imagesPath;
    });
    return imagesPath;
  },
};

export default CarouselUtils;
