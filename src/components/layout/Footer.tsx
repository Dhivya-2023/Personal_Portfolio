import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Email', href: 'mailto:dhivya@example.com', icon: Mail },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-display font-bold">
                Dhivya<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="mt-4 text-background/70 max-w-md leading-relaxed">
              Crafting scalable, animated, and performance-driven web applications 
              with modern frontend excellence and full-stack foundations.
            </p>
            <div className="flex gap-4 mt-6">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center transition-all hover:bg-primary hover:border-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/book-meeting"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Book a Meeting
                </Link>
              </li>
              <li>
                <a
                  href="mailto:dhivyanagaraj2720@gmail.com"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  dhivyanagaraj2720@gmail.com
                </a>
              </li>
              <li className="text-background/70">India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Dhivya N. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            Built with React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
