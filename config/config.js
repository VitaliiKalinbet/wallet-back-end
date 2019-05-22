module.exports = {
  MondoDB: {
    url: "paste your url"
  },
  client: {
    development: {
      url: "http://localhost",
      port: "5000"
    }
  },
  jwt_encryption: process.env.JWT_ENCRYPTION || "jwt_please_change",
  jwt_expiration: process.env.JWT_EXPIRATION || 10000
};
