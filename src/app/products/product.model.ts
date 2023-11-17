import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";
import { createProduct } from '../../06-default';

export type Sizes = 'S' | 'M' | 'L';         //Tipo alias

export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}
