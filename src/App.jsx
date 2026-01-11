import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Mail, Award, Users, Cpu, Image, Trophy, Info } from 'lucide-react';

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const sections = [
    { id: 'home', name: 'Главная', icon: Info },
    { id: 'about', name: 'О команде', icon: Users },
    { id: 'team', name: 'Команда', icon: Users },
    { id: 'robot', name: 'Робот', icon: Cpu },
    { id: 'achievements', name: 'Достижения', icon: Trophy },
    { id: 'gallery', name: 'Галерея', icon: Image },
    { id: 'sponsors', name: 'Спонсоры', icon: Award },
    { id: 'contact', name: 'Контакты', icon: Mail }
  ];

  const teamMembers = [
    { name: 'Дамир', role: 'Капитан команды' },
    { name: 'Елхан', role: 'Программист 1' },
    { name: 'Иван', role: 'Программист 2'},
    { name: 'Жан', role: 'Программист 3'}
    { name: 'Тимур', role: 'Инженер' },
    { name: 'Наби', role: 'Инженер'},
    { name: 'Малика', role: 'Дизайнер' },
    { name: 'Алишер', role: 'Оператор-Робота' },
    
  ];

  const mentors = [
    { name: 'Ерасыл', role: 'Главный ментор' },
  ];

  const achievements = [
    { year: '2024', event: 'Региональный чемпионат FTC', award: 'Финалисты' },
    { year: '2024', event: 'Квалификационный турнир', award: '1 место - Inspire Award' },
    { year: '2023', event: 'Межрегиональный турнир', award: 'Think Award' },
    { year: '2023', event: 'Местный турнир', award: 'Design Award' }
  ];

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      <header className="header">
        <div className="container">
          <div className="logo">
            OZGE
          </div>
          <nav className="desktop-nav">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
                aria-label={`Navigate to ${section.name}`}
              >
                {section.name}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="theme-button"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
          <div className="mobile-controls">
            <button
              onClick={toggleTheme}
              className="theme-button"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-button"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mobile-nav">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsMenuOpen(false);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`mobile-nav-button ${activeSection === section.id ? 'active' : ''}`}
                aria-label={`Navigate to ${section.name}`}
              >
                {section.name}
              </button>
            ))}
          </nav>
        )}
      </header>
      <main className="main">
        <div className="container">
          {/* Home Section */}
          {activeSection === 'home' && (
            <section id="home" className="section">
              <div className="text-center mb-3">
                <h1 className="font-large mb-1 font-weight-600">
                  OZGE
                </h1>
                <p className="font-medium color-light mb-0-5">
                  FTC Team #XXXXX
                </p>
                <p className="font-medium color-light max-width-600 line-height-1-6">
                  Команда робототехники из Астаны, участвующая в международных соревнованиях FIRST Tech Challenge
                </p>
              </div>
              <div className="grid mb-3">
                {[
                  { title: 'Инновации', desc: 'Разработка передовых технических решений' },
                  { title: 'Команда', desc: 'Сплочённая группа энтузиастов робототехники' },
                  { title: 'FIRST Values', desc: 'Gracious Professionalism и Coopertition' }
                ].map((item, i) => (
                  <div key={i} className="card">
                    <h3 className="font-medium mb-0-75 font-weight-600">
                      {item.title}
                    </h3>
                    <p className="color-light line-height-1-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {/* About Section */}
          {activeSection === 'about' && (
            <section id="about" className="section">
              <h2 className="font-large mb-2 font-weight-600">О команде</h2>
              <div className="card mb-2">
                <h3 className="font-medium mb-1 font-weight-600">Наша миссия</h3>
                <p className="color-light line-height-1-8 mb-1">
                  Команда OZGE стремится развивать инженерное мышление, навыки программирования и командную работу через участие в соревнованиях FIRST Tech Challenge. Мы верим в силу STEM-образования и хотим вдохновить следующее поколение инженеров и учёных.
                </p>
                <p className="color-light line-height-1-8">
                  Наша команда придерживается ценностей FIRST: Gracious Professionalism — уважительное отношение к соперникам, и Coopertition — сотрудничество даже в условиях конкуренции.
                </p>
              </div>
              <div className="card">
                <h3 className="font-medium mb-1 font-weight-600">История команды</h3>
                <p className="color-light line-height-1-8">
                  Команда OZGE была основана в 2022 году группой студентов из Астаны, увлечённых робототехникой и инженерией. За годы работы мы прошли путь от новичков до постоянных участников региональных и национальных чемпионатов FTC, получив признание за наши технические решения и командную работу.
                </p>
              </div>
            </section>
          )}
          {/* Team Section */}
          {activeSection === 'team' && (
            <section id="team" className="section">
              <h2 className="font-large mb-2 font-weight-600">Наша команда</h2>
              <h3 className="font-medium mb-1-5 font-weight-600">Участники</h3>
              <div className="team-grid mb-3">
                {teamMembers.map((member, i) => (
                  <div key={i} className="card">
                    <h4 className="font-small mb-0-5 font-weight-600">
                      {member.name}
                    </h4>
                    <p className="color-light">{member.role}</p>
                  </div>
                ))}
              </div>
              <h3 className="font-medium mb-1-5 font-weight-600">Менторы</h3>
              <div className="team-grid">
                {mentors.map((mentor, i) => (
                  <div key={i} className="card">
                    <h4 className="font-small mb-0-5 font-weight-600">
                      {mentor.name}
                    </h4>
                    <p className="color-light">{mentor.role}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {/* Robot Section */}
          {activeSection === 'robot' && (
            <section id="robot" className="section">
              <h2 className="font-large mb-2 font-weight-600">Наш робот</h2>
              <div className="card mb-2">
                <h3 className="font-medium mb-1 font-weight-600">Сезон 2024-2025</h3>
                <p className="color-light line-height-1-8 mb-1-5">
                  Наш робот разработан для выполнения задач текущего сезона FTC. Мы использовали инновационные подходы в проектировании шасси, системы захвата и автономного управления.
                </p>
                <div className="grid-small">
                  <div>
                    <h4 className="font-small mb-0-5 font-weight-600">Шасси</h4>
                    <p className="color-light line-height-1-6">
                      Mecanum-колёса для omnidirectional движения
                    </p>
                  </div>
                  <div>
                    <h4 className="font-small mb-0-5 font-weight-600">Манипулятор</h4>
                    <p className="color-light line-height-1-6">
                      Двухстепенный захват с сервоприводами
                    </p>
                  </div>
                  <div>
                    <h4 className="font-small mb-0-5 font-weight-600">Программирование</h4>
                    <p className="color-light line-height-1-6">
                      Java на базе FTC SDK с компьютерным зрением
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
          {/* Achievements Section */}
          {activeSection === 'achievements' && (
            <section id="achievements" className="section">
              <h2 className="font-large mb-2 font-weight-600">Достижения</h2>
              <div className="achievement-list">
                {achievements.map((achievement, i) => (
                  <div key={i} className="achievement-item">
                    <div className="achievement-year">
                      {achievement.year}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-small mb-0-25 font-weight-600">
                        {achievement.event}
                      </h4>
                      <p className="color-light">{achievement.award}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          {/* Gallery Section */}
          {activeSection === 'gallery' && (
            <section id="gallery" className="section">
              <h2 className="font-large mb-2 font-weight-600">Галерея</h2>
              <div className="gallery-grid">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="gallery-item">
                    <Image size={48} aria-label="Gallery image placeholder" />
                  </div>
                ))}
              </div>
            </section>
          )}
          {/* Sponsors Section */}
          {activeSection === 'sponsors' && (
            <section id="sponsors" className="section">
              <h2 className="font-large mb-2 font-weight-600">Наши спонсоры</h2>
              <p className="color-light mb-2 line-height-1-8">
                Мы благодарны нашим спонсорам за поддержку команды и веру в развитие робототехники в Казахстане.
              </p>
              <div className="sponsor-grid">
                {['Спонсор 1', 'Спонсор 2', 'Спонсор 3', 'Спонсор 4'].map((sponsor, i) => (
                  <div key={i} className="sponsor-item">
                    {sponsor}
                  </div>
                ))}
              </div>
            </section>
          )}
          {/* Contact Section */}
          {activeSection === 'contact' && (
            <section id="contact" className="section">
              <h2 className="font-large mb-2 font-weight-600">Контакты</h2>
              <div className="card">
                <p className="color-light mb-2 line-height-1-8">
                  Свяжитесь с нами для сотрудничества, спонсорства или по любым вопросам.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <Mail size={20} style={{ color: 'var(--accent)' }} aria-label="Email" />
                    <a href="mailto:team@ozge.kz" className="color-accent" style={{ textDecoration: 'none' }}>
                      team@ozge.kz
                    </a>
                  </div>
                  <div className="contact-item">
                    <span style={{ fontSize: '1.25rem' }}>📱</span>
                    <a href="https://instagram.com/ozge_ftc" className="color-accent" rel="noopener noreferrer" aria-label="Instagram">
                      Instagram: @ozge_ftc
                    </a>
                  </div>
                  <div className="contact-item">
                    <span style={{ fontSize: '1.25rem' }}>🌐</span>
                    <a href="https://facebook.com/ozge_ftc" className="color-accent" rel="noopener noreferrer" aria-label="Facebook">
                      Facebook: OZGE Robotics
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2024 OZGE FTC Team. Все права защищены.</p>
          <p className="mt-0-5 font-small">
            Участник программы FIRST Tech Challenge
          </p>
        </div>
      </footer>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

export default App;