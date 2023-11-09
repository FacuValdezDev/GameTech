const products = [
  {
    id: "1",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "2",
    name: "Ryzen 3 4100 - No Cooler OEM",
    price: "1400",
    category: "Cpu",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "3",
    name: "Ryzen 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "4",
    name: "Ryzen 5 5600x 4.6GHZ Turbo + Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "5",
    name: "Ryzen 7 5700G 4.6GHz Turbo + Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "6",
    name: "Ryzen 7 5700X 4.6GHz Turbo AM4 - No Cooler",
    price: "1400",
    category: "Cpu",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "7",
    name: "Ryzen 7 7700 5.3GHz Turbo AM5",
    price: "1400",
    category: "Cpu",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "8",
    name: "Ryzen 7 5700G",
    price: "1400",
    category: "Cpu",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "9",
    name: "I7 10700",
    price: "1500",
    category: "Cpu",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "10",
    name: "RTX 3080",
    price: "2000",
    category: "Gpu",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "11",
    name: "RX 6700 XT",
    price: "1800",
    category: "Gpu",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "12",
    name: "X570 ASUS STRIX",
    price: "1000",
    category: "Motherboard",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "13",
    name: "A520 ASUS STRIX",
    price: "900",
    category: "Motherboard",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "14",
    name: "16GB DDR4 HYPERX",
    price: "500",
    category: "Memory-ram",
    imgurl: "../src/assets/img/ryzen7.png",
  },
  {
    id: "15",
    name: "Nvme2g 480GB",
    price: "300",
    category: "Disk",
    imgurl: "../src/assets/img/ryzen7.png",
  },
];

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //buscar el producto
      const product = products.find((p) => p.id === id);

      //si existe el producto
      if (product) {
        resolve(product);
      } else {
        reject("No existe el producto");
      }
    }, 1000);
  });
};

export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productFiltered = category
        ? products.filter(
            (product) => product.category.toLowerCase() === category,
          )
        : products;

      resolve(productFiltered);
    }, 1000);
  });
};

export default products;
