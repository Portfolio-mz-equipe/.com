import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      business: "Café Beira Mar",
      text: "Nosso restaurante finalmente tem um site bonito e funcional. O atendimento foi rápido e direto. Recomendo muito!",
      rating: 5,
      location: "Maputo"
    },
    {
      name: "Dr. João Machado", 
      business: "Clínica Vida Plena",
      text: "O site da minha clínica ficou do jeito que eu queria: leve, confiável e fácil de usar. Obrigado pelo profissionalismo.",
      rating: 5,
      location: "Beira"
    },
    {
      name: "Ana Ferreira",
      business: "Hotel Paraíso Azul", 
      text: "Superou minhas expectativas. O site do hotel está atraindo mais clientes e recebendo elogios. Trabalho de qualidade!",
      rating: 5,
      location: "Nampula"
    },
    {
      name: "Carlos Muianga",
      business: "Restaurante Tradição",
      text: "Site moderno, rápido e que realmente representa nossa marca. O suporte foi excelente do início ao fim.",
      rating: 5,
      location: "Matola"
    },
    {
      name: "Dra. Lucia Cossa",
      business: "Consultório Médico",
      text: "Agora meus pacientes conseguem agendar consultas online facilmente. O site transmite a seriedade que minha profissão exige.",
      rating: 5,
      location: "Xai-Xai"
    },
    {
      name: "Pedro Sitoe",
      business: "Café & Arte",
      text: "O design ficou exatamente como imaginávamos. Site aconchegante que combina perfeitamente com o ambiente do nosso café.",
      rating: 5,
      location: "Maputo"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              O que nossos clientes dizem
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A satisfação dos nossos clientes é o que nos motiva a continuar entregando 
              projetos de qualidade e atendimento excepcional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-professional-md"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star 
                        key={starIndex} 
                        className="h-5 w-5 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                  
                  <div className="relative mb-4">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground leading-relaxed italic pl-6">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-primary font-medium">
                          {testimonial.business}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-primary rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Construindo Relacionamentos de Confiança
              </h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
                Cada depoimento representa não apenas um projeto concluído, mas uma parceria 
                construída com base na confiança, qualidade e resultados reais.
              </p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm opacity-90">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Clientes Satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5★</div>
                  <div className="text-sm opacity-90">Avaliação Média</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;