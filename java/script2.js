var elementTop = $('.navegador').offset().top;

$(window).scroll(function(){
    if( $(window).scrollTop() >= elementTop){
        $('body').addClass('nav_fixed');
    }else{
        $('body').removeClass('nav_fixed');
    }
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'

    }
    });
});

const fila = document.querySelector('.contenedor__productos');
const peliculas = document.querySelectorAll('.productos');

const flechaIzquierda = document.getElementById('flecha__izquierda');
const flechaDerecha = document.getElementById('flecha__derecha');

flechaDerecha.addEventListener('click',()=>{
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

flechaIzquierda.addEventListener('click',()=>{
        fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 10);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});

const numeroPaginas = Math.ceil(peliculas.length / 4);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
