const Footer = () => {
    return (
      <footer className="w-full">
        {/* Section 1 */}
        <div className="w-full h-[30px] bg-[#4135CC]" />
        
        {/* Section 2 */}
        <div className="w-full h-[40px] bg-[#382EAE]" />
        
        {/* Section 3 (main content) */}
        <div className="w-full bg-[#312896] py-8 px-6 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:items-center min-h-[100px]">
                {/* Left side */}
                <div className="mb-6 md:mb-0">
                <h3 className="k2d-bold text-4xl">Tandanlaget</h3>
                <p className="text-white/60 text-1xl">Org. nr 123 456 789</p>
                </div>

                {/* Right side - vertical and centered */}
                <div className="flex flex-col items-end justify-center text-2xl gap-2 text-right">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Instagram
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Facebook
                </a>
                <a href="tel:+4712345678" className="hover:underline">
                    +47 123 45 678
                </a>
                <a href="mailto:kontakt@tandanlaget.no" className="hover:underline">
                    kontakt@tandanlaget.no
                </a>
                </div>
            </div>

            {/* Bottom Center */}
            <div className="mt-10 text-center text-white/50 text-lg">
                2025 © Berglund Web & Design
            </div>
            </div>
      </footer>
    );
  };
  
  export default Footer;