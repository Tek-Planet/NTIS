export type Menus = {
  subNav: boolean;
  id: string;
  title: string;
  img?: string;
  subNav?: any;
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
  imageName?: string;
};

export interface LoginModel {
  UserName: string;
  Password: string;
}

export interface UserState {
  token: string;
  authenticated: Boolean;
  loading: Boolean;
  user: any;
  screenSize: number;
  activeMenu: Boolean;
  //orders
}

export interface DashBoardModel {
  id: string;
  title: string;
  subTitle: string;
  imageName?: string;
  image?: any | string;
  updatedAt?: string;
  lastUpdateBy?: string;
}

export interface GalleryModel {
  id?: string;
  image: string;
  caption?: string;
  imageName?: string;
  createdAt: number;
}

export interface MessageModel {
  id?: string;
  name?: string;
  email?: string;
  content?: string;
  createdAt: number;
}
