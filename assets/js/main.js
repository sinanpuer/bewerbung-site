// Smooth scroll fallback for older browsers
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
    history.pushState(null, '', '#'+id);
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Basic client-side form guard (for mailto)
const form = document.querySelector('form.contact');
if(form){
  form.addEventListener('submit', e=>{
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const msg = form.querySelector('textarea[name="message"]').value.trim();
    if(!name || !email || !msg){
      e.preventDefault();
      alert('Bitte fülle alle Felder aus.');
    }
  });
}
