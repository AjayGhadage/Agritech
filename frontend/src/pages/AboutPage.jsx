import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Target, Users, Landmark, Heart, Cpu, Database, Layout, X, Github, Linkedin, Mail } from 'lucide-react';

const TeamMember = ({ name, role, image, bio, icon: Icon, delay, github, linkedin, email, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ y: -5 }}
    onClick={onClick}
    className="relative group bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all border border-[#E9F0EC] overflow-hidden cursor-pointer"
  >
    <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-agri-main/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>

    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden border-[3px] sm:border-4 border-white shadow-xl mb-4 sm:mb-6 group-hover:border-agri-main transition-colors duration-500">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + name + '&background=1D5D30&color=fff'; }}
        />
      </div>

      <div className="bg-agri-light/50 p-2 rounded-xl mb-3 sm:mb-4 group-hover:bg-agri-main group-hover:text-white transition-colors duration-300">
        <Icon size={18} className="text-agri-main group-hover:text-white" />
      </div>

      <h3 className="text-xl sm:text-2xl font-black text-[#1A2E24] mb-1 sm:mb-2">{name}</h3>
      <p className="text-agri-main font-bold text-[10px] sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">{role}</p>
      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-medium line-clamp-3 sm:line-clamp-none">
        {bio}
      </p>

      <div className="flex gap-3">
        <a href={github || "#"} target="_blank" rel="noopener noreferrer" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-agri-main hover:text-white transition-all cursor-pointer" onClick={(e) => e.stopPropagation()}>
          <Github size={12} className="sm:w-[14px]" />
        </a>
        <a href={linkedin || "#"} target="_blank" rel="noopener noreferrer" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-agri-main hover:text-white transition-all cursor-pointer" onClick={(e) => e.stopPropagation()}>
          <Linkedin size={12} className="sm:w-[14px]" />
        </a>
        <a href={email || "#"} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-agri-main hover:text-white transition-all cursor-pointer" onClick={(e) => e.stopPropagation()}>
          <Mail size={12} className="sm:w-[14px]" />
        </a>
      </div>
    </div>
  </motion.div>
);

const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const team = [
    {
      name: "Ajay Ghadage",
      role: "ML & Backend Developer",
      image: "/images/team/ajay.png",
      icon: Cpu,
      bio: "Develops backend systems, machine learning processes, handles API integration, performs data preprocessing, trains models and ensures smooth communication with backend.",
      github: "https://github.com/AjayGhadage",
      linkedin: "https://www.linkedin.com/in/ajay-ghadage-1a668a28b/",
      email: "mailto:ajayghadage7350@gmail.com",
      delay: 0.1
    },
    {
      name: "Yashraj Babar",
      role: "ML & Backend Developer",
      image: "/images/team/yashraj.png",
      icon: Database,
      bio: "Works on backend and machine learning processes, performs data preprocessing, trains models, and develops prediction and recommendation logic.",
      github: "https://github.com/Babaryashraj",
      linkedin: "https://www.linkedin.com/in/yashraj-babar-7a707b2ab/",
      email: "mailto:yashrajbabar777@gmail.com",
      delay: 0.2
    },
    {
      name: "Avishkar Gunjal",
      role: "Frontend Developer",
      image: "/images/team/avishkar.png",
      icon: Layout,
      bio: "Develops frontend interface, designs responsive layouts, and ensures smooth user interaction and system usability.",
      github: "https://github.com/avigunjal07",
      linkedin: "https://www.linkedin.com/in/avishkar-gunjal/",
      email: "mailto:avishkargunjal07@gmail.com",
      delay: 0.3
    },
    {
      name: "Rohit Gaikwad",
      role: "Database Engineer",
      image: "/images/team/rohit.png",
      icon: Landmark,
      bio: "Manages database operations, handles data storage and retrieval, maintains user records and history, and performs dataset preparation and training for model development.",
      github: "https://github.com/Rohit172006",
      linkedin: "https://www.linkedin.com/in/rohit-gaikwad-4873942a6/",
      email: "mailto:rohitgaikwad170306@gmail.com",
      delay: 0.4
    }
  ];

  return (
    <div className="bg-white overflow-hidden relative">
      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-[#1A2E24]/90 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-white rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto md:overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all z-20 shadow-sm"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto overflow-hidden">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-agri-light px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-agri-main font-black text-[10px] sm:text-xs mb-4 sm:mb-6 w-fit uppercase tracking-widest">
                  {selectedMember.role}
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#1A2E24] mb-3 sm:mb-4 leading-none tracking-tight">{selectedMember.name}</h2>
                <p className="text-gray-500 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
                  {selectedMember.bio}
                  <br /><br className="hidden sm:block" />
                  <span className="hidden sm:inline">Dedicated to revolutionizing Indian agriculture through high-performance technology and sustainable innovation.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href={selectedMember.linkedin || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-[2] bg-[#1A2E24] text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black hover:bg-agri-main transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                  >
                    <Linkedin size={18} className="sm:w-5" /> LinkedIn
                  </a>
                  <a 
                    href={selectedMember.email || "#"} 
                    className="flex-[2] bg-agri-main text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black hover:bg-[#1A2E24] transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                  >
                    <Mail size={18} className="sm:w-5" /> Email
                  </a>
                  <a 
                    href={selectedMember.github || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-12 sm:h-16 w-full sm:w-16 shrink-0 bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-[#1A2E24] hover:bg-agri-light hover:text-agri-main transition-all cursor-pointer"
                  >
                    <Github size={20} className="sm:w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-agri-main rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-80 sm:h-80 bg-agri-accent rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 bg-agri-light/50 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border border-agri-main/20 text-agri-main font-bold text-[10px] sm:text-sm mb-6 sm:mb-8 uppercase tracking-widest"
          >
            <Leaf size={14} className="sm:w-4" /> OUR MISSION
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-[#1A2E24] tracking-tighter leading-[1] md:leading-[0.95] mb-6 sm:mb-8"
          >
            Reimagining <span className="text-agri-main">Agriculture</span> <br className="hidden md:block" />
            Through AI Innovation.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-lg md:text-xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed px-2"
          >
            At AgriArya, we bridge the gap between traditional farming wisdom and modern computational science to increase yield and ensure food security.
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-4 text-agri-main"
            >
              <Users size={32} className="sm:w-10 sm:h-10" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A2E24] tracking-tighter leading-tight px-4">The Visionaries Behind <span className="text-agri-main">AgriArya</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[9px] sm:text-xs mt-3 sm:mt-4">Click any member to learn more</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <TeamMember
                key={index}
                {...member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-agri-main/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="relative z-10 px-2 lg:px-0">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A2E24] mb-8 leading-tight tracking-tight"
            >
              More Than Just Software, <br className="hidden sm:block" />
              A <span className="text-agri-main">Farming Revolution.</span>
            </motion.h3>

            <div className="space-y-6 sm:space-y-8">
              {[
                { icon: Heart, title: "Farmer First", desc: "Every line of code we write is aimed at making a difference in the life of a farmer." },
                { icon: Landmark, title: "Data Integrity", desc: "Securing agricultural data with enterprise-grade standards for privacy." },
                { icon: Target, title: "Precision Guided", desc: "Using cutting-edge ML models to provide soil-specific guidance." }
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 sm:gap-6 items-start"
                >
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-lg border border-[#E9F0EC] flex items-center justify-center text-agri-main">
                    <value.icon size={18} className="sm:w-[22px]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#1A2E24] mb-1">{value.title}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            className="relative px-4"
          >
            <div className="absolute inset-0 bg-agri-main rounded-[2rem] sm:rounded-[3rem] blur-xl opacity-10"></div>
            <img src="/images/hero.png" alt="Vision" className="relative rounded-[2rem] sm:rounded-[3rem] shadow-2xl border-4 sm:border-8 border-white" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto bg-[#1A2E24] rounded-[2.5rem] sm:rounded-[4rem] p-10 sm:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-agri-main rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-20"></div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 sm:mb-8 leading-[1.1]">
            Want to Join the <br className="hidden sm:block" /> <span className="text-agri-main">AgriArya Foundation?</span>
          </h2>
          <p className="text-green-100/70 max-w-xl mx-auto mb-10 text-sm sm:text-lg px-4 font-medium leading-relaxed">
            We are always looking for growers, scientists, and engineers to expand our impact across India. Reach out for partnership.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-white text-[#1A2E24] font-black rounded-xl sm:rounded-2xl shadow-xl hover:bg-agri-main hover:text-white transition-all text-base sm:text-lg tracking-tight"
          >
            Get In Touch Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
