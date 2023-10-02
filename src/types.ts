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
  id: number;
  title?: string;
  content?: string;
  image?: string;
  imageTwo?: string;
  imageThree?: string;
  createdAt?: string;
};
