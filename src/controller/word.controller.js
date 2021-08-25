const db = require('../config/database');

exports.addWord = async(req, res) => {
    const response = await db.query(
        "INSERT INTO word(nguoi_dung, ngon_ngu_1, ngon_ngu_2, tu_1, tu_2) VALUES ($1, $2, $3, $4, $5)", [req.body.user, req.body.ngon_ngu_1, req.body.ngon_ngu_2, req.body.tu_1, req.body.tu_2]
    );
    res.status(200).send({
        message: 'Add word successfully'
    });
}