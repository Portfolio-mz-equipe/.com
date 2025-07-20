import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Hotel Paraíso Azul",
      description: "Site completo para hotel de luxo com sistema de reservas, galeria de fotos e integração com redes sociais. Design elegante que transmite sofisticação e confiança.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Design Responsivo", "SEO", "Sistema de Reservas"],
      githubUrl: "https://github.com/mz-sites/hotel-paraiso-azul",
      category: "Hotelaria"
    },
    {
      title: "Restaurante Sabor & Arte",
      description: "Website para restaurante gourmet com cardápio digital interativo, sistema de pedidos online e integração com delivery. Foco na apresentação visual dos pratos.",
      image: "/placeholder.svg?height=300&width=400", 
      technologies: ["Design Moderno", "Cardápio Digital", "Otimização", "Integração WhatsApp"],
      githubUrl: "https://github.com/mz-sites/restaurante-sabor-arte",
      category: "Gastronomia"
    },
    {
      title: "Clínica Vida Plena",
      description: "Portal médico profissional com agendamento online, perfis de médicos, informações sobre tratamentos e área do paciente. Prioriza confiança e facilidade de uso.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Portal Médico", "Agendamento Online", "Área do Paciente", "SEO Médico"],
      githubUrl: "https://github.com/mz-sites/clinica-vida-plena", 
      category: "Saúde"
    },
    {
      title: "Café Central",
      description: "Site aconchegante para cafeteria local com menu de bebidas, informações sobre grãos especiais e sistema de fidelidade. Design que transmite aconchego e qualidade.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Design Aconchegante", "Menu Interativo", "Localização", "Redes Sociais"],
      githubUrl: "https://github.com/mz-sites/cafe-central",
      category: "Cafeteria"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Projetos que Entregamos
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada projeto representa uma solução única, desenvolvida com atenção aos detalhes 
              e foco nos resultados que nossos clientes precisam alcançar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-professional-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-professional-lg"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                      <span>Código</span>
                    </Button>
                    
                    <Button 
                      size="sm"
                      onClick={() => window.open('https://wa.me/258858173685?text=Olá! Vi o projeto ' + project.title + ' e gostaria de algo similar.', '_blank')}
                      className="flex items-center space-x-2 bg-gradient-primary hover:bg-primary-hover"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Quero Similar</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-card rounded-lg p-8 shadow-professional-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Seu Projeto Pode Ser o Próximo
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Cada um destes projetos começou com uma conversa. Vamos descobrir como podemos 
                criar algo único e eficaz para o seu negócio também.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/258858173685?text=Olá! Vi seus projetos e gostaria de discutir um site para meu negócio.', '_blank')}
                className="bg-gradient-primary hover:bg-primary-hover text-lg px-8 py-3"
              >
                Iniciar Meu Projeto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;