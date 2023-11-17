import {faker} from '@faker-js/faker';
import { Product } from "./product.model";
import { createProductDto } from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: createProductDto): Product => {
  const newProduct ={
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.unshift(newProduct);
  return newProduct;
}

export const updateProduct = (id: string, changes: Product) => {

}

export const deleteProduct = (id: string ) => {

}
