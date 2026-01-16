"use client";

import { useState } from "react";
import { Link } from "next-transition-router";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md h-8 flex justify-center items-center z-2 lg:top-4 max-lg:top-8 max-lg:w-[calc(100%-4rem)] ${isOpen ? "nav-open" : ""}`}>
            <div className="nav-container absolute top-0 left-0 w-full h-full -z-10">
                <div className="nav-bg w-full h-full bg-(--color-highlight)"></div>
            </div>

            <div
                className="nav-mobile-header hidden max-lg:flex w-full justify-between items-center px-3 cursor-pointer relative h-8 z-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="font-semibold text-(--color-background)">Orbit Matter</p>
                <p className="font-semibold text-(--color-background)">Menu</p>
            </div>

            <div className="nav-overlay relative flex z-1 max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:w-full max-lg:-mt-4 max-lg:z-1">
                <div className="nav-items flex flex-wrap justify-center items-center max-lg:relative max-lg:w-full max-lg:pt-8 max-lg:pb-4 max-lg:flex-col max-lg:z-2">
                    <div className="nav-item max-lg:w-full max-lg:pointer-events-none">
                        <Link href="/" className="block p-2 text-center font-semibold text-(--color-background)">
                            Index
                        </Link>
                    </div>
                    <div className="nav-item max-lg:w-full max-lg:pointer-events-none">
                        <Link href="/observatory" className="block p-2 text-center font-semibold text-(--color-background)">
                            Observatory
                        </Link>
                    </div>
                    <div className="nav-item max-lg:w-full max-lg:pointer-events-none">
                        <Link href="/expedition" className="block p-2 text-center font-semibold text-(--color-background)">
                            Expedition
                        </Link>
                    </div>
                    <div className="nav-item max-lg:w-full max-lg:pointer-events-none">
                        <Link href="/traces" className="block p-2 text-center font-semibold text-(--color-background)">
                            Traces
                        </Link>
                    </div>
                    <div className="nav-item max-lg:w-full max-lg:pointer-events-none">
                        <Link href="/contact" className="block p-2 text-center font-semibold text-(--color-background)">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
