import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-bebas text-3xl text-gold mb-4">
                HUSAIN AL KANDARI
              </h3>
              <p className="font-inter text-sm text-muted-foreground">
                Professional Emirati Boxer<br />
                UAE's Knockout King<br />
                7-0 | 7 KOs | 100% Finish Rate
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bebas text-xl text-foreground mb-4">
                CONNECT
              </h4>
              <div className="space-y-2">
                <a
                  href="https://instagram.com/alkandarii95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="font-inter text-sm">@alkandarii95</span>
                </a>
              </div>
            </div>

            {/* Promotions */}
            <div>
              <h4 className="font-bebas text-xl text-foreground mb-4">
                REPRESENTED BY
              </h4>
              <p className="font-inter text-sm text-muted-foreground">
                Soldier Promotions
              </p>
              <p className="font-inter text-sm text-muted-foreground mt-4">
                For sponsorship & partnership inquiries,<br />
                please contact via Instagram DM
              </p>
            </div>
          </div>

          {/* UAE Flag */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-16 rounded shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 grid-rows-3 h-full">
                <div className="bg-uae-green" />
                <div className="bg-uae-white" />
                <div className="bg-uae-black" />
              </div>
              <div className="absolute left-0 top-0 w-1/3 h-full bg-uae-red" style={{ position: 'relative', marginTop: '-64px' }} />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gold/10 text-center">
            <p className="font-inter text-sm text-muted-foreground">
              © {new Date().getFullYear()} Husain Al Kandari. All rights reserved.
            </p>
            <p className="font-inter text-xs text-muted-foreground mt-2">
              Making history as the first Emirati boxing world champion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
