export const listadoProdutos=[
	{	id:1,
		category:"pinturas",
		content:"",
		description:"PINTURA ACRILICO ESTILO ANTIGUO CIELO ESTRELLADO 50X70 CM",		
        img:"https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/03/16/16474297505881.jpg",		
        name:"Cielo Estrellado",
		price:129,
		stock:2
	},
	{	id:2,
		category:"pinturas",
		content:"",
		description:"PINTURA ACRILICO ESTILO BOHEMIO COLIBRI LIBRE 50X60 CM",		
		img:"https://mymodernmet.com/wp/wp-content/uploads/2020/04/bird-paintings-jamel-akib-7.jpg",
		name:"Colibri libre",
		price:140,
		stock:4
	},
		{ id:3,
		category:"papeleria",
		content:"",
		description:"AGENDA CON MANDALA COLORES OSCUROS AÑO2022",		
		img:"https://paolarelayze.files.wordpress.com/2019/01/Papermint-agendas-mandala-2.jpg",
		name:"Agenda Mandala",
		price:80,
		stock:7
	},
		{id:4,
		category:"crochet",
		content:"",
		description:"TOP PINK A CROCHET HILO 4 HEBRAS",		
		img:"https://todo-amigurumi.com/wp-content/uploads/2021/01/imagen_562175965981346801-300x293.jpg",
		name:"Top pink crochet",
		price:100,
		stock:2
	},
			{id:5,
		category:"pinturas",
		content:"",
		description:"PINTURA ACRILICO DE COLIBRI DE 60X70 CM",		
		img:"https://mymodernmet.com/wp/wp-content/uploads/2020/04/bird-paintings-jamel-akib-7.jpg",
		name:"Colibri grande",
		price:210,
		stock:7
	},
			{id:6,
		category:"Papeleria",
		content:"",
		description:"AGENDA FLORAL VERDE PACIFICO 2022",		
		img:"https://holadecodistribuidora.com/wp-content/uploads/2021/09/IMG_20210930_155846.jpg",
		name:"Agenda floral 2022",
		price:80,
		stock:4
	}
]

export const getProducts = (categoria) =>{
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if(listadoProdutos.length>0){
                resolve(listadoProdutos.filter(unProducto => unProducto.category === categoria))}
            else{
                reject("Sin datos")
            } 
        }, 500);
    })
}

export const getProductById = (id) =>{
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if(listadoProdutos.length>0){
                resolve(listadoProdutos.find(unProducto => unProducto.id === parseInt(id)))}
            else{
                reject("Sin datos")
            } 
        }, 500);
    })
}