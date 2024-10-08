export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  isActivated: boolean;
  activationLink: string;
  favorite_id: number;
  basket_id: number;
}
