const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { getTickets } = require("../controllers/adminController");

router.get("/tickets", protect, getTickets);

module.exports = router;