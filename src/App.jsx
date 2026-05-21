import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Portfolio = () => {
  // --- States ---
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Skills Data (Updated with percentages for UI) ---
  const skills = [
    { name: 'HTML/CSS', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'React / React Native', level: '85%' },
    { name: 'Tailwind CSS', level: '90%' },
    { name: 'Java', level: '80%' },
    { name: 'Python', level: '85%' },
    { name: 'Figma (UI/UX)', level: '95%' },
    { name: 'Adobe Photoshop', level: '85%' },
    { name: 'Digital Art', level: '80%' },
    { name: 'Problem-Solving', level: '90%' }
  ];

  // --- Projects Data (Oyage Original Data) ---
  const projects = [
    {
      id: 1,
      title: "UniMaps",
      type: "Android Application",
      description: "A comprehensive campus navigation Android application using real-time location tracking.",
      tech: "Java, Google Maps API, Firebase",
      image: "/unimaps.png",
      link: "https://github.com/JeewanthaJay/UniMaps-Android-App"
    },
    {
      id: 2,
      title: "voteX App and Web (Group Project)",
      type: "Full-Stack App and Web Application",
      description: "Secure online voting system with separate dashboards for voters and admins.",
      tech: "Java, MySQL, React Native, React",
      image: "/votex-ui.png",
      link: "https://github.com/Voteapp-Project"
    },
    {
      id: 3,
      title: "CampusMatrix App (Group Project)",
      type: "Utility App",
      description: "Student productivity tool featuring a study planner, flashcards, and library manager.",
      tech: "React Native, SQLite",
      image: "/matrix-app.jpg",
      link: "https://github.com/CampusMatrix-Org"
    },
    {
      id: 4,
      title: "3D Model Web App",
      type: "Web Application",
      description: "Interactive browser-based platform for viewing and manipulating 3D models.",
      tech: "React, Three.js",
      image: "/3d-web.jpg",
      link: "https://github.com/JeewanthaJay/ferrari-3d-experience"
    },
    {
      id: 5,
      title: "RailPass (UI Design)",
      type: "Figma UI Set",
      description: "Modern UI/UX design for a railway ticketing system with seamless booking flow.",
      tech: "Figma, UI/UX Design",
      image: "/railpass-ui.jpg",
      link: "https://www.figma.com/design/dkjHDYyFmbyxELUg99iDwF/RailPass?node-id=0-1&p=f&t=kaVqrpJBOgiVUYtK-0"
    },
    {
      id: 6,
      title: "voteX (UI Design) (Group Project)",
      type: "Figma UI Set",
      description: "Comprehensive UI kit for the voteX platform, focusing on user-friendly election interfaces.",
      tech: "Figma, UI/UX Design",
      image: "/votex-ui.png",
      link: "https://www.figma.com/design/Tr3mp0Ha2y6UoLGx4hyL1b/voting-app?node-id=0-1&p=f&t=WGtMUmQwuZmxdCrG-0"
    },
    {
      id: 7,
      title: "CampusMatrix (UI Design)",
      type: "Figma UI Set",
      description: "Visual design system for the CampusMatrix ecosystem, emphasizing clean typography.",
      tech: "Figma, UI/UX Design",
      image: "/matrix-app.jpg",
      link: "https://www.figma.com/design/A5DapMRp0HQt3XrhvqBGLJ/CM-UIs?node-id=0-1&p=f&t=soEjGagXknEOA83K-0"
    },
    {
    id: 8,
    title: "ASTRO Web",
    type: "Animated Web Application",
    description: "A highly interactive, single-page scrolling animated website with smooth transitions and modern aesthetics.",
    tech: "React, Framer Motion, Tailwind CSS", 
    image: "/astro.jpg", 
    link: "https://github.com/JeewanthaJay/Astro-Web" 
    }
  ];

  // --- Email Send Function (Oyage Keys) ---
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_n32zrqe', 'template_bi7hu2l', e.target, 'kMo0Y04gGjiunVGBZ')
    .then(() => {
        alert("Message Sent Successfully!");
        e.target.reset(); 
    }, () => {
        alert("Something went wrong. Please try again!");
    });
  };

  // --- Social Links (Oyage Links) ---
  const socialLinks = [
    { name: 'FACEBOOK', url: 'https://web.facebook.com/jeewantha.jayawardana.5/' },
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/__.dr.doom.__?igsh=MWdnM285cTk5aGI1MQ%3D%3D&utm_source=qr' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/jeewantha-jayawardhana-2b0131383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'GITHUB', url: 'https://github.com/JeewanthaJay' }
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      
      {/* Navbar (Fixed Mobile Menu) */}
      <nav className="fixed w-full top-0 z-[100] bg-black/95 backdrop-blur-sm border-b border-yellow-500">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-yellow-400 tracking-tighter z-50">JEEWANTHA.</h1>
          
          <ul className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest z-50">
            {['home', 'skills', 'projects', 'artworks', 'contact'].map(item => (
              <li key={item}><a href={`#${item}`} className="hover:text-yellow-400 transition">{item}</a></li>
            ))}
          </ul>

          <button className="md:hidden text-yellow-400 z-[110]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black z-[105] flex flex-col items-center justify-center space-y-8 text-2xl font-black transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          {['home', 'skills', 'projects', 'artworks', 'contact'].map(item => (
            <a key={item} href={`#${item}`} onClick={closeMobileMenu} className="uppercase text-yellow-400 hover:text-white transition tracking-widest">{item}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-12">
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none">
            CREATIVE <br/> <span className="text-yellow-400">DEVELOPER</span>
          </h2>
          <p className="text-gray-400 max-w-lg text-lg mb-10 mx-auto md:mx-0">
            Software Engineering Undergrad & Graphic Designer based in Sri Lanka. I bridge the gap between code and design.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#contact" className="px-10 py-4 bg-yellow-400 text-black font-black rounded-full hover:scale-105 transition shadow-lg shadow-yellow-400/20 text-sm md:text-base">HIRE ME</a>
            <a href="/Jeewantha_CV.pdf" download="Jeewantha_Jayawardhana_CV.pdf" className="px-10 py-4 border-2 border-yellow-400 text-yellow-400 font-black rounded-full hover:bg-yellow-400 hover:text-black transition text-sm md:text-base">
              RESUME
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center order-1 md:order-2">
          <div className="w-64 h-64 md:w-[450px] md:h-[450px] rounded-3xl border-2 border-yellow-400/30 overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
            <img src="/profile.jpeg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Jeewantha" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-zinc-900 px-6 border-t border-b border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-black text-yellow-400 mb-16 text-center uppercase tracking-widest">My Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span>{skill.name}</span>
                  <span className="text-yellow-400">{skill.level}</span>
                </div>
                <div className="h-2 bg-black rounded-full overflow-hidden border border-zinc-800">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-black px-6">
        <h3 className="text-3xl font-black text-yellow-400 mb-16 text-center uppercase tracking-tighter">Featured Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((p) => (
            <div key={p.id} onClick={() => setSelectedProject(p)} className="bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-yellow-400 transition-all duration-500 group flex flex-col">
               <div className="aspect-video overflow-hidden bg-black border-b border-zinc-800">
                  <img src={p.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition duration-700" alt={p.title} />
               </div>
               <div className="p-8 flex-grow flex flex-col">
                 <p className="text-yellow-400 text-[10px] font-bold uppercase mb-3 tracking-widest">{p.type}</p>
                 <h4 className="text-xl font-black mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">{p.title}</h4>
                 <p className="text-zinc-500 text-sm line-clamp-2 mb-6 flex-grow">{p.description}</p>
                 <button className="text-yellow-400 font-bold flex items-center gap-2 text-xs tracking-widest uppercase group-hover:gap-4 transition-all mt-auto">
                   Details <span>&rarr;</span>
                 </button>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artworks Section */}
      <section id="artworks" className="py-24 px-6 bg-zinc-900">
        <h3 className="text-3xl font-black text-yellow-400 mb-4 text-center uppercase tracking-tighter">Digital Artworks</h3>
        <p className="text-center text-gray-500 mb-16 text-sm">Click on any artwork to view it in full screen</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
           {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
             <div key={item} onClick={() => setSelectedArtwork(item)} className="aspect-[3/4] bg-black rounded-2xl overflow-hidden cursor-pointer group border border-zinc-800">
                <img src={`/artwork-${item}.jpeg`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" alt={`Artwork ${item}`} />
             </div>
           ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-black text-yellow-400 mb-6 uppercase tracking-tighter">Let's Talk</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Ready to start your next project or have questions? Send me a message and I'll get back to you within 24 hours.
            </p>
            <div className="space-y-6 mb-12">
              <p className="text-white font-bold"><span className="text-yellow-400 uppercase text-xs block mb-1">Email Me</span> jayawardhanajeewantha@gmail.com</p>
              <div className="flex flex-wrap gap-4 pt-4">
                {socialLinks.map(social => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest border border-zinc-700 px-5 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 p-8 md:p-10 rounded-[40px] border border-zinc-800 shadow-2xl">
            <form className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label className="block text-xs font-bold text-yellow-400 uppercase mb-2">Your Name</label>
                <input name="from_name" type="text" required className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-yellow-400 transition" placeholder="Name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-yellow-400 uppercase mb-2">Email Address</label>
                <input name="from_email" type="email" required className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-yellow-400 transition" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-yellow-400 uppercase mb-2">Message</label>
                <textarea name="message" rows="4" required className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-yellow-400 transition resize-none" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-400 text-black font-extrabold py-4 rounded-xl hover:bg-yellow-300 transition-all uppercase tracking-widest">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 text-center border-t border-zinc-900">
        <p className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase">© 2026 Jeewantha Jayawardhana • All Rights Reserved</p>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[150] bg-black/98 flex items-center justify-center p-4 md:p-8 backdrop-blur-xl" onClick={() => setSelectedProject(null)}>
          <div className="bg-zinc-900 border border-yellow-400/30 p-6 md:p-10 rounded-[32px] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in duration-300 shadow-2xl" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 md:top-6 md:right-6 text-yellow-400 text-4xl bg-black w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-zinc-800 z-10 hover:scale-110 transition-transform" onClick={() => setSelectedProject(null)}>&times;</button>
            
            <div className="aspect-video bg-black rounded-2xl mb-6 md:mb-8 overflow-hidden border border-zinc-800 relative">
               <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.title} />
            </div>
            
            <h4 className="text-2xl md:text-4xl font-black text-yellow-400 mb-4">{selectedProject.title}</h4>
            <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">{selectedProject.description}</p>
            
            <div className="mb-8 p-5 bg-black rounded-2xl border border-zinc-800">
              <p className="text-yellow-400 text-[10px] font-black uppercase tracking-widest mb-2">Technologies Used</p>
              <p className="text-gray-400 text-sm font-medium">{selectedProject.tech}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-yellow-400 text-black text-center py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-yellow-300 transition-all">
                {selectedProject.type.includes("Figma") ? "Open Figma Design" : "View Source Code"}
              </a>
              <button onClick={() => setSelectedProject(null)} className="flex-1 border border-zinc-700 text-zinc-400 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-zinc-800 transition-all">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Artwork Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-[150] bg-black/98 flex items-center justify-center p-4 backdrop-blur-xl" onClick={() => setSelectedArtwork(null)}>
           <button className="absolute top-6 right-6 text-yellow-400 text-5xl hover:scale-110 transition-transform z-10" onClick={() => setSelectedArtwork(null)}>&times;</button>
          <img src={`/artwork-${selectedArtwork}.jpeg`} className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl border border-zinc-800" alt="Artwork Full View" />
        </div>
      )}
    </div>
  );
};

export default Portfolio;