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
                    HOME
                </Link>
                <Link
                    href="/how-it-works"
                    className="text-[#545454] font-bold text-lg hover:opacity-70 transition-opacity"
                >
                    HOW
                </Link>
                <Link
                    href="/why"
                    className="text-[#545454] font-bold text-lg hover:opacity-70 transition-opacity"
                >
                    WHY
                </Link>
                <Link
                    href="/partner"
                    className="text-[#545454] font-bold text-lg hover:opacity-70 transition-opacity"
                >
                    PARTNER
                </Link>
            </nav>

            <div className="flex items-center gap-4 ml-auto mb-2">
                <Link
                    href="https://www.instagram.com/freshlidsau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                >
                    <Image
                        src="/icons/instagram.png"
                        alt="Instagram"
                        width={72}
                        height={72}
                        className="w-18 h-18 object-contain"
                    />
                </Link>
                <Link
                    href="https://www.facebook.com/profile.php?id=61584922152607"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                >
                    <Image
                        src="/icons/facebook.png"
                        alt="Facebook"
                        width={72}
                        height={72}
                        className="w-18 h-18 object-contain"
                    />
                </Link>
            </div>
        </header>
    );
}
