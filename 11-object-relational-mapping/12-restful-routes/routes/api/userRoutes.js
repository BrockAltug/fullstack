const router = require('express').Router();
const User = require('../../models/User');

// TODO: Implement each of the three routes below using `async/await`
// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
});

// UPDATE a user
router.put('/:id', async (req, res) => {
});

// DELETE a user
router.delete('/:id', async (req, res) => {
});

module.exports = router;
