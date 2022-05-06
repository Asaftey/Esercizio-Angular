  export interface IUser {
    id: string,
    name: string,
    surname: string,
    mail: string,
    imageUrl: string,

  }

  export interface ILocation{
    adress: string,
    city: string,
    cap: string,
  }

  export interface IOrders{
     id: string,
     date: string,
     quantity: number,

  }

  export interface IProduct {
    name: string,
    price: number,
  }
