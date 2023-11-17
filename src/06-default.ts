export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    stock,
    isNew,
  }
}

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);

// Salida:
// { id: 1, stock: 12, isNew: true }
// { id: 1, stock: 10, isNew: true }
// { id: 1, stock: 10, isNew: false }
