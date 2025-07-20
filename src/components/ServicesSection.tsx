import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Palette, Search, Shield, Headphones, MapPin } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Design Personalizado",
      description: "Layout moderno criado do zero, adaptado à identidade visual do seu negócio, sem templates genéricos."
    },
    {
      icon: Smartphone,
      title: "Responsivo e Moderno",
      description: "Site que funciona perfeitamente em celular, tablet e computador, garantindo boa experiência em todos os dispositivos."
    },
    {
      icon: Search,
      title: "Otimização SEO",
      description: "Configuração básica para mecanismos de busca, ajudando seu site a ser encontrado pelos clientes no Google."
    },
    {
      icon: Shield,
      title: "Rápido e Seguro",
      description: "Sites com carregamento otimizado e segurança implementada, ideal para clientes que acessam pelo celular."
    },
    {
      icon: Headphones,
      title: "Suporte Direto",
      description: "Atendimento pessoal e direto com Rakim Pedro e sua equipe, sem burocracia ou intermediários, garantindo comunicação clara."
    },
    {
      icon: MapPin,
      title: "Integrações Úteis",
      description: "Google Maps, WhatsApp, Instagram, formulários de contato e sistema de reservas conforme necessário."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              O que você recebe
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desenvolvemos sites personalizados com foco em estética, performance e usabilidade. 
              Cada projeto é pensado para gerar resultados reais para o seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="h-full hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-professional-md"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-card rounded-lg p-8 shadow-professional-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Processo de Desenvolvimento
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                <h4 className="font-semibold text-foreground mb-2">Briefing</h4>
                <p className="text-sm text-muted-foreground">Entendemos seu negócio e objetivos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                <h4 className="font-semibold text-foreground mb-2">Design</h4>
                <p className="text-sm text-muted-foreground">Criamos o layout personalizado</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                <h4 className="font-semibold text-foreground mb-2">Desenvolvimento</h4>
                <p className="text-sm text-muted-foreground">Programamos e otimizamos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                <h4 className="font-semibold text-foreground mb-2">Entrega</h4>
                <p className="text-sm text-muted-foreground">Site online e funcionando</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;