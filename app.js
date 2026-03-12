
      // Default configuration
      const defaultConfig = {
        hero_title: "Transformamos la complejidad en soluciones claras",
        hero_subtitle:
          "Estrategia, confianza y resultados para el crecimiento sostenible de tu empresa",
        cta_button: "Agenda tu asesoría",
        about_text:
          "Somos Consultora Búho Azul, una firma de consultoría que acompaña a micro, pequeñas y medianas empresas en la optimización de sus procesos, la toma de decisiones estratégicas y su transformación digital. Nuestra visión integral nos permite ver más allá de lo evidente, identificando oportunidades donde otros ven obstáculos.",
        contact_title: "Iluminamos el camino de tu empresa",
        primary_color: "#2563eb",
        secondary_color: "#1e3a5f",
        accent_color: "#3b82f6",
        text_color: "#1f2937",
        background_color: "#ffffff",
        font_family: "Montserrat",
        font_size: 16,
      };

      let config = { ...defaultConfig };

      // Element SDK initialization
      if (window.elementSdk) {
        window.elementSdk.init({
          defaultConfig,
          onConfigChange: async (newConfig) => {
            config = { ...defaultConfig, ...newConfig };

            // Update hero title
            const heroTitleEl = document.getElementById("hero-title");
            if (heroTitleEl) {
              heroTitleEl.innerHTML = (
                config.hero_title || defaultConfig.hero_title
              ).replace(
                "soluciones claras",
                '<span class="gradient-text">soluciones claras</span>',
              );
            }

            // Update hero subtitle
            const heroSubtitleEl = document.getElementById("hero-subtitle");
            if (heroSubtitleEl) {
              heroSubtitleEl.textContent =
                config.hero_subtitle || defaultConfig.hero_subtitle;
            }

            // Update CTA button
            const heroCta = document.getElementById("hero-cta");
            if (heroCta) {
              heroCta.innerHTML = `<span>${config.cta_button || defaultConfig.cta_button}</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>`;
            }

            // Update about text
            const aboutTextEl = document.getElementById("about-text");
            if (aboutTextEl) {
              aboutTextEl.textContent =
                config.about_text || defaultConfig.about_text;
            }

            // Update contact title
            const contactTitleEl = document.getElementById("contact-title");
            if (contactTitleEl) {
              contactTitleEl.innerHTML = (
                config.contact_title || defaultConfig.contact_title
              ).replace("camino", '<span class="text-blue-400">camino</span>');
            }

            // Update colors
            document.documentElement.style.setProperty(
              "--primary-color",
              config.primary_color || defaultConfig.primary_color,
            );

            // Update font
            const fontFamily = config.font_family || defaultConfig.font_family;
            document.body.style.fontFamily = `${fontFamily}, sans-serif`;

            // Update font size
            const baseSize = config.font_size || defaultConfig.font_size;
            document.documentElement.style.fontSize = `${baseSize}px`;
          },
          mapToCapabilities: (config) => ({
            recolorables: [
              {
                get: () =>
                  config.background_color || defaultConfig.background_color,
                set: (value) => {
                  config.background_color = value;
                  window.elementSdk.setConfig({ background_color: value });
                },
              },
              {
                get: () =>
                  config.secondary_color || defaultConfig.secondary_color,
                set: (value) => {
                  config.secondary_color = value;
                  window.elementSdk.setConfig({ secondary_color: value });
                },
              },
              {
                get: () => config.text_color || defaultConfig.text_color,
                set: (value) => {
                  config.text_color = value;
                  window.elementSdk.setConfig({ text_color: value });
                },
              },
              {
                get: () => config.primary_color || defaultConfig.primary_color,
                set: (value) => {
                  config.primary_color = value;
                  window.elementSdk.setConfig({ primary_color: value });
                },
              },
              {
                get: () => config.accent_color || defaultConfig.accent_color,
                set: (value) => {
                  config.accent_color = value;
                  window.elementSdk.setConfig({ accent_color: value });
                },
              },
            ],
            borderables: [],
            fontEditable: {
              get: () => config.font_family || defaultConfig.font_family,
              set: (value) => {
                config.font_family = value;
                window.elementSdk.setConfig({ font_family: value });
              },
            },
            fontSizeable: {
              get: () => config.font_size || defaultConfig.font_size,
              set: (value) => {
                config.font_size = value;
                window.elementSdk.setConfig({ font_size: value });
              },
            },
          }),
          mapToEditPanelValues: (config) =>
            new Map([
              ["hero_title", config.hero_title || defaultConfig.hero_title],
              [
                "hero_subtitle",
                config.hero_subtitle || defaultConfig.hero_subtitle,
              ],
              ["cta_button", config.cta_button || defaultConfig.cta_button],
              ["about_text", config.about_text || defaultConfig.about_text],
              [
                "contact_title",
                config.contact_title || defaultConfig.contact_title,
              ],
            ]),
        });
      }

      // Scroll animations
      function handleScrollAnimations() {
        const elements = document.querySelectorAll(
          ".fade-in, .fade-in-left, .fade-in-right, .scale-in",
        );

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
        );

        elements.forEach((el) => observer.observe(el));
      }

      // Navbar scroll effect
      function handleNavbarScroll() {
        const navbar = document.getElementById("navbar");
        const appWrapper = document.getElementById("app-wrapper");

        appWrapper.addEventListener("scroll", () => {
          if (appWrapper.scrollTop > 50) {
            navbar.classList.add("glass-effect", "shadow-lg");
            navbar.classList.remove("bg-transparent");
            const logoText = document.getElementById("nav-logo-text");
            if (logoText)
              logoText.classList.replace("text-white", "text-gray-900");
            navbar.querySelectorAll(".nav-link").forEach((link) => {
              link.classList.replace("text-white/90", "text-gray-700");
              link.classList.replace("text-white", "text-gray-900");
            });
          } else {
            navbar.classList.remove("glass-effect", "shadow-lg");
            navbar.classList.add("bg-transparent");
            const logoText = document.getElementById("nav-logo-text");
            if (logoText)
              logoText.classList.replace("text-gray-900", "text-white");
            navbar.querySelectorAll(".nav-link").forEach((link) => {
              link.classList.replace("text-gray-700", "text-white/90");
              link.classList.replace("text-gray-900", "text-white");
            });
          }
        });
      }

      // Mobile menu toggle
      function handleMobileMenu() {
        const menuBtn = document.getElementById("mobile-menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        menuBtn.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
          });
        });
      }

      // Smooth scroll for navigation
      function handleSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
              const appWrapper = document.getElementById("app-wrapper");
              const targetPosition = target.offsetTop - 80;
              appWrapper.scrollTo({
                top: targetPosition,
                behavior: "smooth",
              });
            }
          });
        });
      }

    

      // Initialize everything
      document.addEventListener("DOMContentLoaded", () => {
        handleScrollAnimations();
        handleNavbarScroll();
        handleMobileMenu();
        handleSmoothScroll();
        
      });
  

      (function () {
        function c() {
          var b = a.contentDocument || a.contentWindow.document;
          if (b) {
            var d = b.createElement("script");
            d.innerHTML =
              "window.__CF$cv$params={r:'9da818ea54c85948',t:'MTc3MzIwNjI5NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName("head")[0].appendChild(d);
          }
        }
        if (document.body) {
          var a = document.createElement("iframe");
          a.height = 1;
          a.width = 1;
          a.style.position = "absolute";
          a.style.top = 0;
          a.style.left = 0;
          a.style.border = "none";
          a.style.visibility = "hidden";
          document.body.appendChild(a);
          if ("loading" !== document.readyState) c();
          else if (window.addEventListener)
            document.addEventListener("DOMContentLoaded", c);
          else {
            var e = document.onreadystatechange || function () {};
            document.onreadystatechange = function (b) {
              e(b);
              "loading" !== document.readyState &&
                ((document.onreadystatechange = e), c());
            };
          }
        }
      })();
    