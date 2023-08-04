module.exports = {
    index : (req,res) => {
        return res.render("products/products", {
            title : "Productos"
        })
    },
    detail : (req,res) => {
        
        const id = req.params.id;

        return res.send('Muestro el producto con ID ' + id)
    }
}