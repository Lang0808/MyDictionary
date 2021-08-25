const db = require('../config/database');

exports.addWord = async(req, res) => {
    const response = await db.query(
        "INSERT INTO word(nguoi_dung, ngon_ngu_1, ngon_ngu_2, tu_1, tu_2) VALUES ($1, $2, $3, $4, $5)", [req.body.user, req.body.ngon_ngu_1, req.body.ngon_ngu_2, req.body.tu_1, req.body.tu_2]
    );
    res.status(200).send({
        message: 'Add word successfully'
    });
}

exports.searchWord = async(req, res) => {
    const response = await db.query(
        "SELECT * FROM word WHERE nguoi_dung=$1 AND tu_1=$2", [req.body.user, req.body.word]
    );
    res.status(200).send(response.rows);
}

exports.getRandomTen = async(req, res) => {
    const response = await db.query(
        "SELECT * FROM word  WHERE nguoi_dung=$1 ORDER BY RANDOM() LIMIT 10", [req.body.user]
    );
    res.status(200).send(response.rows);
}