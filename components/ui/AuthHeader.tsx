"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import UserProfile from "../../app/(screens)/user/user";
import Image from "next/image";
import mainlogo from "@/public/images/homescannerLogo.png";

const AuthHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/places" },
        { name: "Search", href: "/search" },
        { name: "Shortlist", href: "/shortlist" },
        { name: "Connect", href: "/connect" },
    ];

    return (
        <header className="bg-gray-50 text-gray-600 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <Image
                        src={mainlogo}
                        alt="Logo"
                        className="h-10 w-10"
                    />
                </Link>
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`hover:text-blue-500 ${pathname === item.href ? "text-blue-500 font-semibold" : ""}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2">
                        <div className="bg-yellow-300 text-red-500 rounded px-2 py-1">
                            Demo Product
                        </div>
                        <UserProfile />
                    </div>
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="md:hidden mt-2 space-y-2 bg-gray-50 p-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block hover:text-blue-500 ${pathname === item.href ? "text-blue-500 font-semibold" : ""}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default AuthHeader;