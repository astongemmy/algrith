import { useEffect, useRef, useState } from 'react';
import useClickAway from '../hooks/useClickAway';
import useViewport from '../hooks/useViewport';

const ThemeSwitch = () => {
  const themeSwitchContainerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const themeSwitchRef = useRef(null);
  const { viewport } = useViewport();

  useClickAway(themeSwitchRef, setOpen);

  const repositionThemeSwitch = () => {
    if (themeSwitchContainerRef.current) {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        if (!['sm', 'md'].includes(viewport)) themeSwitchContainerRef.current.style.top = '0.40rem';
        if (['md'].includes(viewport)) themeSwitchContainerRef.current.style.top = '0.60rem';
        if (['sm'].includes(viewport)) themeSwitchContainerRef.current.style.top = '0.65rem';
      } else {
        if (!['sm', 'md'].includes(viewport)) themeSwitchContainerRef.current.style.top = '1.0rem';
        if (['md'].includes(viewport)) themeSwitchContainerRef.current.style.top = '1.26rem';
        if (['sm'].includes(viewport)) themeSwitchContainerRef.current.style.top = '1.30rem';
      }
    }
  };

  const activeThemeIndicator = {
    system: !['light', 'dark'].includes(localStorage.theme) ? 'bg-theme-primary/10 dark:bg-theme-primary/30' : '',
    dark: localStorage.theme === 'dark' ? 'bg-theme-primary/30' : '',
    light: localStorage.theme === 'light' ? 'bg-theme-primary/10' : ''
  };

  const switchTheme = () => {
    const darkModeBgColor = process.env.NEXT_PUBLIC_DARK_MODE_PRIMARY_COLOR;
    const themeColor = process.env.NEXT_PUBLIC_PRIMARY_THEME_COLOR;

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('meta[name="msapplication-TileColor"]').setAttribute('content', darkModeBgColor);
      document.querySelector('meta[name="theme-color"]').setAttribute('content', darkModeBgColor);
      document.documentElement.classList.add('dark');
    } else {
      document.querySelector('meta[name="msapplication-TileColor"]').setAttribute('content', themeColor);
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '#ffffff');
      document.documentElement.classList.remove('dark');
    }
  };

  const setTheme = (e) => {
    const theme = e.target.dataset.theme;
    localStorage.removeItem('theme');

    if (theme !== 'system') localStorage.theme = theme;
    switchTheme();
  };

  useEffect(() => {
    window.addEventListener('scroll', repositionThemeSwitch);
    repositionThemeSwitch();
    switchTheme();

    return () => window.removeEventListener('scroll', repositionThemeSwitch);
  }, [viewport]);

  
  return (
    <div ref={ themeSwitchContainerRef } className="z-20 md:bg-transparent fixed top-4 md:top-8 lg:top-12 right-16 md:right-24 lg:right-16 xl:right-24 mr-1 flex items-center w-auto">
      <div ref={themeSwitchRef} onClick={() => setOpen(!open)} className="flex items-center dark:bg-dark-mode-secondary bg-theme-primary/10 px-2 rounded-lg lg:py-1">
        <label className="sr-only" id="headlessui-listbox-label-3">Theme</label>
        <button type="button" id="headlessui-listbox-button-4" aria-haspopup="true" aria-expanded="false" aria-labelledby="headlessui-listbox-label-3 headlessui-listbox-button-undefined">
          <span className="dark:hidden">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-theme-primary/20 stroke-theme-primary"></path>
              <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-theme-primary"></path>
            </svg>
          </span>

          <span className="hidden dark:inline">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-theme-primary/20"></path>
              <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-theme-primary"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-theme-primary"></path>
            </svg>
          </span>
        </button>
      </div>

      {open && (
        <ul className="absolute z-50 top-16 right-0 bg-white rounded-lg ring-1 ring-theme-primary/10 shadow-lg overflow-hidden w-40 text-lg text-slate-700 dark:text-dark-mode-octonary dark:bg-dark-mode-secondary dark:ring-0 dark:highlight-white/5" aria-labelledby="headlessui-listbox-label-3" aria-orientation="vertical" id="headlessui-listbox-options-5" role="listbox" tabIndex="0" aria-activedescendant="headlessui-listbox-option-21">
          <li
            className={`py-3 px-3 flex gap-4 items-center cursor-pointer ${activeThemeIndicator.light}`}
            id="headlessui-listbox-option-20"
            onClick={setTheme}
            data-theme="light"
            role="option"
            tabIndex="-1">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-theme-primary"></path>
              <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-theme-primary"></path>
            </svg>
           Light
          </li>
          
          <li
            className={`py-3 px-3 flex gap-4 items-center cursor-pointer ${activeThemeIndicator.dark}`}
            id="headlessui-listbox-option-21"
            aria-selected="true"
            onClick={setTheme}
            data-theme="dark"
            role="option"
            tabIndex="-1">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
             <path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-theme-primary/20"></path>
             <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-theme-primary"></path>
             <path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-theme-primary"></path>
            </svg>
            Dark
          </li>

          <li
            className={`py-3 px-3 flex gap-4 items-center cursor-pointer ${activeThemeIndicator.system}`}
            id="headlessui-listbox-option-22"
            data-theme="system"
            onClick={setTheme}
            role="option"
            tabIndex="-1">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" strokeWidth="2" strokeLinejoin="round" className="stroke-theme-primary"></path>
              <path d="M14 15c0 3 2 5 2 5H8s2-2 2-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-theme-primary"></path>
            </svg>
            System
          </li>
        </ul>
      )}
    </div>
  );
};

export default ThemeSwitch;