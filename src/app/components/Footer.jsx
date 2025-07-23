

import Image from "next/image";
import Link from "next/link"

import logo from '../../../public/logo.png'
import DarkLogo from '../../../public/GREATBRO-ACADEMY-LOGO-white.png';
import { FaVoicemail } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="   bg-card">
            <div className="max-w-7xl  mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                <div>

                    <Image src={logo} width={150} height={150} alt="logo" className="block dark:hidden" />
                    <Image src={DarkLogo} width={150} height={150} alt="logo" className="hidden dark:block" />

                </div>
                {/* Brand */}



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
                        <li><Link href="/courses/graphic-design-course" className="hover:underline">Graphic Design</Link></li>
                        <li><Link href="/courses/web-development-bootcamp" className="hover:underline">Web Development</Link></li>
                        <li><Link href="/courses/ui-ux" className="hover:underline">UI/UX Design</Link></li>
                        <li><Link href="/courses/spoken-english-course" className="hover:underline">Spoken English</Link></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Follow Us</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="https://www.facebook.com/greatbroacademy" target="_blank" className="hover:underline">Facebook</Link></li>
                        <li><Link href="#" className="hover:underline">YouTube</Link></li>
                        <li><Link href="https://www.linkedin.com/company/greatbro-academy" target="_blank" className="hover:underline">LinkedIn</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-md font-semibold mb-2">Contact Us</h3>
                    <ul className="space-y-1 text-sm">
                        <li className="text-bold" >greatbroacademy@gmail.com</li>
                        <hr />
                        <li >8801837429636</li>
                        <hr />
                        <li>Location:
                            <address>
                                House-2/C,Ground Floor, Road-13, <br />
                                (Beside Lotus Kamal Tower) <br />
                                Nikunjo-2,Khilkhet,Dhaka-1229.
                            </address>
                        </li>
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
