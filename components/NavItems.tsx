'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' }, // ✅ fixed
];

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-6"> {/* ⬅ increase gap */}
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(
                        'px-2', // ⬅ optional padding
                        pathname === href && 'text-primary font-semibold'
                    )}
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
};

export default NavItems;
