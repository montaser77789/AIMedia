import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Routes } from "../constants/enum";
import logo from "../../../public/images/aii-png.png";
import Image from "next/image";

const Footer = () => {
  // Footer links data
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Social Media", href: Routes.SERVICES },
        { name: "Web Design", href: Routes.SERVICES },
        { name: "Software Solutions", href: Routes.SERVICES },
        { name: "Marketing", href: Routes.SERVICES },
      ],
    },
    {
      title: "Company",
      links: [
        
        { name: "OURWORK", href: Routes.OURWORK },
        { name: "Blog", href: Routes.BLOG },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: Routes.CONTACT },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "#" },
    { icon: Twitter, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: Linkedin, url: "#" },
    { icon: Youtube, url: "#" },
  ];

  return (
    <footer className={`bg-gray-900 text-white pt-16 pb-8 ${"text-left"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold mb-4">AI Media</h2>
              <Image src={logo} alt="AI Media Logo" width={100} height={100} />
            </div>
            <p className="text-gray-400 mb-6">
              Innovative media and marketing company focused on storytelling
              that drives results.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AI Media. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href={Routes.CONTACT}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
