import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
    return (
        <div className="w-full bg-black h-10 flex items-center justify-end px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4">
                <Link
                    href="https://www.instagram.com/freshlidsau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                >
                    <Image
                        src="/icons/instagram.png"
                        alt="Instagram"
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
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
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                    />
                </Link>
            </div>
        </div>
    );
}
