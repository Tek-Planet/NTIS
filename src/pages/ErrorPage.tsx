import { Button } from "../components";

import { useNavigate } from "react-router-dom";
import { page404 } from "../assets";

export default function ErrorPage() {
  let navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex  justify-center items-center  bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ">
      <div className="flex  space-x-10 items-center">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="text-6xl text-dauntlessBlue font-bold">404</h1>
          <p className="text-xl">Page not found</p>

          <Button onclick={() => navigate("/")} text="Home" />
        </div>
        <div className="hidden md:flex">
          <img className="h-[200px] w-[200px]" src={page404} alt="logo" />
        </div>
      </div>
    </div>
  );
}
