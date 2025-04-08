const Book = require("../models/Book");

// Create
exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: "Failed to create book", error: err.message });
  }
};

// Read all
exports.getAllBooks = async (req, res) => {
    try {
      const { author, category, rating, search } = req.query;
  
      // Build filter object dynamically
      let filter = {};
  
      if (author) filter.author = author;
      if (category) filter.category = category;
      if (rating) filter.rating = Number(rating);
      if (search) {
        filter.title = { $regex: search, $options: "i" }; // case-insensitive partial match
      }
  
      const books = await Book.find(filter);
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch books", error: err.message });
    }
  };
  

// Read by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: "Invalid book ID" });
  }
};

// Update
exports.updateBookById = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Book not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Failed to update book" });
  }
};

// Delete
exports.deleteBookById = async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete book" });
  }
};
