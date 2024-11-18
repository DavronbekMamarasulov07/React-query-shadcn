import axios from "axios";
import Products from "./components/products/Products";
import { useQuery } from "@tanstack/react-query";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  const  getProducts = () => {
    return axios('https://fakestoreapi.com/products')
  }

  const {data, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    select: (data) => data.data
  })


  return (
    <div className="mb-[50px]">
      <Navbar />
      <Products data={data || []} isLoading={isLoading} />
    </div>
  );
};

export default App;
