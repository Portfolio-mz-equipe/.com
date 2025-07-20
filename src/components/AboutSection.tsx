import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Conheça Rakim Pedro e sua equipe
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sou Rakim Pedro, desenvolvedor de sites com foco em empresas locais que desejam se destacar no ambiente digital. Junto com minha equipe especializada, ajudamos negócios como clínicas, cafés, restaurantes e hotéis a conquistarem uma presença online profissional, moderna e confiável.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Cada site que criamos é pensado para representar a identidade do cliente com clareza, elegância e resultado. Nosso compromisso é entregar soluções que realmente funcionam para o seu negócio.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">Projetos entregues com qualidade comprovada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">Especialização em empresas locais</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">Atendimento direto e personalizado</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-subtle rounded-lg p-8 shadow-professional-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Transformar a presença digital de empresas locais através de sites que não apenas impressionam visualmente, mas também geram resultados reais para o negócio.
              </p>
              
              <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-foreground font-medium">
                  "Cada projeto é uma oportunidade de criar algo único que representa verdadeiramente a essência do seu negócio." - Rakim Pedro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;