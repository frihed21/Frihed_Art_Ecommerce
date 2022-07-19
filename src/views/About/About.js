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
						<p className="main__p">eritatis! lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, beatae? Blanditiis consequatur optio qui beatae dignissimos quis repellendus earum labore recusandae reprehenderit corporis sapiente, nam voluptas inventore placeat magni veritatis! lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, beatae? Blanditiis consequatur optio qui beatae dignissimos quis repellendus earum labore recusandae reprehenderit corporis sapiente, nam voluptas inventore placeat magni veritatis!</p>                               
						<div className="main__flex">
							<img src={img} alt='pollito' />
							<span className="main__span">amante de los pollitos! <span>&#160;</span> </span>
						</div>
					</div>
				</div>
				<div className="col-md-6 animate__animated animate__pulse">
					<img src={img1} alt='about_me'/>                                             
				</div>
			</div>                 
		</section>
	</div>
	);
};

export default About;
