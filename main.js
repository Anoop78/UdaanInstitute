// ============================================
//   UDAAN INSTITUTE — MAIN JS v2
// ============================================

const WA_NUMBER = '916284663889';
const WA_MSG = encodeURIComponent('Hello Udaan Institute, I want information about classes.');
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

// ── NAV HTML ──────────────────────────────────
function getNavHTML(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About Us' },
    { href: 'courses.html', label: 'Courses' },
    { href: 'scholarship.html', label: 'Scholarship' },
    { href: 'admissions.html', label: 'Admissions' },
    { href: 'careers.html', label: 'Careers' },
    { href: 'contact.html', label: 'Contact' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  return `
  <nav class="navbar">
    <div class="nav-inner">
<a href="index.html" class="nav-logo">
  <img src="images/logo.png" alt="Udaan Institute Logo" style="height:60px; width:auto;">
  <div class="logo-text">
    <h2>UDAAN INSTITUTE</h2>
    <span>हौसला है तो उड़ान है</span>
  </div>
</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        ${links}
        <li><a href="admissions.html" class="btn-nav">Enquire Now</a></li>
      </ul>
    </div>
  </nav>`;
}

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;
let startX = 0;

function showSlide(i){

slides.forEach(s => s.classList.remove("active"));
dots.forEach(d => d.classList.remove("active"));

slides[i].classList.add("active");
dots[i].classList.add("active");

}

function nextSlide(){

index++;
if(index >= slides.length) index = 0;
showSlide(index);

}

function prevSlide(){

index--;
if(index < 0) index = slides.length - 1;
showSlide(index);

}

next.onclick = nextSlide;
prev.onclick = prevSlide;

dots.forEach((dot,i)=>{

dot.onclick = () => {
index = i;
showSlide(index);
}

});

/* AUTO SLIDE */

setInterval(nextSlide,5000);

/* MOBILE SWIPE */

document.querySelector(".hero-slider").addEventListener("touchstart",e=>{
startX = e.touches[0].clientX;
});

document.querySelector(".hero-slider").addEventListener("touchend",e=>{

let endX = e.changedTouches[0].clientX;

if(startX - endX > 50){
nextSlide();
}

if(endX - startX > 50){
prevSlide();
}

});

// ── FOOTER HTML ───────────────────────────────
function getFooterHTML() {
  return `
  <!-- GOOGLE MAP -->
  <section class="map-section">
    <div class="map-wrapper">
      <!-- ============================================================
           GOOGLE MAP EMBED
           To use YOUR exact location:
           1. Go to maps.google.com
           2. Search "Near Scindia Statue, DD Nagar, Gwalior"
           3. Click Share → Embed a Map → Copy HTML
           4. Replace the iframe src below with your copied src
           ============================================================ -->
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.331753651212!2d78.20516427567898!3d26.259491477042666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x83bbd4a674c5be47%3A0x78b004a3e7f58cef!2sUdaan%20Institute(Formerly%20Lavinya%20Institute)!5e1!3m2!1sen!2sin!4v1773511322684!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Udaan Institute Location — Near Scindia Statue, DD Nagar, Gwalior">
</iframe>
    </div>
    <div class="map-overlay-bar">
      <div class="map-info">
        <div class="map-pin-icon">📍</div>
        <div>
          <h4>Udaan Institute — Find Us Here</h4>
          <p>Near Scindia Statue, DD Nagar, Gwalior, Madhya Pradesh</p>
        </div>
      </div>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <a href="https://maps.google.com/?q=Scindia+Statue+DD+Nagar+Gwalior" target="_blank" class="btn btn-white" style="padding: 9px 18px; font-size: 0.85rem; border-radius: 6px;">🗺️ Open in Maps</a>
        <a href="${WA_LINK}" target="_blank" class="btn btn-whatsapp" style="padding: 9px 18px; font-size: 0.85rem; border-radius: 6px;">💬 Get Directions on WhatsApp</a>
      </div>
    </div>
  </section>

  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
       <h3>
  <img src="images/logo.png" alt="Udaan Institute Logo" style="height:50px; width:auto; vertical-align:middle;">
  UDAAN INSTITUTE
</h3>
        <div class="tagline">हौसला है तो उड़ान है</div>
        <p>Empowering students through quality education, discipline, and defence-oriented learning. Formerly known as Lavinya Institute — now flying higher as Udaan Institute.</p>
        <div class="footer-socials">
          <a href="${WA_LINK}" target="_blank" aria-label="WhatsApp">💬</a>
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="YouTube">▶️</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="courses.html">Courses & Batches</a></li>
          <li><a href="scholarship.html">🏅 Scholarship</a></li>
          <li><a href="admissions.html">Admissions</a></li>
          <li><a href="careers.html">Careers</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Courses</h4>
        <ul>
          <li><a href="courses.html">Navodaya Vidyalaya</a></li>
          <li><a href="courses.html">Sainik School</a></li>
          <li><a href="courses.html">RIMC Preparation</a></li>
          <li><a href="courses.html">Military School</a></li>
          <li><a href="courses.html">Class 1–5 Foundation</a></li>
          <li><a href="courses.html">Class 6–10 Foundation</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="#">📍 Near Scindia Statue, DD Nagar, Gwalior</a></li>
          <li><a href="tel:9243941715">📞 9243941715</a></li>
          <li><a href="tel:6284663889">📞 6284663889</a></li>
          <li><a href="mailto:udaaninstitutegwalior@gmail.com">✉️ Email Us</a></li>
          <li><a href="${WA_LINK}" target="_blank">💬 WhatsApp Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 UDAAN INSTITUTE | All Rights Reserved</p>
      <p>Transforming Potential into Performance — Knowledge into Success</p>
    </div>
  </footer>

  <div class="whatsapp-float">
    <a href="${WA_LINK}" target="_blank" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  </div>`;
}

// ── PAGE INIT ─────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  // Smooth scroll
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const target = document.getElementById(this.dataset.scroll);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // Form handlers
  ['enquiryForm', 'careerForm'].forEach(id => {
    const form = document.getElementById(id);
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const successId = id === 'enquiryForm' ? 'formSuccess' : 'careerSuccess';
        const msg = document.getElementById(successId);
        if (msg) { msg.style.display = 'block'; this.reset(); setTimeout(() => msg.style.display = 'none', 6000); }
      });
    }
  });

  // Animated stats counter
  const statEls = document.querySelectorAll('[data-count]');
  if (statEls.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { animateCount(entry.target); observer.unobserve(entry.target); } });
    }, { threshold: 0.5 });
    statEls.forEach(el => observer.observe(el));
  }

  // Init slideshow if present
  initSlideshow();
});

// ── SLIDESHOW ─────────────────────────────────
function initSlideshow() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;

  let current = 0;
  let timer = null;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function autoPlay() {
    timer = setInterval(() => goTo(current + 1), 2000);
  }

  function resetTimer() { clearInterval(timer); autoPlay(); }

  // Dots
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetTimer(); }));

  // Arrows
  const prev = document.querySelector('.slide-arrow.prev');
  const next = document.querySelector('.slide-arrow.next');
  if (prev) prev.addEventListener('click', () => { goTo(current - 1); resetTimer(); });
  if (next) next.addEventListener('click', () => { goTo(current + 1); resetTimer(); });

  autoPlay();
}

// ── COUNTER ──────────────────────────────────
function animateCount(el) {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + suffix;
  }, 16);
}
