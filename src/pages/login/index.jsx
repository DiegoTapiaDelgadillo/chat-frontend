import { Link } from "react-router-dom";
import Input from "../../components/input";

export default function LogIn() {
  return (
    <div className=" min-h-svh flex items-center justify-center p-4 sm:p-24 bg-neutral-800">
      <div className=" w-full lg:w-1/2 2xl:w-1/3 rounded-xl px-4 sm:px-24 lg:px-8 py-24 bg-neutral-900 shadow-2xl border-4 border-neutral-950">
        <h1 className=" text-center text-2xl sm:text-3xl text-white font-bold">
          Bienvenido
        </h1>
        <h2 className="text-center text-white/70 py-2 text-sm pb-4">
          Ingresa tus datos para iniciar sesión
        </h2>
        <form action="">
          <Input placeholder={"Email"} type={"email"} />
          <Input placeholder={"Password"} type={"password"} />
          <button
            type="submit"
            className="w-full bg-blue-500 rounded-2xl p-4 text-white hover:bg-blue-500/50 ease-in-out duration-300"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
