
const indexController = {

	index: function (req, res) {
		res.render("index");
	},

	detalle: function (req, res) {
		res.render("detalleMenu");
	}

}

module.exports = indexController;
