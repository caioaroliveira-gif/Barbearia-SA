import { AiOutlineScissor } from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <header>
        <div className=" flex mt-5 ml-5">
          <AiOutlineScissor />
          <h1>Barbearia Locals</h1>
        </div>

        <div className=" flex mt-3 justify-center ">
          <a href="" className="m-5">Inicio</a>
          <a href="" className="m-5">Catalogo</a>
          <a href="" className="m-5">Sobre</a>
        </div>


      </header>
    </>
  );
}
