import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

const LogoutButton = () => {
  return (
    <>
      <Button variant={"destructive"}>
        <LogOut /> <span className="hidden md:flex">LogOut</span>
      </Button>
    </>
  );
};

export default LogoutButton;
