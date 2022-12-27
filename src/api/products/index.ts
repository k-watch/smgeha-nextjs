import { IRecommendProduct } from './../../models/IRecommendProducts';
import { IProduct } from './../../models/IProduct';

import httpInstance from '../httpInstance';

export const reqProducts = async (id: string) => {
  const { data } = await httpInstance.get<IProduct[]>(`/api/products/${id}`);

  return data;
};

export const reqRecommendProducts = async () => {
  const { data } = await httpInstance.get<IRecommendProduct[]>(
    `/api/recommendProducts/`
  );

  return data;
};
