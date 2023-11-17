import { Product } from "./product.model";

export interface createProductDto extends Omit < Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}
//se extendió porque se necesitaba un atributo que no tenía "Product" que es "categoryId"
// En el momento de creación no se encesita el objeto, si no el id

type example = Pick <Product, 'color' | 'description' >
