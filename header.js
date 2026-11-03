/* Akarshify shared header: one source of navigation markup. Load synchronously at the header position. */
(() => {
  const page = location.pathname.split('/').pop().toLowerCase() || 'index.html';
  const isHome = page === 'index.html';
  const root = isHome ? '' : 'index.html';
  const current = name => page === name ? ' aria-current="page"' : '';
  const homeLink = isHome ? '' : '<a href="index.html#home" class="nav-home" aria-label="Home" title="Home"><svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-7h6v7"/></svg></a>';
  document.write('<header class="header" id="' + (isHome ? 'home' : 'top') + '">' +
    '<a href="' + (isHome ? '#home' : 'index.html#home') + '" class="brand brand-header" aria-label="Akarshify — Attraction Automated"><span class="brand-name">akarshify<span>.</span></span><span class="brand-tagline">ATTRACTION AUTOMATED</span></a>' +
    '<button class="menu" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="nav">☰</button>' +
    '<nav id="nav" aria-label="Main navigation">' + homeLink +
    '<a href="services.html"' + current('services.html') + '>Services</a>' +
    '<a href="' + root + '#work">Our Work</a>' +
    '<a href="' + root + '#process">How We Work</a>' +
    '<a href="about.html"' + current('about.html') + '>About</a>' +
    '<span class="nav-project-prompt">Have a project to discuss?</span>' +
    '<a class="nav-cta" href="' + root + '#contact">LET\'S TALK</a></nav></header>');
})();
