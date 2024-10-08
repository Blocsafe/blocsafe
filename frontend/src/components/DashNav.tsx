import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// import { NavLinks } from "@/lib/data";
// import MemoLogo from "@/icons/Logo";
// import SmileFace from "./Smile";
// import ExtensionCard from "./Cards/ExtensionCard";

const DashHeader = () => {

    const NavLinks = [
        {
            label: "dashboard",
            to: '/'
        },
        {
            label: "history",
            to: '/'
        }
    ]

  return (
    <main>
      <header className="flex justify-end h-14 items-center bg-[#13131373] shadow-xl gap-4 border-b border-b-[#000000] lg:h-[80px]">
        <Sheet>
          <SheetContent side="left" className="flex flex-col bg-[#13131373]">
            <nav className="grid gap-2 text-lg font-medium">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                {/* <MemoLogo className="w-32 h-32" /> */}
              </Link>

              {NavLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-3 font-[400] rounded-lg px-3 py-2 my-3  text-[#FFFFFF] bg-[#FFFBF833]   transition-all hover:text-primary"
                      : "flex items-center gap-3 font-[400] rounded-lg  px-3 py-2  text-[#FFFFFF]  transition-all hover:text-primary"
                  }>
                  {/* <link.icon className="w-5 h-5" /> */}
                  {link.label}
                </NavLink>
              ))}
            </nav>
            {/* <div className="mt-auto">
              <ExtensionCard />
            </div> */}
          </SheetContent>
          <SheetTrigger asChild className="mx-3">
            <Button
              variant="outline"
              size="icon"
              className="shrink-0   md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <div className="w-full">
            <div className="flex items-center rounded-2xl justify-between  bg-[#0B0B0B] text-white p-4 ">
              <div className="sm:flex flex-col hidden items-center">
                {/* Username and days badge */}
                <div className="flex  items-center">
                  
                </div>
                {/* Message */}
                <div className="ml-4 text-sm">
                  
                </div>
              </div>
              <div className="flex items-center sm:space-x-3">
                {/* Icons for connected wallets */}
                <ConnectButton />
                {/* <SmileFace /> */}

                {/* <Button className="bg-transparent hover:bg-transparent border py-5 border-[#7F7F7F] rounded-2xl">
                  connected wallets <MemoTrustWallet className="w-8 h-8" />
                </Button>
                <MemoSmile className="w-12 h-12" /> */}
              </div>
            </div>
          </div>
        </Sheet>
      </header>
    </main>
  );
};

export default DashHeader;
