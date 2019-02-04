const express = require('express'),
    router = express.Router({ mergeParams: true }),
    { createMessage, getMessage, deleteMessage } = require('../handlers/message');

//prefix - /api/users/:id/message
router.route("/").post(createMessage);
//prefix - /api/users/:id/message/:message_id
router.route("/:message_id").get(getMessage);
router.route("/:message_id").delete(deleteMessage);

module.exports = router;