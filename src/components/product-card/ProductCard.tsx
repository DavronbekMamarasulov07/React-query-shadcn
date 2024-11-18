import { AiFillHeart } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { FiDollarSign } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Product } from '@/types';

const ProductCard = ({ product }: { product: Product }) => {
  const [isLike, setIsLike] = useState(false);
  const { toast } = useToast()

  useEffect(() => {
    
  },[isLike])


  const handleLike = (product: Product) => {
    setIsLike(!isLike)
    if(isLike){
      toast({
        variant: "destructive",
        description: `${product.title} removed from favorites`,   
      })
    }
    else{
      toast({
        description: `${product.title} dded to favorites`, 
      })
    }
  }

  

  return (
    <Card className='hover:scale-105 transition-all relative'>
      <CardHeader>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain rounded-t-md"
        />
        <div onClick={() => handleLike(product)} className="absolute top-2 right-2 bg-[#3c3c3c13] p-1 rounded-full hover:cursor-pointer hover:scale-110 transition-transform hover:shadow-customLike">
          {
            isLike ? (
              <AiFillHeart className="text-red-500 text-xl" />
            ) : (
              <AiOutlineHeart className="text-red-500 text-xl" />
            )
          }
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="h-12 overflow-hidden mb-4">
          {product.title}
        </CardTitle>
        <div className="flex justify-between mt-2">
          <p className="flex gap-1 items-center">
            <FiDollarSign className="text-green-500" />
            {product.price}
          </p>
          <p className="flex gap-1 items-center">
            {product.rating.rate} <AiFillStar className="text-yellow-500 " />{' '}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
