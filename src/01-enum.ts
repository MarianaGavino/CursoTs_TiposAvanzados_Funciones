/*Permite configurar un set de opciones
  Las opciones son almacenadas bajo una estructura llave-valor
*/
export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
}

const marianaUser: User = {
  username: 'Mariana',
  role: ROLES.ADMIN,
}
