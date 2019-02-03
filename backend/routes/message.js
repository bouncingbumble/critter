const express = require('express'),
    router = express.Router({ mergeParams: true }),
    { createMessage, getMessage } = require('../handlers/message');

//prefix - /api/users/:id/message
router.route("/").post(createMessage);
router.route("/").get(getMessage);

module.exports = router;