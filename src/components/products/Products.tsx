
import { Product } from '@/types';
import Container from '../container/Container';
import { Skeleton } from '../ui/skeleton';
import ProductCard from '../product-card/ProductCard';

interface ProductsProps {
  data: Product[];
  isLoading: boolean;
}

const Products = ({ data, isLoading }: ProductsProps) => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading
          ? Array.from({ length: 16 }).map((_, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <Skeleton className="h-[260px] w-[270px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-8 w-[250px]" />
                  <div className='flex w-[270px] justify-between items-center'>
                    <Skeleton className="h-6 w-[70px]" />
                    <Skeleton className="h-6 w-[70px]" />
                  </div>
                </div>
              </div>
            ))
          : data.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </Container>
  );
};

export default Products;
