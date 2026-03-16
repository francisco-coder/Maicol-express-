/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { 
  Smartphone, 
  Code, 
  Briefcase, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Mail, 
  ArrowRight, 
  Facebook, 
  Instagram, 
  Video,
  MessageSquare,
  ChevronRight,
  Star,
  Quote,
  Send,
  Image as ImageIcon
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="https://i.postimg.cc/8P9Cp56H/1773671672629-removebg-preview-01.jpg" 
            alt="Maicol-Express Logo" 
            className="h-10 w-10 object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
          <span className="font-bold text-xl tracking-tight text-[#746840]">Maicol-Express</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#hero" className="hover:text-[#746840] transition-colors">Início</a>
          <a href="#servicos" className="hover:text-[#746840] transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-[#746840] transition-colors">Sobre</a>
          <a href="#contacto" className="hover:text-[#746840] transition-colors">Contacto</a>
        </div>
        <a 
          href="https://wa.me/244938325192" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#746840] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#5a5132] transition-all"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-[#746840]/10 px-4 py-1.5 rounded-full mb-6"
        >
          <span className="w-2 h-2 bg-[#746840] rounded-full"></span>
          <span className="text-[#746840] text-xs font-semibold uppercase tracking-wider">Premium Tech in Luanda</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight mb-8"
        >
          Maicol-Express: <br />
          <span className="text-[#746840]">O Futuro da Tecnologia</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-slate-600 mb-10"
        >
          Oferecemos soluções eletrónicas de alta performance e consultoria digital especializada em Morro Bento, Luanda.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#servicos" 
            className="bg-[#746840] text-white px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg shadow-[#746840]/20"
          >
            Explorar Serviços
          </a>
          <a 
            href="#contacto" 
            className="px-8 py-4 rounded-full font-semibold border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            Falar com Especialista
          </a>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[#746840]/5 blur-[120px] rounded-full -z-0"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-20 max-w-5xl mx-auto px-6"
      >
        <img 
          alt="High-end Technology" 
          className="rounded-[2.5rem] shadow-2xl border border-slate-200 w-full object-cover" 
          src="https://i.postimg.cc/jScjYXRt/1773671672629.png"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#746840] mb-4">Nossas Soluções</h2>
          <p className="text-slate-600">Excelência e inovação em cada detalhe.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Venda de Eletrónicos */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white/80 backdrop-blur-md border border-white/20 p-10 rounded-[2rem] shadow-sm flex flex-col justify-between group"
          >
            <div className="max-w-md">
              <div className="w-12 h-12 bg-[#746840]/10 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="text-[#746840] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Venda de Eletrónicos</h3>
              <p className="text-slate-600 mb-6">Equipamentos de última geração. iPhones, PCs de Alta Performance e consoles PS5 prontos para entrega imediata.</p>
              <div className="flex flex-wrap gap-2">
                {['Apple', 'Gaming Gear', 'Workstations'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <img 
                alt="Electronics" 
                className="w-48 h-32 object-cover rounded-2xl shadow-lg transform group-hover:rotate-2 transition-transform" 
                src="https://i.postimg.cc/BvR1Lgk2/1773670503164.png"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Soluções Digitais */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-md border border-white/20 p-10 rounded-[2rem] shadow-sm flex flex-col group"
          >
            <div className="w-12 h-12 bg-[#746840]/10 rounded-2xl flex items-center justify-center mb-6">
              <Code className="text-[#746840] w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Soluções Digitais</h3>
            <p className="text-slate-600 mb-8">Presença digital completa: Criação Web moderna e Gestão de Redes Sociais estratégica para o seu negócio.</p>
            <div className="mt-auto">
              <img 
                alt="Web Dev" 
                className="rounded-2xl w-full h-40 object-cover grayscale group-hover:grayscale-0 transition-all" 
                src="https://i.postimg.cc/D0rfzd3b/1773675060458.png"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Corretoria Tech */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="md:col-span-3 bg-white/80 backdrop-blur-md border border-white/20 p-10 rounded-[2rem] shadow-sm flex flex-col md:flex-row items-center gap-8 group"
          >
            <div className="flex-1">
              <div className="w-12 h-12 bg-[#746840]/10 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="text-[#746840] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Corretoria e Soluções Tech</h3>
              <p className="text-slate-600">Consultoria especializada para aquisição de infraestrutura tecnológica e intermediação de negócios de alta complexidade.</p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              <div className="p-6 bg-white rounded-2xl border border-slate-100 text-center">
                <div className="text-3xl font-bold text-[#746840] mb-1">100%</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Segurança</div>
              </div>
              <div className="p-6 bg-[#746840] text-white rounded-2xl text-center">
                <div className="text-3xl font-bold mb-1">Pro</div>
                <div className="text-xs text-white/70 uppercase tracking-widest font-semibold">Consultoria</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-[#746840]/10 rounded-full mb-6"
            >
              <span className="text-[#746840] text-xs font-bold uppercase tracking-widest">Sobre Nós</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">MXS - Soluções Tecnológicas</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A <strong className="text-slate-900">Maicol-Express</strong> (também conhecida como MXS) é uma empresa multi-serviços sediada em Luanda, Angola. Somos especialistas em oferecer soluções tecnológicas integradas que impulsionam o seu estilo de vida e o seu negócio.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Desde o retalho de eletrónicos premium até à corretoria especializada e gestão digital, o nosso compromisso é com a excelência e a satisfação total dos nossos clientes no coração do Morro Bento.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-50 rounded-2xl"><Smartphone className="text-[#746840] w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Hardware</h4>
                  <p className="text-sm text-slate-500">iPhones, PCs & PS5</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-50 rounded-2xl"><Code className="text-[#746840] w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Digital</h4>
                  <p className="text-sm text-slate-500">Web & Redes Sociais</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1"><MapPin className="text-[#746840] w-6 h-6" /></div>
              <div>
                <h4 className="font-bold">Localização</h4>
                <p className="text-slate-500">Morro Bento, Frente ao ENAPP, Luanda - Angola</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square lg:aspect-video bg-slate-200 group">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Frente%20ao%20ENAPP,%20Morro%20Bento,%20Luanda&output=embed"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-[2.5rem]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      role: "Gamer Profissional",
      content: "Excelente atendimento e produtos de alta qualidade. Comprei meu PS5 aqui e a entrega foi super rápida! O suporte pós-venda também é impecável.",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "CEO da TechAngola",
      content: "A consultoria tecnológica da Maicol-Express ajudou minha empresa a modernizar toda a infraestrutura. Profissionais altamente qualificados e atenciosos.",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      role: "Fotógrafo Freelancer",
      content: "O melhor lugar em Luanda para encontrar os últimos iPhones com garantia e segurança. Transparência total em todo o processo de compra.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#746840] mb-4">O que dizem os nossos clientes</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Confiança e satisfação em cada projeto. Veja o feedback de quem já utiliza as nossas soluções.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="relative flex-grow">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#746840]/10 opacity-50 -z-0" />
                <p className="text-slate-600 italic mb-6 relative z-10">"{item.content}"</p>
              </div>
              <div className="mt-auto pt-6 border-t border-slate-50">
                <h4 className="font-bold text-slate-900">{item.name}</h4>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    // Reset form
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-6 mb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Pronto para o Próximo Nível?</h2>
            <p className="text-slate-400 text-lg mb-8">Entre em contacto hoje e descubra como a Maicol-Express pode transformar a sua relação com a tecnologia.</p>
            
            <div className="flex flex-col gap-4 mb-12">
              <a href="tel:+244938325192" className="flex items-center gap-4 text-white hover:text-[#746840] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#746840]/20 transition-all">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">+244 938 325 192</span>
              </a>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">Morro Bento, Luanda</span>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <Clock className="text-[#746840]/40 w-6 h-6" />
                Horário de Funcionamento
              </h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-3 text-slate-400">Segunda - Sexta</td>
                    <td className="py-3 text-right font-medium">08:00 - 17:00</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-slate-400">Sábado</td>
                    <td className="py-3 text-right font-medium">08:00 - 14:00</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-slate-400">Domingo</td>
                    <td className="py-3 text-right font-medium text-red-400">Encerrado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="text-emerald-400 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Mensagem Enviada!</h3>
                <p className="text-slate-400">Agradecemos o seu contacto. Responderemos o mais breve possível.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#746840] font-medium hover:underline mt-4"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="Seu nome aqui"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#746840]/50 transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">E-mail</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="seu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#746840]/50 transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Mensagem</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Como podemos ajudar?"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#746840]/50 transition-all placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#746840] hover:bg-[#5a5132] text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#746840]/20"
                >
                  Enviar Mensagem
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-100 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <img 
              src="https://i.postimg.cc/8P9Cp56H/1773671672629-removebg-preview-01.jpg" 
              alt="Maicol-Express Logo" 
              className="h-8 w-8 object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-lg text-[#746840]">Maicol-Express</span>
          </div>
          <p className="text-sm text-slate-500">© 2023 Maicol-Express. Luanda, Angola.</p>
        </div>
        
        <div className="flex space-x-6">
          {[
            { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/people/Miguel-BV/100088111299053/' },
            { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/maicolxpress.corretoria/' },
            { icon: Video, label: 'TikTok', url: 'https://www.tiktok.com/@maicol.express' }
          ].map((social) => (
            <a 
              key={social.label}
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#746840] hover:text-white transition-all transform hover:-translate-y-1"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/244938325192" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
}
