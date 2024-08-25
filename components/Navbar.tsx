'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "@/public/logo/logo.png"
import Image from "next/image";
export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector("#topnav");
            if (navbar) {
                if (window.scrollY > 100) {
                    navbar.classList.add("nav-sticky");
                } else {
                    navbar.classList.remove("nav-sticky");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div id="topnav" className="">
            <nav className="relative py-5  container flex items-center justify-between">
                <div className="flex items-center ">
                    <Link
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center mr-8"
                    >
                        <Image src={logo} alt="" width={100} height={80} />
                        {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Logo
                        </span> */}
                    </Link>
                    {/* <ul className="items-center hidden md:flex  space-x-8 lg:flex">
                        <li>
                            <Link
                                href="/projects"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Services
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact-me"
                                aria-label="About us"
                                title="About us"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Contact Me
                            </Link>
                        </li>
                    </ul> */}
                </div>
                <ul className="flex items-center space-x-8 lg:flex">
                    <li>
                        <Link href="/resume/Resume_Kuldip_Kumar.pdf" target="_blank" download="Kuldip_Kumar_Resume" className="inline-block bg-custom-gradient text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition">
                            Hire me
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
};
