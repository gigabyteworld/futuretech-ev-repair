const elements = document.querySelectorAll(
'.card, .brand, .feature, form'
);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

});

elements.forEach(el=>{

el.classList.add('hidden');

observer.observe(el);

});

document
.getElementById('repairForm')
.addEventListener('submit',function(e){

e.preventDefault();

alert(
'✅ Thank you! FutureTech EV Repairs will contact you soon.'
);

this.reset();

});
