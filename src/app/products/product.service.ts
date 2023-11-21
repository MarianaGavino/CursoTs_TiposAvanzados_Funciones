import { faker } from '@faker-js/faker';
import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto, FindProductDto} from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
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

export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);     //buscar el elemento con el id que se esta mandando
  const prevData = products[index];                             //Guardar la onfo con la data previa, lo sacamos desde el index
  products[index] = {                                           //Actualización
    ...prevData,
    ...changes                                                  //Si solo hubiéramos dejado "changes" se rescribre caso todo el obj
  }
  return products[index];

}

export const findProduct = (dto: FindProductDto): Product[] => {
  // dto.color = 'blue';    // Manda error porque es de solo lectura
  // dto.tags = [];         // Manda error porque es de solo lectura
  // dto.tags?.unshift();   // Modifica el array
  return products;
}
