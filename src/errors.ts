export const handleError = (fields, err, callback) => {
  if (err.includes('ReqValidationError')) {
    for (let field of fields) {
      if (err.includes(field)) {
        return callback(`Invalid ${field}`);
      }
    }
  } else {
    return callback(err);
  }
};
