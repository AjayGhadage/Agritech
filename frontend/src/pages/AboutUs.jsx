import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ajay Ghadage',
      role: 'ML & Backend Developer',
      description: 'Develops backend systems, machine learning processes, handles API integration, performs data preprocessing, trains models and ensures smooth communication with backend.',
      imgPath: './images/ajay.jpeg',
      email: 'mailto:ajayghadage7350@gmail.com',
      linkedin: 'https://www.linkedin.com/in/ajay-ghadage-1a668a28b/',
      github: 'https://github.com/AjayGhadage'
    },
    {
      id: 2,
      name: 'Yashraj Babar',
      role: 'ML & Backend Developer',
      description: 'Works on backend and machine learning processes, performs data preprocessing, trains models, and develops prediction and recommendation logic.',
      imgPath: './images/yash.jpeg',
      email: 'mailto:yashrajbabar777@gmail.com',
      linkedin: 'https://www.linkedin.com/in/yashraj-babar-7a707b2ab/',
      github: 'https://github.com/Babaryashraj'
    },
    {
      id: 3,
      name: 'Avishkar Gunjal',
      role: 'Frontend Developer',
      description: 'Develops frontend interface, designs responsive layouts, and ensures smooth user interaction and system usability.',
      imgPath: './images/avishkar.jpeg',
      email: 'mailto:avishkargunjal07@gmail.com',
      linkedin: 'https://www.linkedin.com/in/avishkar-gunjal/',
      github: 'https://github.com/avigunjal07'
    },
    {
      id: 4,
      name: 'Rohit Gaikwad',
      role: 'Database Engineer',
      description: 'Manages database operations, handles data storage and retrieval, maintains user records and history, and performs dataset preparation and training for model development.',
      imgPath: './images/rohit.jpeg',
      email: 'mailto:rohitgaikwad170306@gmail.com',
      linkedin: 'https://www.linkedin.com/in/rohit-gaikwad-4873942a6/',
      github: 'https://github.com/Rohit172006'
    },
  ];

  const infoCards = [
    {
      id: 1,
      title: 'Our Mission',
      icon: '🎯',
      description: 'To empower farmers with cutting-edge AI technology, making precision agriculture accessible, affordable, and impactful for every farmer, regardless of farm size or location.',
      color: '#1a472a'
    },
    {
      id: 2,
      title: 'Our Vision',
      icon: '👁️',
      description: 'To create a sustainable future where technology and agriculture work in harmony, reducing crop losses, increasing yields, and ensuring food security for generations to come.',
      color: '#2d5a3b'
    },
    {
      id: 3,
      title: 'Project Summary',
      icon: '📊',
      description: 'AgriTech is an AI-powered platform providing crop recommendations, disease detection, market price analysis, weather advisory, and smart logistics solutions to help farmers make data-driven decisions and maximize profitability.',
      color: '#3e6b3e'
    },
  ];

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '2rem 1.5rem 4rem',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      backgroundColor: '#fafef5',
    },
    hero: {
      textAlign: 'center',
      marginBottom: '4rem',
      padding: '3rem 2rem',
      background: 'linear-gradient(135deg, #1a472a 0%, #2d5a3b 100%)',
      borderRadius: '32px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    heroH1: {
      fontSize: '3rem',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '1rem',
      letterSpacing: '-0.5px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    heroP: {
      fontSize: '1.2rem',
      color: '#e8f5e9',
      lineHeight: '1.6',
      fontWeight: '500',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
      margin: '3rem 0 4rem 0',
    },
    infoCard: {
      background: 'white',
      borderRadius: '24px',
      padding: '2rem',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      border: '1px solid #e0e7e0',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      cursor: 'pointer',
    },
    infoCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 30px -12px rgba(26, 71, 42, 0.2)',
      borderColor: '#2d5a3b',
    },
    infoIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    infoTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#1a472a',
      marginBottom: '1rem',
    },
    infoDescription: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: '#4a5b4a',
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#1a472a',
      textAlign: 'center',
      marginBottom: '2rem',
      position: 'relative',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.5rem',
      margin: '3rem 0',
    },
    card: {
      background: 'white',
      borderRadius: '24px',
      padding: '1.5rem',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      border: '1px solid #e0e7e0',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 30px -12px rgba(26, 71, 42, 0.2)',
      borderColor: '#2d5a3b',
    },
    imageWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.2rem',
    },
    profileImage: {
      width: '120px',
      height: '120px',
      objectFit: 'cover',
      borderRadius: '50%',
      border: '4px solid #2d5a3b',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
    },
    memberName: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: '#1a472a',
      marginBottom: '0.5rem',
      letterSpacing: '-0.3px',
    },
    memberRole: {
      fontSize: '0.8rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.8px',
      color: '#2d5a3b',
      background: '#e8f5e9',
      display: 'inline-block',
      padding: '0.25rem 0.8rem',
      borderRadius: '30px',
      marginBottom: '1rem',
      border: '1px solid #c8e6c9',
    },
    memberDesc: {
      fontSize: '0.85rem',
      lineHeight: '1.5',
      color: '#4a5b4a',
      margin: '0.8rem 0 1.2rem',
      textAlign: 'center',
      flex: 1,
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.8rem',
      marginTop: '0.5rem',
    },
    socialIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '38px',
      height: '38px',
      backgroundColor: '#f5f9f5',
      borderRadius: '50%',
      transition: 'all 0.3s ease',
      border: '1px solid #d4e0d4',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    socialIconImg: {
      width: '20px',
      height: '20px',
      objectFit: 'contain',
      transition: 'transform 0.2s ease',
    },
  };

  const [hoveredInfoCard, setHoveredInfoCard] = React.useState(null);
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [currentGridStyle, setCurrentGridStyle] = React.useState(styles.teamGrid);
  const [currentInfoGridStyle, setCurrentInfoGridStyle] = React.useState(styles.infoGrid);

  React.useEffect(() => {
    const handleResize = () => {
      // Responsive for team grid
      if (window.innerWidth <= 768) {
        setCurrentGridStyle({ ...styles.teamGrid, gridTemplateColumns: '1fr' });
      } else if (window.innerWidth <= 1024) {
        setCurrentGridStyle({ ...styles.teamGrid, gridTemplateColumns: 'repeat(2, 1fr)' });
      } else {
        setCurrentGridStyle({ ...styles.teamGrid, gridTemplateColumns: 'repeat(4, 1fr)' });
      }
      
      // Responsive for info grid
      if (window.innerWidth <= 768) {
        setCurrentInfoGridStyle({ ...styles.infoGrid, gridTemplateColumns: '1fr' });
      } else if (window.innerWidth <= 1024) {
        setCurrentInfoGridStyle({ ...styles.infoGrid, gridTemplateColumns: 'repeat(2, 1fr)' });
      } else {
        setCurrentInfoGridStyle({ ...styles.infoGrid, gridTemplateColumns: 'repeat(3, 1fr)' });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroH1}>About Us</h1>
        <p style={styles.heroP}>
          We are a team of passionate technologists and agri-experts
          <br />
          committed to revolutionizing farming with cutting-edge AI.
        </p>
      </div>

      {/* Mission, Vision, Project Summary Cards */}
      <div style={currentInfoGridStyle}>
        {infoCards.map((card, index) => (
          <div 
            key={card.id}
            style={{
              ...styles.infoCard,
              ...(hoveredInfoCard === index ? styles.infoCardHover : {})
            }}
            onMouseEnter={() => setHoveredInfoCard(index)}
            onMouseLeave={() => setHoveredInfoCard(null)}
          >
            <div style={styles.infoIcon}>{card.icon}</div>
            <h3 style={styles.infoTitle}>{card.title}</h3>
            <p style={styles.infoDescription}>{card.description}</p>
          </div>
        ))}
      </div>

      {/* Team Section Title */}
      <h2 style={styles.sectionTitle}>Meet Our Team</h2>

      {/* Team Members Cards */}
      <div style={currentGridStyle}>
        {teamMembers.map((member, index) => (
          <div 
            key={member.id}
            style={{
              ...styles.card,
              ...(hoveredCard === index ? styles.cardHover : {})
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.imageWrapper}>
              <img 
                src={member.imgPath} 
                alt={member.name} 
                style={styles.profileImage}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.borderColor = '#1a472a';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.borderColor = '#2d5a3b';
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/120?text=Profile';
                }}
              />
            </div>
            <h3 style={styles.memberName}>{member.name}</h3>
            <p style={styles.memberRole}>{member.role}</p>
            <p style={styles.memberDesc}>{member.description}</p>
            <div style={styles.socialLinks}>
              <a 
                href={member.email} 
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a472a';
                  e.currentTarget.style.borderColor = '#1a472a';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.filter = 'brightness(0) invert(1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f9f5';
                  e.currentTarget.style.borderColor = '#d4e0d4';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.filter = 'none';
                }}
              >
                <img 
                  src="./images/gmail.png" 
                  alt="Gmail" 
                  style={styles.socialIconImg}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://cdn-icons-png.flaticon.com/512/5968/5968534.png';
                  }}
                />
              </a>
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a472a';
                  e.currentTarget.style.borderColor = '#1a472a';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.filter = 'brightness(0) invert(1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f9f5';
                  e.currentTarget.style.borderColor = '#d4e0d4';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.filter = 'none';
                }}
              >
                <img 
                  src="./images/linkedin.png" 
                  alt="LinkedIn" 
                  style={styles.socialIconImg}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://cdn-icons-png.flaticon.com/512/174/174857.png';
                  }}
                />
              </a>
              <a 
                href={member.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a472a';
                  e.currentTarget.style.borderColor = '#1a472a';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.filter = 'brightness(0) invert(1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f9f5';
                  e.currentTarget.style.borderColor = '#d4e0d4';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.filter = 'none';
                }}
              >
                <img 
                  src="./images/github.png" 
                  alt="GitHub" 
                  style={styles.socialIconImg}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
                  }}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;