"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <p className="text-lg">Logging out...</p>
    </div>
  );
}
