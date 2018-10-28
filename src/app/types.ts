export type Client = {
    id: number;
    firmName: string
    oib: string
    owner: string
    address: string
    username: string
    email: string
    phone: string
    avatar: string
    status: string
    createdAt: string
    updatedAt: string
  }
export type Query = {
    getClients: Client[];
}