module.exports = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 3000,
  error: {
    ok: 200,
    created: 201,
    badRequest: 400,
    forbidden: 403,
    notFound: 404,
    internalError: 500,
  },
  challenges: {
    port: process.env.PORT || 8000,
  },
};
