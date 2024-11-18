import { CgLogIn } from "react-icons/cg";
import { Input } from "../ui/input";
import Container from "../container/Container";

const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center justify-between py-4" >
          <h1 className="text-2xl font-bold">Logo</h1>
          <Input className="w-full max-w-[400px]" type="text" placeholder="Search..." />
          <CgLogIn className="text-3xl p-1  hover:translate-x-1 hover:scale-110  hover:cursor-pointer transition-all" />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
