const db = require('../config/database');

exports.login = async(req, res) => {
    console.log("userController called");
    console.log(req.body);
    const query = `SELECT ten_nguoi_dung FROM nguoi_dung WHERE ten_nguoi_dung=${req.body.user_name} and mat_khau=${req.body.password}`
    console.log(query);
    const response = await db.query(
        "SELECT ten_nguoi_dung, mat_khau FROM nguoi_dung WHERE ten_nguoi_dung=$1 and mat_khau=$2", [req.body.user_name, req.body.password]
    );
    res.status(200).send(response.rows);
}

exports.signup = async(req, res) => {
    console.log("signup called");
    const query = `INSERT INTO nguoi_dung (ten_nguoi_dung, mat_khau) VALUES ('${req.body.username}', '${req.body.password}')`;
    console.log(query);
    const response = await db.query(
        query
    );
    console.log(response);
    if (response) {
        res.status(200).send({
            message: "Success",
        });
    }
}