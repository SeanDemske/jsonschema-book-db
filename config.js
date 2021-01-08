/** Common config for bookstore. */


let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql://postgres:developer@localhost:5432/books_test";
} else {
  DB_URI = process.env.DATABASE_URL || "postgresql://postgres:developer@localhost:5432/books";
}


module.exports = { DB_URI };