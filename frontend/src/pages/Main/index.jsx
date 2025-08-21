import DefaultChatContainer from "@/components/DefaultChat";
import PasswordModal, { usePasswordModal } from "@/components/Modals/Password";
import { FullScreenLoader } from "@/components/Preloader";
import Sidebar, { SidebarMobileHeader } from "@/components/Sidebar";
import { userFromStorage } from "@/utils/request";
import React from "react";
import { isMobile } from "react-device-detect";
import Home from "./Home";

export default function Main() {
  const { loading, requiresAuth, mode } = usePasswordModal();

  if (loading) return <FullScreenLoader />;
  if (requiresAuth !== false) return <>{requiresAuth !== null && <PasswordModal mode={mode} />}</>;

  const user = userFromStorage();
  return (
    <div className="w-screen h-screen overflow-hidden bg-theme-bg-container flex">
      {!isMobile ? <Sidebar /> : <SidebarMobileHeader />}
      {!!user && user?.role !== "admin" ? <DefaultChatContainer /> : <Home />}
    </div>
  );
}
