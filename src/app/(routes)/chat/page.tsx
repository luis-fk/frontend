import Chat from "@/app/components/Chat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat",
};

export default function Page() {
  return <Chat />;
}
