import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    console.log("Books fetched from database:", books); // Debug log
    res.status(200).json(books);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json(error);
  }
};
