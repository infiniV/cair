import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  FlaskRound,
  Lightbulb,
  Users,
  Mail,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
  href: string;
  icon: React.ReactElement<LucideIcon>;
  label: string;
}

export default function MinimalNavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    { href: "#about", icon: <Home className="h-4 w-4 mr-2" />, label: "About" },
    {
      href: "#research",
      icon: <FlaskRound className="h-4 w-4 mr-2" />,
      label: "Research",
    },
    {
      href: "#projects",
      icon: <Lightbulb className="h-4 w-4 mr-2" />,
      label: "Projects",
    },
    {
      href: "#researcher",
      icon: <Users className="h-4 w-4 mr-2" />,
      label: "Team",
    },
    {
      href: "#contact",
      icon: <Mail className="h-4 w-4 mr-2" />,
      label: "Contact",
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between border-b border-neutral-800 h-14 p-5 bg-neutral-950"
    >
      <a href="/" className="text-xl font-bold text-neutral-50">
        <Image
          src="https://ai.bnu.edu.pk/assets/img/logo.png"
          alt="alt"
          width={40}
          height={70}
          className="rounded-sm bg-white p-1"
        />
      </a>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="text-neutral-50">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-neutral-800 border-neutral-700">
          {menuItems.map((item, index) => (
            <DropdownMenuItem key={index} className="focus:bg-neutral-700">
              <Link
                href={item.href}
                className="flex items-center w-full text-neutral-200 hover:text-neutral-50"
              >
                {item.icon}
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.nav>
  );
}
