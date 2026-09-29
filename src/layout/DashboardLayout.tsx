import { Header } from "@/components/header";
import Sidebar from "@/components/Sidebar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center bg-mainBg ">
          <div className="lg:hidden p-4">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md bg-purple text-white cursor-pointer">
                  <Menu size={20} />
                </button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="p-0 w-64 bg-mainBg border-none"
              >
                <SheetClose asChild>
                  <button className="absolute top-4 right-4 text-white hover:text-red p-2 rounded-md cursor-pointer transition">
                    <X size={20} />
                  </button>
                </SheetClose>
                <Sidebar onItemClick={() => setOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>

          <Header />
        </div>

        <main className="flex-1 overflow-auto bg-mainBg px-6 pb-6 pt-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
