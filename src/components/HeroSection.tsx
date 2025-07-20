import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, Zap } from "lucide-react";

const HeroSection = () => {
  const handleContactClick = () => {
    window.open('https://wa.me/258858173685?text=Olá! Gostaria de solicitar um orçamento para meu site.', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Sites profissionais para
            <span className="text-primary"> empresas locais</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desenvolvemos sites modernos, rápidos e otimizados para ajudar seu negócio a conquistar mais clientes e transmitir confiança no ambiente digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={handleContactClick}
              className="bg-gradient-primary hover:bg-primary-hover transition-all duration-300 shadow-professional-lg hover:shadow-professional-xl text-lg px-8 py-3"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-3 hover:bg-primary hover:text-white transition-all duration-300"
            >
              Ver Portfólio
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card shadow-professional-sm">
              <Globe className="h-8 w-8 text-primary" />
              <span className="text-foreground font-medium">Design Responsivo</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card shadow-professional-sm">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-foreground font-medium">Carregamento Rápido</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card shadow-professional-sm">
              <Code className="h-8 w-8 text-primary" />
              <span className="text-foreground font-medium">SEO Otimizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;