const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const { protect } = require("../middleware/authMiddleware");

// Protect all routes
router.use(protect);

router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.put("/:id", bookController.updateBookById);
router.delete("/:id", bookController.deleteBookById);

module.exports = router;
