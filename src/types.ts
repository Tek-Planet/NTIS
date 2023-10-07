export type Menus = {
  id: string;
  title: string;
  img?: string;
};

export type GeneralListModel = {
  id: string;
  title?: string;
  content?: string;
  img?: string;
  createdAt?: string;
  subdata?: GeneralListModel[];
};

export type NewModel = {
  id?: string;
  title?: string;
  content?: string;
  image?: string;
  imageTwo?: string;
  imageThree?: string;
  createdAt?: string;
};

export interface LoginModel {
  UserName: string;
  Password: String;
}

export interface UserState {
  token: string;
  error: string | undefined;
  authenticated: Boolean;
  loading: Boolean;
  currency: string;
  currentRoute: string;
  loadingUI: boolean;
  authError: string | undefined;
  //orders
}
