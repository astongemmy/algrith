import { useEffect } from 'react';

const useRippleEffect = () => {
  useEffect(() => {
    const createRippleEffect = () => {
      document.querySelectorAll('.ripple-node').forEach(button => {
        button.addEventListener('mousedown', function (e) {
          const target = e.target;
          const rect = target.getBoundingClientRect();
          let ripple = target.querySelector('.ripple');
          if (ripple) ripple.remove();
          ripple = document.createElement('span');
          ripple.className = 'ripple';
          ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
          target.appendChild(ripple);
          const top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.documentElement.scrollTop;
          const left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.documentElement.scrollLeft;
          ripple.style.top = top + 'px';
          ripple.style.left = left + 'px';
          return false;
        });  
      });  
    };

    createRippleEffect();    
  }, []);
};

export default useRippleEffect;