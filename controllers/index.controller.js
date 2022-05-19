const menuItems = [
	{
		id: 1,
		nombre: "Carpaccio fresco",
		detalle: "Entrada Carpaccio de salmón con cítricos",
		precio: 65.50,
		imagen: "Carpaccio-de-salmon.jpg",
		resumen: "Fresquísimo y apetecible, el Carpaccio es un plato perfecto para el verano precisamente por no necesitar cocción. Pero no hay que subestimar lo sencillo que son sus ingredientes, es un plato donde priman equilibrios y armonías delicados que cabe respetar con amor y atención."
	},
	{
		id: 2,
		nombre: "Risotto de berenjena",
		detalle: "Risotto de berenjena y queso de cabra",
		precio: 47.00,
		imagen: "Risotto-berenjena-queso-cabra.jpg",
		resumen: "Risotto de berenjenas. Vestibulum id tellus sem. Phasellus suscipit justo urna, non maximus nisi mattis et. Quisque sollicitudin tempor urna non tincidunt. Ut nec cursus ante. Aenean blandit risus ut ultrices pretium. Vestibulum eu eros sem. Aliquam commodo nisl urna, ut tempor nulla imperdiet sed. Cras id nibh in neque lacinia dignissim sed lobortis orci. Aliquam erat volutpat. "

	},
	{
		id: 3,
		nombre: "Mousse de arroz",
		detalle: "Mousse de arroz con leche y aroma de azahar",
		precio: 27.50,
		imagen: "Mousse-de-arroz-con-leche.jpg",
		resumen: "El mouse de arroz con leche Pellentesque massa nulla, faucibus id consectetur sodales, volutpat vel metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus sit amet efficitur nulla, eu tincidunt nisl. Sed eget luctus nisl. Morbi mollis lorem vitae neque placerat, at imperdiet orci dignissim."
	},
	{
		id: 4,
		nombre: "Espárragos blancos",
		detalle: " Espárragos blancos con vinagreta de verduras y jamón ibérico",
		precio: 37.50,
		imagen: "esparragos.png",
		resumen: "Los esparragos con deliciosos. Etiam in ligula quis magna mattis dictum. Mauris laoreet diam sem, a feugiat nunc placerat nec. In consequat sollicitudin tincidunt. Integer sed quam sagittis, fermentum est sit amet, ullamcorper metus. "
	},
];

const indexController = {

	index: function (req, res) {
		res.render("index");
	},

	detalle: function (req, res) {

		const id = req.params.id;

		if (id) {
			menuItemsSeleccion = menuItems.filter(item => {
					return item.id == id;
			});
			
			res.render("detalleMenuAmpliado", {menuItems: menuItemsSeleccion});
		} else {

			res.render("detalleMenu", {menuItems: menuItems});

		}
		
	},
	
	// detalleItem: function (req, res) {

	// 	const id = req.params.id;

	// 	menuItemsSeleccion = menuItems.filter(item => {
	// 			return item.id == id;
	// 	});

	// 	res.render("detalleMenuAmpliado", {menuItems: menuItemsSeleccion});

	// }

}

module.exports = indexController;


