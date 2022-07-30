import React from 'react';

const styles = {
	containerContact: {
		padding: 20,
		textAlign: 'center',
	},
};

const Contact = () => {
	return (
		<div style={styles.containerContact}>
			<h1>Contact</h1>
			<p>
			¿Deseas alguno de los productos o uno personalizado? Escribenos al siguiente numero y me contactaré contigo a la brevedad
			Contacto: 51999111234
			</p>
		</div>
	);
};

export default Contact;
		





























// 		<div>		
//             <section className="container mt-5 contact">
//                 <h1 class="text-center">CONTÁCTA<span class="footer__span">NOS</span></h1>
//                 <p class="contact__h2">¿Deseas alguno de los productos o uno personalizado? Déjame tus datos y me contactare contigo a la brevedad</p>
//                 <div class="row mt-5">
//                     <div class="col-md-8">
//                         <form class="form" action="" method="get" enctype="text/plain">
//                             <fieldset class="form__container">
//                                 <legend>Datos Personales</legend>
//                                     <label for="idsex">Sexo:</label>                 
//                                         <input type="radio" name="camposex" id="idsex" value ="masculino" required>Hombre
//                                         <input type="radio" name="camposex" id="idsex" value ="femenino" required>Mujer
//                                         <input type="text" name="" id="idname" placeholder="Ingrese su nombre" required>
//                                         <input type="email" name="" id="idemail" placeholder="Ingrese su email" required>
//                                         <input type="number" name="" id="" placeholder="Ingrese su nro. celular" required>
//                                         <textarea name="" id="idmensaje" cols="30" rows="10" placeholder="Ingrese su consulta o duda sobre los productos" required></textarea>
//                                         <div>                
//                                             <input type="checkbox" name="campocondition" id="idcondition" required>
//                                             <label for="idcondition">Términos y Condiciones.</label>                
//                                         </div>
// 							</fieldset> 
//                             <input type="submit" value="Enviar"> 
//                             <input type="reset" value="Borrar datos">      
//                         </form>  
//                     </div>
//                     <div class="col-md-4 contact__img">
//                         <img src="../img/contact1.jpg" alt="welcome">
//                         <img src="../img/contact2.jpg" alt="hello">
//                         <img src="../img/contact3.jpg" alt="thankyou">
//                     </div>                       
//                 </div>
//             </section>
//         </div>
// 	);
// };

// export default Contact;
