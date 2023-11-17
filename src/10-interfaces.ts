type Sizes = 'S' | 'M' | 'L';         //Tipo alias

// type Product =  {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes;
// }

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.unshift({
  id: 1,
  title: 'producto 1',
  createdAt: new Date(),
  stock: 90,
  size: 'M',
})

const addProduct = (data: Product) => {
  products.unshift(data);
}

