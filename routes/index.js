const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const staticRoutes = require('./staticRoutes');

router.use(apiRoutes);
router.use(staticRoutes);

module.exports = router;