

import Image from "next/image";
import Link from "next/link"

import logo from '../../../public/logo.png'
import DarkLogo from '../../../public/GREATBRO-ACADEMY-LOGO-white.png';

const Footer = () => {
    return (
        <footer className="   bg-card">
            <div className="max-w-7xl  mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Brand */}

                <div>

                    <Image src={logo} width={100} height={100} alt="logo" className="block dark:hidden" />
                    <Image src={DarkLogo} width={100} height={100} alt="logo" className="hidden dark:block" />
                    <p className="mt-2 text-sm text-muted-foreground dark:text-orange-400">
                        Empowering learners with practical IT skills.
                    </p>
                </div>


                {/* Quick Links */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/courses" className="hover:underline">Courses</Link></li>
                        <li><Link href="/about" className="hover:underline">About</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>

                {/* Courses */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Popular Courses</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/courses/graphic-design" className="hover:underline">Graphic Design</Link></li>
                        <li><Link href="/courses/web-development" className="hover:underline">Web Development</Link></li>
                        <li><Link href="/courses/ui-ux" className="hover:underline">UI/UX Design</Link></li>
                        <li><Link href="/courses/video-editing" className="hover:underline">Video Editing</Link></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Follow Us</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="#" className="hover:underline">Facebook</Link></li>
                        <li><Link href="#" className="hover:underline">YouTube</Link></li>
                        <li><Link href="#" className="hover:underline">LinkedIn</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200  dark:border-orange-600 text-center py-4 text-sm text-muted-foreground dark:text-orange-500">
                © {new Date().getFullYear()} Great Bro Academy. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
