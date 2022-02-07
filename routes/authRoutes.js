const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/api/current_user')
  });

  app.get('/api/logout', (req, res) => {
    req.logout(); // added automatically by passport
    res.send(`Logged out. Current user: ${req.user}`);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
