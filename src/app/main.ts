import {faker} from '@faker-js/faker';
import { addProduct, products, updateProduct, findProduct } from './products/product.service';

for (let index = 0; index < 10; index ++ ){
  addProduct ({
  // id: faker.string.uuid(),
  description: faker.commerce.productDescription(),
  image: faker.image.url(),
  color: faker.color.human(),
  price: parseInt(faker.commerce.price(), 10),
  isNew: faker.datatype.boolean(),
  tags: faker.helpers.arrayElements([]),
  size: faker.helpers.arrayElement(['S', 'M', 'L']),
  title: faker.commerce.productName(),
  // createdAt: faker.date.recent(),
  // updatedAt: faker.date.recent(),
  stock: faker.number.int({min: 0, max: 100}),
  // category: {
  //   id: faker.string.uuid(),
  //   name: faker.commerce.department(),
  //   createdAt: faker.date.recent(),
  //   updatedAt: faker.date.recent(),
  // }
  categoryId: faker.string.uuid(),
})
}

console.log(products);

const product = products[0];

updateProduct(product.id, {
  title: 'New Title',
});

findProduct({
  stock: 10,
  color: 'red',
  tags: ['1', '2'],

})
