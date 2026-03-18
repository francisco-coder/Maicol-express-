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
  Image as ImageIcon,
  ChevronDown,
  ArrowUp,
  Cpu,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';

const TextReveal = ({ text, className = "" }: { text: string, className?: string }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const MagneticButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-[#746840]/20 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#746840] rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />
    </>
  );
};

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img 
            src="https://i.postimg.cc/8P9Cp56H/1773671672629-removebg-preview-01.jpg" 
            alt="Maicol-Express Logo" 
            className="h-10 w-10 object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
          <span className="font-bold text-xl tracking-tight text-[#746840]">Maicol-Express</span>
        </motion.div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          {['Início', 'Serviços', 'Sobre', 'FAQ', 'Contacto'].map((item, i) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase().replace('í', 'i')}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="hover:text-[#746840] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#746840] transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/244938325192" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#746840] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#5a5132] transition-all shadow-md shadow-[#746840]/20"
        >
          WhatsApp
        </motion.a>
      </div>
    </motion.nav>
  );
};

const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { delay, type: 'spring', stiffness: 100 }
    }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    className={`absolute p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 z-20 ${className}`}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 800], [0, 5]);
  const opacityScroll = useTransform(scrollY, [400, 800], [1, 0.5]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Mouse Tracking Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-[#746840]/10 rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{
          x: mousePos.x - 300,
          y: mousePos.y - 300,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30, mass: 2 }}
      />

      {/* Animated Background Blobs */}
      <motion.div 
        style={{ y: y1 }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#746840]/5 blur-[100px] rounded-full -z-10"
      />
      <motion.div 
        style={{ y: y2 }}
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#746840]/5 blur-[120px] rounded-full -z-10"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10 text-center"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center space-x-2 bg-[#746840]/10 px-4 py-1.5 rounded-full mb-6"
        >
          <span className="w-2 h-2 bg-[#746840] rounded-full animate-pulse"></span>
          <span className="text-[#746840] text-xs font-semibold uppercase tracking-wider">Premium Tech in Luanda</span>
        </motion.div>
        
        <div className="flex justify-center mb-8">
          <TextReveal 
            text="Maicol-Express: O Futuro da Tecnologia" 
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight max-w-4xl justify-center"
          />
        </div>
        
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg text-slate-600 mb-10"
        >
          Oferecemos soluções eletrónicas de alta performance e consultoria digital especializada em Luanda-Angola.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MagneticButton>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgb(116 104 64 / 0.2)' }}
              whileTap={{ scale: 0.95 }}
              href="#servicos" 
              className="bg-[#746840] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-[#746840]/20 block"
            >
              Explorar Serviços
            </motion.a>
          </MagneticButton>
          <MagneticButton>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(248, 250, 252, 1)' }}
              whileTap={{ scale: 0.95 }}
              href="#contacto" 
              className="px-8 py-4 rounded-full font-semibold border border-slate-200 hover:bg-slate-50 transition-colors block"
            >
              Falar com Especialista
            </motion.a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ y: y1, rotate, opacity: opacityScroll }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 max-w-5xl mx-auto px-6 relative"
      >
        {/* Floating Elements */}
        <FloatingCard className="-left-4 top-1/4 hidden lg:block" delay={1.2}>
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Cpu className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Performance</p>
              <p className="text-[10px] text-slate-500">Hardware de Elite</p>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard className="-right-8 top-1/2 hidden lg:block" delay={1.4}>
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Velocidade</p>
              <p className="text-[10px] text-slate-500">Entrega Expressa</p>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard className="left-1/4 -bottom-10 hidden lg:block" delay={1.6}>
          <div className="flex items-center space-x-3">
            <div className="bg-amber-100 p-2 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Garantia</p>
              <p className="text-[10px] text-slate-500">Suporte Premium</p>
            </div>
          </div>
        </FloatingCard>

        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-1/4 bottom-0 top-auto"></div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#746840] to-[#b5a67a] rounded-[2.6rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <img 
            alt="High-end Technology" 
            className="relative rounded-[2.5rem] shadow-2xl border border-slate-200 w-full object-cover z-10" 
            src="https://i.postimg.cc/jScjYXRt/1773671672629.png"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <TextReveal text="Nossas Soluções" className="text-4xl font-bold text-[#746840] mb-4" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-600"
          >
            Excelência e inovação em cada detalhe.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Venda de Eletrónicos */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="md:col-span-2 bg-white/80 backdrop-blur-md border border-white/20 p-10 rounded-[2rem] shadow-sm flex flex-col justify-between group cursor-default relative overflow-hidden"
          >
            <motion.div 
              className="absolute top-0 right-0 w-32 h-32 bg-[#746840]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"
            ></motion.div>
            <div className="max-w-md relative z-10">
              <motion.div 
                variants={{
                  hover: { scale: 1.1, rotate: 10, backgroundColor: 'rgba(116, 104, 64, 0.2)' }
                }}
                className="w-12 h-12 bg-[#746840]/10 rounded-2xl flex items-center justify-center mb-6 transition-colors"
              >
                <Smartphone className="text-[#746840] w-6 h-6" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Venda de Eletrónicos</h3>
              <p className="text-slate-600 mb-6">Equipamentos de última geração: iPhone, Samsung e Google pixel, Overboards, Robôs, Playstations e outros prontos para entrega imediata.</p>
              <div className="flex flex-wrap gap-2">
                {['Smartphones', 'Overboards', 'Robôs', 'Playstations'].map((tag) => (
                  <motion.span 
                    key={tag} 
                    whileHover={{ scale: 1.1, backgroundColor: '#746840', color: '#fff' }}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-end relative z-10">
              <motion.img 
                variants={{
                  hover: { rotate: 5, scale: 1.05 }
                }}
                alt="Electronics" 
                className="w-48 h-32 object-cover rounded-2xl shadow-lg transition-all" 
                src="https://i.postimg.cc/BvR1Lgk2/1773670503164.png"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Soluções Digitais */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="bg-white/80 backdrop-blur-md border border-white/20 p-10 rounded-[2rem] shadow-sm flex flex-col group cursor-default relative overflow-hidden"
          >
            <motion.div 
              className="absolute bottom-0 left-0 w-24 h-24 bg-[#746840]/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-700"
            ></motion.div>
            <motion.div 
              variants={{
                hover: { scale: 1.1, rotate: -10, backgroundColor: 'rgba(116, 104, 64, 0.2)' }
              }}
              className="w-12 h-12 bg-[#746840]/10 rounded-2xl flex items-center justify-center mb-6 transition-colors relative z-10"
            >
              <Code className="text-[#746840] w-6 h-6" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Soluções Digitais</h3>
            <p className="text-slate-600 mb-8 relative z-10">Presença digital completa: Criação Web moderna e Gestão de Redes Sociais estratégica para o seu negócio.</p>
            <div className="mt-auto relative z-10">
              <motion.img 
                variants={{
                  hover: { y: -10 }
                }}
                alt="Web Dev" 
                className="rounded-2xl w-full h-40 object-cover grayscale group-hover:grayscale-0 transition-all" 
                src="https://i.postimg.cc/D0rfzd3b/1773675060458.png"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Corretoria Tech */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="md:col-span-3 bg-white/80 backdrop-blur-md border border-white/20 p-10 rounded-[2rem] shadow-sm flex flex-col md:flex-row items-center gap-8 group cursor-default relative overflow-hidden"
          >
            <div className="flex-1 relative z-10">
              <motion.div 
                variants={{
                  hover: { scale: 1.1, y: -2, backgroundColor: 'rgba(116, 104, 64, 0.2)' }
                }}
                className="w-12 h-12 bg-[#746840]/10 rounded-2xl flex items-center justify-center mb-6 transition-colors"
              >
                <Briefcase className="text-[#746840] w-6 h-6" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Corretoria e Soluções Tech</h3>
              <p className="text-slate-600">Consultoria especializada para aquisição de infraestrutura tecnológica e intermediação de negócios de alta complexidade.</p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 w-full relative z-10">
              <motion.div 
                whileHover={{ y: -5, backgroundColor: '#f8fafc' }}
                className="p-6 bg-white rounded-2xl border border-slate-100 text-center transition-colors"
              >
                <motion.div 
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl font-bold text-[#746840] mb-1"
                >100%</motion.div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Segurança</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5, backgroundColor: '#5a5132' }}
                className="p-6 bg-[#746840] text-white rounded-2xl text-center transition-colors"
              >
                <div className="text-3xl font-bold mb-1">Pro</div>
                <div className="text-xs text-white/70 uppercase tracking-widest font-semibold">Consultoria</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            className="lg:w-1/2"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-[#746840]/10 rounded-full mb-6"
            >
              <span className="text-[#746840] text-xs font-bold uppercase tracking-widest">Sobre Nós</span>
            </motion.div>
            <TextReveal text="MXS - Soluções Tecnológicas" className="text-4xl font-bold text-slate-900 mb-6" />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 mb-6 leading-relaxed"
            >
              A <strong className="text-slate-900">Maicol-Express</strong> (também conhecida como MXS) é uma empresa multi-serviços sediada em Luanda, Angola. Somos especialistas em oferecer soluções tecnológicas integradas que impulsionam o seu estilo de vida e o seu negócio.
            </motion.p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Desde o retalho de eletrónicos premium até à corretoria especializada e gestão digital, o nosso compromisso é com a excelência e a satisfação total dos nossos clientes no coração do Morro Bento.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Smartphone, title: 'Hardware', desc: 'iPhone, Samsung, Pixel, PS5 & Robôs' },
                { icon: Code, title: 'Digital', desc: 'Web & Redes Sociais' }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-slate-50 rounded-2xl"><item.icon className="text-[#746840] w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start space-x-4"
            >
              <div className="mt-1"><MapPin className="text-[#746840] w-6 h-6 animate-bounce" /></div>
              <div>
                <h4 className="font-bold">Localização</h4>
                <p className="text-slate-500">Morro Bento, Frente ao ENAPP, Luanda - Angola</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.9458250637313!2d13.185346299999999!3d-8.884629199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f5e3909ca9d3%3A0x4ebc1346e83afd95!2sMaicol-Express!5e0!3m2!1spt-PT!2sao!4v1773864698472!5m2!1spt-PT!2sao"
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
    <section id="depoimentos" className="py-24 bg-slate-50 overflow-hidden">
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
              initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col h-full transition-shadow hover:shadow-xl"
            >
              <div className="flex mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </motion.div>
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
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-6 mb-12 overflow-hidden relative">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#746840]/10 blur-[120px] rounded-full -z-0"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-[#746840]/5 blur-[100px] rounded-full -z-0"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-[#746840]/20 rounded-full mb-6 border border-[#746840]/30"
            >
              <span className="text-[#746840] text-xs font-bold uppercase tracking-widest">Contactos</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Vamos Conversar?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Estamos prontos para elevar a sua tecnologia. Entre em contacto pelos nossos canais oficiais ou visite-nos no Morro Bento.
            </p>
            
            <div className="flex flex-col gap-6 mb-12">
              {[
                { icon: Smartphone, label: 'Telefone', value: '+244 938 325 192', href: 'tel:+244938325192', color: 'hover:text-[#746840]', bg: 'group-hover:bg-[#746840]/20', border: 'group-hover:border-[#746840]/30' },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Atendimento Imediato', href: 'https://wa.me/244938325192', color: 'hover:text-[#25D366]', bg: 'group-hover:bg-[#25D366]/20', border: 'group-hover:border-[#25D366]/30' },
                { icon: MapPin, label: 'Localização', value: 'Morro Bento, Luanda', href: null }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? "_blank" : undefined} rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined} className={`flex items-center gap-5 text-white ${item.color} transition-all group`}>
                      <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${item.bg} border border-white/10 ${item.border} transition-all`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">{item.label}</p>
                        <span className="text-xl font-medium">{item.value}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-5 text-white">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">{item.label}</p>
                        <span className="text-xl font-medium">{item.value}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <Clock className="text-[#746840] w-6 h-6" />
                Horário de Atendimento
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-slate-400">Segunda - Sexta</span>
                  <span className="font-medium">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-slate-400">Sábado</span>
                  <span className="font-medium">08:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Domingo</span>
                  <span className="font-medium text-red-400">Encerrado</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            className="bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4"
                  >
                    <MessageSquare className="text-emerald-400 w-8 h-8" />
                  </motion.div>
                  <h3 className="text-2xl font-bold">Mensagem Enviada!</h3>
                  <p className="text-slate-400">Agradecemos o seu contacto. Responderemos o mais breve possível.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#746840] font-medium hover:underline mt-4"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Nome Completo</label>
                    <motion.input 
                      whileFocus={{ scale: 1.01 }}
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
                    <motion.input 
                      whileFocus={{ scale: 1.01 }}
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
                    <motion.textarea 
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      placeholder="Como podemos ajudar?"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#746840]/50 transition-all placeholder:text-slate-600 resize-none"
                    ></motion.textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-[#746840] hover:bg-[#5a5132] text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#746840]/20"
                  >
                    Enviar Mensagem
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quais são os principais produtos eletrónicos que vendem?",
      answer: "Comercializamos uma vasta gama de produtos premium, incluindo iPhone, Samsung e Google pixel, Overboards, Robôs, Playstations e muito mais, todos com garantia de qualidade."
    },
    {
      question: "Onde está localizada a loja física da Maicol-Express?",
      answer: "Estamos localizados no Morro Bento, em Luanda, mesmo em frente ao ENAPP. Pode visitar-nos de Segunda a Sexta (08:00 - 17:00) e aos Sábados (08:00 - 14:00)."
    },
    {
      question: "Como funcionam os vossos serviços de Soluções Digitais?",
      answer: "Oferecemos criação e gestão de websites modernos, bem como gestão estratégica de redes sociais para elevar a presença digital e a autoridade do seu negócio no mercado."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TextReveal text="Dúvidas Frequentes" className="text-4xl font-bold text-slate-900 mb-4 justify-center" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-600"
          >
            Encontre respostas rápidas para as perguntas mais comuns.
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-slate-100 rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-[#746840] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <motion.div 
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 border-t border-slate-100 pt-12 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="cursor-default"
        >
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
        </motion.div>
        
        <div className="flex space-x-6">
          {[
            { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/people/Miguel-BV/100088111299053/' },
            { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/maicolxpress.corretoria/' },
            { icon: Video, label: 'TikTok', url: 'https://www.tiktok.com/@maicol.express' }
          ].map((social, i) => (
            <motion.a 
              key={social.label}
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 10, delay: i * 0.1 }}
              whileHover={{ y: -5, backgroundColor: '#746840', color: '#fff' }}
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-all"
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden scroll-smooth selection:bg-[#746840] selection:text-white">
      <CustomCursor />
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#746840] z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Buttons Container */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              className="relative group"
            >
              {/* Progress Ring */}
              <svg className="absolute -inset-1 w-14 h-14 -rotate-90 pointer-events-none">
                <motion.circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  className="text-[#746840]/20"
                />
                <motion.circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="150.796"
                  style={{ pathLength: scrollYProgress }}
                  className="text-[#746840]"
                />
              </svg>
              
              <button
                onClick={scrollToTop}
                className="bg-white text-[#746840] w-12 h-12 rounded-full shadow-2xl border border-slate-100 flex items-center justify-center hover:bg-slate-50 hover:scale-110 active:scale-95 transition-all relative z-10"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Button */}
        <MagneticButton>
          <motion.a 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            href="https://wa.me/244938325192" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
          >
            <MessageSquare className="w-5 h-5" />
          </motion.a>
        </MagneticButton>
      </div>
    </div>
  );
}
