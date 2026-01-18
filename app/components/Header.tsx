import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-white flex items-end gap-12 px-4 sm:px-6 lg:px-8 pt-6 pb-1">
            <Link href="/" className="flex items-center mb-3">
                <Image
                    src="/icons/logo.svg"
                    alt="FreshLids Logo"
                    width={150}
                    height={40}
                    className="h-8 sm:h-10 w-auto object-contain"
                    priority
                />
            </Link>

            <nav className="flex gap-8">
                <Link
                    href="/"
                    className="text-[#545454] font-bold text-lg hover:opacity-70 transition-opacity"
                >
                    Home
                </Link>
                <Link
                    href="/how-it-works"
                    className="text-[#545454] font-bold text-lg hover:opacity-70 transition-opacity"
                >
                    How it works
                </Link>
            </nav>
        </header>
    );
}
