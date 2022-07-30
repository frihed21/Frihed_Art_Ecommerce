import React from 'react';
import img from './pollito.png';
import img1 from './aboutme1.jpg';
import './About.css';

const styles = {
	containerAbout: {
		padding: 20,
		textAlign: 'center',
	},
};

const About = () => {
	return (
		<div>
		<section className="container my-5">                
			<div className="row mt-5 main__box ">
				<div className="col-md-6">
					<div className="main__text animate__animated animate__slideInLeft">
						<h2 className="main__h2">UN POCO MÁS SOBRE...</h2>
						<p className="main__p">Káterin, nacida en Lima - Perú por los 90', fue asimilando su pasión por el arte y el paisajimo al tener la oportunidad de vivir frente a un paisaje verdoso a lo que a sus ojos de infante ella lo llamaba "Bosque mágico", vivió su infancia en la serrania del Perú , a los 5 años empezó una nueva etapa en la capital del Perú, un poco alejada de su madre, ello la motivo a sumergirse en el mundo del arte y sobrellevar la melancolía. Inspirada por sus artísticas favoritos: Salvador Dalí, Claude Monet y Vasili Kandinsky, ella se enfoca en los siguientes movimientos artísticos correspondiente a cada pintor en el orden mencionado: Surrealismo, Arte Moderno y Abstracto. No conforme con la pintura y siempre deseosa de aprender más, en inicios de pandemia aprendió a realizar prendas y amigurumis a crochet y no contenga con ello también se interesó con lo relacionado a la papelería y bullet journal, desarrollando la habilidad de realizar encuadernación.</p>                               
						<div className="main__flex">
							<img className="main__chicken" src={img} alt='pollito' />
							<span className="main__span">amante de los pollitos! <span>&nbsp;</span> </span>
						</div>
					</div>
				</div>
				<div className="col-md-6 animate__animated animate__pulse">
					<img className="main__image" src={img1} alt='about_me'/>                                             
				</div>
			</div>                 
		</section>
	</div>
	);
};

export default About;
