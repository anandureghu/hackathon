import React from "react";
import { useUser } from "@clerk/nextjs";

export default function useAuth() {
  const { user } = useUser();
  return { user };
}
