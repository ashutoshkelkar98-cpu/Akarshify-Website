/* Akarshify shared footer: one source of footer markup for all static pages. */
(() => {
  const page = location.pathname.split('/').pop().toLowerCase() || 'index.html';
  const isHome = page === 'index.html';
  const home = isHome ? '' : 'index.html';
  const contact = isHome && document.getElementById('nav-contact-modal')
    ? '<button type="button" class="nav-contact-trigger footer-contact-trigger" aria-haspopup="dialog" aria-controls="nav-contact-modal">Contact Us</button>'
    : '<a href="index.html#contact">Contact Us</a>';
  document.write('<footer class="site-footer">' +
    '<div class="footer-about"><a href="' + home + '#home" class="brand">akarshify<span>.</span></a>' +
    '<p>A digital services studio helping businesses build their presence and connect with wider audiences.</p></div>' +
    '<div class="footer-navigation"><h4>NAVIGATION</h4>' +
    '<a href="index.html#home">Home</a><a href="services.html">Services</a>' +
    '<a href="' + home + '#work">Our Work</a><a href="' + home + '#process">How We Work</a>' +
    '<a href="about.html">About</a>' + contact + '</div>' +
    '<div class="footer-services"><h4>SERVICES</h4>' +
    '<a href="services.html#what-we-do">Website Development</a>' +
    '<a href="services.html#what-we-do">Digital Advertising</a></div>' +
    '<div class="footer-bottom"><span class="footer-copyright">© <span id="year"></span> Akarshify. All rights reserved.</span><span class="footer-signoff">BUILT WITH PURPOSE.</span></div>' +
    '</footer>');
})();
