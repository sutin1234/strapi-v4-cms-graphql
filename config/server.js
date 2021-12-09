module.exports = ({ env }) => ({
  host: env('APP_HOST', '0.0.0.0'),
  url: env('MY_HEROKU_URL'),
  port: env.int('NODE_PORT', 3000),
});
