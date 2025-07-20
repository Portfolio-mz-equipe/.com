import { Mail, MessageCircle, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-primary mb-4">mz.sites</h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Rakim Pedro e sua equipe desenvolvem sites profissionais para negócios locais que desejam 
                se destacar no ambiente digital com qualidade, modernidade e resultados.
              </p>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Moçambique • Atendemos online</span>
              </div>
            </div>
            
            {/* Serviços */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Sites para Hotéis</li>
                <li>Sites para Restaurantes</li>
                <li>Sites para Clínicas</li>
                <li>Sites para Cafés</li>
                <li>Otimização SEO</li>
                <li>Design Responsivo</li>
              </ul>
            </div>
            
            {/* Contato */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">WhatsApp</p>
                    <p className="text-sm text-gray-400">+258 858 173 685</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">E-mail</p>
                    <p className="text-sm text-gray-400">business.mz.sites@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Atendimento</p>
                    <p className="text-sm text-gray-400">Segunda a Sexta, 8h-18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Separador */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                <p>&copy; 2025 mz.sites - Todos os direitos reservados</p>
              </div>
              
              <div className="flex space-x-6 text-gray-400">
                <button 
                  onClick={() => window.open('https://wa.me/258858173685', '_blank')}
                  className="hover:text-primary transition-colors duration-300"
                >
                  WhatsApp
                </button>
                <button 
                  onClick={() => window.open('mailto:business.mz.sites@gmail.com', '_blank')}
                  className="hover:text-primary transition-colors duration-300"
                >
                  E-mail
                </button>
              </div>
            </div>
          </div>
          
          {/* Nota adicional */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Desenvolvemos sites profissionais que realmente funcionam para seu negócio • 
              Atendimento em português • Foco em empresas moçambicanas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;