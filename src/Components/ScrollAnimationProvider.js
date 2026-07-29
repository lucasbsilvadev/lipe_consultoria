// src/components/ScrollAnimationProvider.js
import { useEffect } from 'react';

const ScrollAnimationProvider = ({ children }) => {
  useEffect(() => {
    // Esta função será executada após a renderização dos componentes
    const initScrollAnimations = () => {
      const animatedElements = document.querySelectorAll('[data-animate]');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target;
          //  const animationType = element.getAttribute('data-animate');
              const delay = element.getAttribute('data-delay') || 0;
              
              // Aplica a classe de animação após o delay
              setTimeout(() => {
                element.classList.add('scroll-visible');
                
                // Se for animação única, para de observar
                if (element.getAttribute('data-once') !== 'false') {
                  observer.unobserve(element);
                }
              }, parseInt(delay));
            }
          });
        },
        { threshold: 0.1 }
      );

      animatedElements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        animatedElements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    };

    // Inicia as animações após um pequeno delay
    const timer = setTimeout(initScrollAnimations, 100);
    return () => clearTimeout(timer);
  }, []);

  return children;
};

export default ScrollAnimationProvider;