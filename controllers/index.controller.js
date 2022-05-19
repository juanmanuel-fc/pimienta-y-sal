const menuItems = [
	{
		id: 1,
		nombre: "Carpaccio fresco",
		detalle: "Entrada Carpaccio de salmón con cítricos",
		precio: 65.50,
	},
	{
		id: 2,
		nombre: "Risotto de berenjena",
		detalle: "Risotto de berenjena y queso de cabra",
		precio: 47.00,
	},
	{
		id: 3,
		nombre: "Mousse de arroz",
		detalle: "Mousse de arroz con leche y aroma de azahar",
		precio: 27.50,
	},
	{
		id: 4,
		nombre: "Espárragos blancos",
		detalle: " Espárragos blancos con vinagreta de verduras y jamón ibérico",
		precio: 37.50,
	},
];

const indexController = {

	index: function (req, res) {
		res.render("index");
	},

	detalle: function (req, res) {
		res.render("detalleMenu", {menuItems: menuItems});
	}

}

module.exports = indexController;


