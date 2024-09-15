// components/Logout.tsx
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const loadingToastId = toast.loading("Logging out...");

    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });

      if (res.ok) {
        toast.update(loadingToastId, {
          render: "Logout successful!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        router.push("/login"); // Redirect to the login page
      } else {
        throw new Error("Failed to log out. Please try again.");
      }
    } catch (error: any) {
      toast.update(loadingToastId, {
        render: error.message || "Failed to log out. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <h1>Are you sure you want to log out?</h1>
      <Button
        type="primary"
        icon={<LogoutOutlined />}
        onClick={handleLogout}
        className="bg-red-500 text-white"
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
