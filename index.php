<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portafolio profesional de Edisbel Ramírez Lovatos, Desarrollador Full Stack con experiencia en JavaScript, PHP y frameworks modernos">
    <meta name="keywords" content="desarrollador full stack, JavaScript, PHP, React, Laravel, portafolio">
    <meta name="author" content="Edisbel Ramírez Lovatos">
    
    <title>Edisbel Ramírez Lovatos | Desarrollador Full Stack</title>
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Barra de navegación -->
    <header class="main-header">
        <nav class="navbar">
            <a href="#" class="logo">
                <img src="images/logo.png" alt="Logo">Curriculum Vitae</a>
            <button class="sidebar-toggle" aria-expanded="false" aria-controls="sidebar">
                ☰
            </button>
            <ul class="nav-list">
                <li><a href="#about" class="nav-link">Sobre mí</a></li>
                <li><a href="#skills" class="nav-link">Habilidades</a></li>
                <li><a href="#projects" class="nav-link">Proyectos</a></li>
                <li><a href="#contact" class="nav-link">Contacto</a></li>
            </ul>
        </nav>
    </header>
    

    <!-- Sidebar -->
    <div class="sidebar-overlay"></div>
    <aside id="sidebar" class="sidebar" aria-hidden="true">
        <button class="close-sidebar">×</button>
        <nav class="sidebar-nav">
            <ul class="sidebar-list">
                <li><a href="#about" class="sidebar-link">Sobre mí</a></li>
                <li><a href="#skills" class="sidebar-link">Habilidades</a></li>
                <li><a href="#projects" class="sidebar-link">Proyectos</a></li>
                <li><a href="#contact" class="sidebar-link">Contacto</a></li>
            </ul>
        </nav>
    </aside>

    <!-- Contenido principal -->
    <main style="margin-top: 70px;">
        
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1>Edisbel Ramírez Lovatos</h1>
                <p class="subtitle">Desarrollador Full Stack</p>
                <p class="hero-text">Creando soluciones digitales eficientes y escalables</p>
                <a href="#contact" class="cta-button">Contáctame</a>
            </div>
        </section>

        <!-- Sobre mí -->
        <section id="about" class="section">
            <div class="container">
                <h2 class="section-title">Sobre mí</h2>
                <div class="profile-grid">
                    <div class="profile-image-container">
                        <img src="images/edisbel.png" alt="Foto de perfil de Edisbel Ramírez" class="profile-image">
                    </div>
                    <div class="profile-content">
                        <p>¡Hola! Soy un desarrollador Full Stack con más de 5 años de experiencia creando aplicaciones web modernas y eficientes.</p>
                        <p>Especializado en JavaScript (ES6+), PHP y frameworks como React y Laravel, me apasiona resolver problemas complejos mediante código limpio y arquitecturas escalables.</p>
                        <p>Cuando no estoy programando, disfruto de contribuir a proyectos open source, aprender nuevas tecnologías y compartir conocimientos con la comunidad de desarrolladores.</p>
                        <div class="social-links">
                            <a href="https://github.com/tu-usuario" target="_blank" aria-label="GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/tu-usuario" target="_blank" aria-label="LinkedIn">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://twitter.com/tu-usuario" target="_blank" aria-label="Twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Habilidades -->
        <section id="skills" class="section">
            <div class="container">
                <h2 class="section-title">Habilidades Técnicas</h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3>Frontend</h3>
                        <ul class="skill-list">
                            <li class="skill-item">
                                <span class="skill-name">HTML5 & CSS3</span>
                                <div class="skill-level" aria-hidden="true">
                                    <span style="width: 95%"></span>
                                </div>
                            </li>
                            <li class="skill-item">
                                <span class="skill-name">JavaScript (ES6+)</span>
                                <div class="skill-level" aria-hidden="true">
                                    <span style="width: 90%"></span>
                                </div>
                            </li>
                            <li class="skill-item">
                                <span class="skill-name">React.js</span>
                                <div class="skill-level" aria-hidden="true">
                                    <span style="width: 85%"></span>
                                </div>
                            </li>
                            <li class="skill-item">
                                <span class="skill-name">Vue.js</span>
                                <div class="skill-level" aria-hidden="true">
                                    <span style="width: 80%"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="skill-category">
                        <h3>Backend</h3>
                        <ul class="skill-list">
                            <li class="skill-item">
                                <span class="skill-name">PHP</span>
                                <div class="skill-level" aria-hidden="true">
                                    <span style="width: 90%"></span>
                                </div>
                            </li>
                            <li class="skill-item">
                                <span class="skill-name">Laravel</span>
                                <div class="skill-level" aria-hidden="true">
                                    <span style="width: 88%"></span>
                                </div>
                            </li>
                            <li class="skill-item">
                                <span class="skill-name">Node.js</span>
                                <div class="skill-level" aria-hidden="true">
                                    <span style="width: 75%"></span>
                                </div>
                            </li>
                            <li class="skill-item">
                                <span class="skill-name">MySQL</span>
                                <div class="skill-level" aria-hidden="true">
                                    <span style="width: 85%"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="skill-category">
                        <h3>Herramientas</h3>
                        <ul class="skill-list">
                            <li class="skill-item">
                                <span class="skill-name">Git</span>
                                <div class="skill-level" aria-hidden="true">
                                    <span style="width: 92%"></span>
                                </div>
                            </li>
                            <li class="skill-item">
                                <span class="skill-name">Docker</span>
                                <div class="skill-level" aria-hidden="true">
                                    <span style="width: 80%"></span>
                                </div>
                            </li>
                            <li class="skill-item">
                                <span class="skill-name">AWS</span>
                                <div class="skill-level" aria-hidden="true">
                                    <span style="width: 70%"></span>
                                </div>
                            </li>
                            <li class="skill-item">
                                <span class="skill-name">CI/CD</span>
                                <div class="skill-level" aria-hidden="true">
                                    <span style="width: 75%"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Proyectos -->
        <section id="projects" class="section">
            <div class="container">
                <h2 class="section-title">Proyectos Destacados</h2>
                <div class="project-grid">
                    <article class="project-card">
                        <div class="project-image-container">
                            <img src="images/project1.jpg" alt="Captura del Sistema de Gestión" class="project-image">
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Sistema de Gestión Integral</h3>
                            <p class="project-description">Aplicación web completa para administración de inventarios, ventas y reportes financieros con panel de control en tiempo real.</p>
                            <ul class="project-tech">
                                <li>Laravel</li>
                                <li>Vue.js</li>
                                <li>MySQL</li>
                            </ul>
                            <div class="project-links">
                                <a href="#" class="project-link">Ver Demo</a>
                                <a href="#" class="project-link">Código</a>
                            </div>
                        </div>
                    </article>
                    
                    <article class="project-card">
                        <div class="project-image-container">
                            <img src="images/project2.jpg" alt="Captura del Blog Personal" class="project-image">
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Blog Personal con CMS</h3>
                            <p class="project-description">Plataforma de blogging con sistema de gestión de contenidos, autenticación de usuarios y comentarios en tiempo real.</p>
                            <ul class="project-tech">
                                <li>React</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                            </ul>
                            <div class="project-links">
                                <a href="#" class="project-link">Ver Sitio</a>
                                <a href="#" class="project-link">Código</a>
                            </div>
                        </div>
                    </article>
                    
                    <article class="project-card">
                        <div class="project-image-container">
                            <img src="images/project3.jpg" alt="Captura de la API REST" class="project-image">
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">API REST para E-commerce</h3>
                            <p class="project-description">API robusta y documentada para plataforma de comercio electrónico con autenticación JWT y sistema de pagos integrado.</p>
                            <ul class="project-tech">
                                <li>PHP</li>
                                <li>Lumen</li>
                                <li>PostgreSQL</li>
                            </ul>
                            <div class="project-links">
                                <a href="#" class="project-link">Documentación</a>
                                <a href="#" class="project-link">Código</a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- Contacto -->
        <section id="contact" class="section">
            <div class="container">
                <h2 class="section-title">Contacto</h2>
                <div class="contact-grid">
                    <div class="contact-info">
                        <p>¿Interesado en trabajar juntos o tienes alguna pregunta? No dudes en contactarme.</p>
                        <ul class="contact-methods">
                            <li>
                                <span class="contact-icon">✉️</span>
                                <a href="mailto:contacto@example.com">edisbel.ramirez95@gmail.com</a>
                            </li>
                            <li>
                                <span class="contact-icon">📱</span>
                                <a href="tel:+5354850578">+53 54850578</a>
                            </li>
                            <li>
                                <span class="contact-icon">📍</span>
                                <span>Sancti Spíritus, Cuba</span>
                            </li>
                        </ul>
                    </div>
                    
                    <form class="contact-form">
                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input type="text" id="name" name="name" placeholder="Tu nombre completo" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="tu@email.com" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="subject">Asunto</label>
                            <input type="text" id="subject" name="subject" placeholder="¿En qué puedo ayudarte?">
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Mensaje</label>
                            <textarea id="message" name="message" rows="5" placeholder="Tu mensaje..." required></textarea>
                        </div>
                        
                        <button type="submit" class="submit-button">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Pie de página -->
    <footer class="main-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <a href="#" class="logo">Edisbel Ramirez Lovatos</a>
                     <p>Desarrollador Full Stack</p>
                </div>
                
                <nav class="footer-nav">
                    <ul>
                        <li><a href="#about">Sobre mí</a></li>
                        <li><a href="#skills">Habilidades</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
                
                <div class="footer-social">
                    <a href="https://github.com/tu-usuario" target="_blank" aria-label="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/tu-usuario" target="_blank" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://twitter.com/tu-usuario" target="_blank" aria-label="Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            
            <div class="footer-bottom">
            <p>&copy; <?php echo $current_year; ?> 2025 Infotec Studio. Todos los derechos reservados.</p>
                <p>Diseñado y desarrollado con ❤️ por Infotec Studio</p>
            </div>
        </div>
    </footer>

    <!-- Botón WhatsApp -->
    <a href="https://wa.me/5354850578" class="whatsapp-float" target="_blank" aria-label="Contactar por WhatsApp">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
    </a>

    <script src="js/main.js"></script>
</body>
</html>