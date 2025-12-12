import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  {
    label: 'About',
    children: [
      { href: '/about', label: 'Our Story' },
      { href: '/mission', label: 'Mission & Vision' },
      { href: '/recognition', label: 'Recognition & Honors' },
      { href: '/contact', label: 'Contact' }, // Contact added here
    ],
  },
  {
    label: 'Programs & Engagement',
    children: [
      { href: '/programs', label: 'Programs' },
      { href: '/un-engagement', label: 'UN Engagement' },
      { href: '/festival', label: 'Festival' },
    ],
  },
  {
    label: 'Art & Culture',
    children: [
      { href: '/art-for-sdgs', label: 'Art for SDGs' },
      { href: '/world-tour', label: 'World Tour' },
      { href: '/gallery', label: 'Gallery' },
    ],
  },
  { href: '/future', label: 'Future Initiatives' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-sindoor flex items-center justify-center shadow-glow-primary group-hover:scale-110 transition-transform duration-300">
<img 
  src="https://i.imgur.com/4W7jbbM.png" 
  alt="M" 
  className="w-12 h-10 md:w-16 md:h-12"
/>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-playfair font-bold text-base leading-tight text-foreground">
              Mithila Center
            </h1>
            <p className="text-xs text-muted-foreground font-inter tracking-widest uppercase">
              USA
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 relative">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                to={link.href || '#'}
                className={cn(
                  "px-3 py-2 text-sm font-inter flex items-center gap-1 transition-colors",
                  location.pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </Link>

              {link.children && (
                <div
                  className={cn(
                    "absolute top-full left-0 bg-white border border-border rounded-xl shadow-xl py-2 mt-1 min-w-[200px] transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                    openDropdown === link.label ? "opacity-100 visible" : ""
                  )}
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors rounded-lg"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Donate Button Only */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="donate" size="sm" className="gap-2">
            <Link to="/contact">
              <Heart className="w-4 h-4" />
              Donate
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.href || '#'}
                className={cn(
                  "block px-4 py-3 text-base font-inter rounded-lg transition-colors",
                  location.pathname === link.href ? "text-primary bg-primary/10" : "text-black hover:bg-gray-100"
                )}
              >
                {link.label}
              </Link>

              {link.children && (
                <div className="pl-6">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-black"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 border-t border-border mt-2 space-y-2">
            <Button asChild variant="donate" className="w-full gap-2">
              <Link to="/contact">
                <Heart className="w-4 h-4" />
                Donate Now
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
