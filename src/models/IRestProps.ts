export interface IRestProps {
  id?: number;
  restName?: string;
  deliveryTime?: string;
  rating: number;
  freeDelivery?: boolean;
  takeaway?: boolean;
  sushi?: boolean;
  burger?: boolean;
  numReviews: number;
  discount?: boolean;
  gift?: boolean;
}
