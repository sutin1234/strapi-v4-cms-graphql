module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5fba4001b68062197e4774ace767f2d6'),
  },
});
