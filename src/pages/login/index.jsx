import { useState } from "react";
import Input from "../../components/input";

export default function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://urlbackend.com", //Cambair la endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Solicitud POST exitosa");
        alert("El mensaje se envio con exito");
      } else {
        console.error("Error en la solicitud POST");
        alert("El mensaje no se pudo enviar");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
      alert("El mensaje no se pudo enviar");
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const data = [
    {
      placeholder: "Email",
      type: "email",
      id: "email",
      name: "email",
      value: formData.email,
    },
    {
      placeholder: "Contraseña",
      type: "password",
      id: "password",
      name: "password",
      value: formData.password,
    },
  ];
  return (
    <div className=" min-h-svh flex items-center justify-center p-4 sm:p-24 bg-neutral-800">
      <div className=" w-full lg:w-1/2 2xl:w-1/3 rounded-xl px-4 sm:px-24 lg:px-8 py-24 bg-neutral-900 shadow-2xl border-4 border-neutral-950">
        <h1 className=" text-center text-2xl sm:text-3xl text-white font-bold">
          Bienvenido
        </h1>
        <h2 className="text-center text-white/70 py-2 text-sm pb-4">
          Ingresa tus datos para iniciar sesión
        </h2>
        <form onSubmit={handleSubmit}>
          {data.map((items) => (
            <Input
              placeholder={items.placeholder}
              type={items.type}
              id={items.id}
              name={items.name}
              value={items.value}
              onChange={handleInputChange}
              key={items.name}
            />
          ))}
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
