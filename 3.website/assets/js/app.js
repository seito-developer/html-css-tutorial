// Smooth scroll
const $doc = document;
const $nav = $doc.getElementById('js-nav');
const $navLink = $nav.getElementsByTagName('a');

for (var i = $navLink.length - 1; i >= 0; i--) {
	$navLink[i].addEventListener('click', (e) => {
		e.preventDefault()
		const $this = e.currentTarget;
		const targetName = $this.getAttribute('href').replace('#', '');
		const $target = $doc.getElementById(targetName);
		scroll({
			top: $target.offsetTop - 50,
		    behavior: "smooth"
		 });
	});
}

// particles
particlesJS.load('js-particles', './assets/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});