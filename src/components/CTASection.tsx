import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, Phone, Clock, CheckCircle } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/258858173685?text=Olá! Gostaria de solicitar um orçamento para criar um site profissional para meu negócio.', '_blank');
  };

  const benefits = [
    "Orçamento gratuito e sem compromisso",
    "Resposta em até 24 horas",
    "Projeto personalizado para seu negócio",
    "Suporte direto e transparente"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Vamos profissionalizar sua empresa
              <span className="text-primary"> hoje?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforme sua presença digital com um site que realmente representa 
              a qualidade do seu negócio e atrai mais clientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-professional-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Por que agir agora?
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-professional-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Como funciona?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                    <span className="text-muted-foreground">Entre em contato via WhatsApp</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                    <span className="text-muted-foreground">Conversamos sobre seu negócio e objetivos</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                    <span className="text-muted-foreground">Receba um orçamento personalizado</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                    <span className="text-muted-foreground">Seu site fica pronto e online</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mb-12">
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-gradient-primary hover:bg-primary-hover text-xl px-12 py-6 shadow-professional-lg hover:shadow-professional-xl transition-all duration-300"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Solicitar Orçamento Gratuito
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Resposta garantida em até 24 horas • Sem compromisso
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-professional-lg">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Outras formas de contato
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium text-foreground mb-2">WhatsApp</h4>
                <p className="text-sm text-muted-foreground">+258 858 173 685</p>
                <p className="text-xs text-muted-foreground">Resposta rápida</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium text-foreground mb-2">E-mail</h4>
                <p className="text-sm text-muted-foreground">business.mz.sites@gmail.com</p>
                <p className="text-xs text-muted-foreground">Para propostas detalhadas</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium text-foreground mb-2">Horário</h4>
                <p className="text-sm text-muted-foreground">Segunda a Sexta</p>
                <p className="text-xs text-muted-foreground">8h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;