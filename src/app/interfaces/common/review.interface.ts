import {Product} from './product.interface';


export interface Review {
  _id?: string;
  user?: string | any;
  product?: string | Product;
  name?: string;
  reviewDate: string;
  review: string;
  rating: number;
  status: boolean;
  reply: string;
  replyDate: string;
}
