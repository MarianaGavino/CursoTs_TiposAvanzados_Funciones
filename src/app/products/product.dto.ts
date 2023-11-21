import { Product } from "./product.model";
import { updateProduct } from './product.service';

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}
//se extendió porque se necesitaba un atributo que no tenía "Product" que es "categoryId"
// En el momento de creación no se encesita el objeto, si no el id

type example = Pick <Product, 'color' | 'description' >

//Construye un tipo con todas las propiedades Typeestablecidas en opcionales.
export interface UpdateProductDto extends Partial<CreateProductDto> {}

type example2 = Required<Product>;

// export interface FindProductDto extends Readonly< Partial<Product> >{}

export interface FindProductDto extends Readonly<Partial <Omit <Product, 'tags'> > >{
  tags: ReadonlyArray<string>;
}

