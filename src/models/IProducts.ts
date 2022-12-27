import { IProduct } from './IProduct';
import { IRecommendProduct } from './IRecommendProducts';

export interface IProducts {
  products: IProduct[];
  recommendProducts: IRecommendProduct[];
}
