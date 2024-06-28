import { Button } from "../src/components";

import { useNavigate } from "react-router-dom";
import { page404 } from "../src/assets";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex  justify-center items-center ">
      <div className="flex  space-x-10 lg:flex-row md:flex-row sm:flex-col items-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-xl">Page not found</p>

          <Button onclick={() => navigate("/")} text="Home" />
        </div>
        <div className="flex">
          <img className="img" src={page404} alt="logo" />
        </div>
      </div>
    </div>
  );
}
