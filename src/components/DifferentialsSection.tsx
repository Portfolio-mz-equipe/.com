import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Gauge, Heart, Clock, Award } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Target,
      title: "Sem Templates Genéricos",
      description: "Cada site é criado do zero, adaptado especificamente ao seu negócio e identidade visual."
    },
    {
      icon: Award,
      title: "Design Profissional",
      description: "Layout elegante, simples e moderno que transmite confiança e credibilidade aos seus clientes."
    },
    {
      icon: Gauge,
      title: "Carregamento Rápido",
      description: "Otimizado para velocidade, ideal para clientes que acessam pelo celular com conexão limitada."
    },
    {
      icon: Users,
      title: "Foco em Resultados",
      description: "Não apenas aparência bonita, mas sites que realmente ajudam a converter visitantes em clientes."
    },
    {
      icon: Heart,
      title: "Suporte Humano",
      description: "Atendimento direto com Rakim Pedro e sua equipe, com transparência, pontualidade e comunicação clara sempre."
    },
    {
      icon: Clock,
      title: "Entrega Pontual",
      description: "Prazos realistas e cumpridos, para que você possa planejar o lançamento do seu site."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por que escolher o mz.sites?
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nosso diferencial está na combinação de qualidade técnica, design profissional 
              e atendimento personalizado que realmente entende as necessidades do seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((differential, index) => (
              <Card 
                key={index}
                className="group hover:shadow-professional-lg transition-all duration-300 border-0 shadow-professional-sm hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <differential.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {differential.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {differential.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-primary rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Compromisso com a Qualidade
              </h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Trabalhamos com dedicação em cada projeto, porque seu sucesso é o nosso sucesso. 
                Quando seu site funciona bem e atrai clientes, significa que fizemos nosso trabalho da forma correta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;