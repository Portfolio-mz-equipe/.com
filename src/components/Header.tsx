import { Button } from "@/components/ui/button";

const Header = () => {
  const handleContactClick = () => {
    window.open('https://wa.me/258858173685?text=Olá! Gostaria de solicitar um orçamento para meu site.', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-primary">mz.sites</h1>
        </div>
        
        <Button 
          onClick={handleContactClick}
          className="bg-gradient-primary hover:bg-primary-hover transition-all duration-300 shadow-professional-md hover:shadow-professional-lg"
        >
          Solicitar Orçamento
        </Button>
      </div>
    </header>
  );
};

export default Header;