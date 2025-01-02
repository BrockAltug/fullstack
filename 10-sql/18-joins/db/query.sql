-- WRITE THE CODE HERE 
SELECT * 
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;