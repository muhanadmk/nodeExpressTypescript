import db from '../db-config';

exports.findAllUser = (req, res, next) => {
  db.query(
    'SELECT * FROM users',
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      console.log(result)
      res.status(200).json(result);
    }
  );
};

