-- TODO: What is the SQL code below doing?
-- this is inserting data into the biographies table in the books_db database for the columns id and name
INSERT INTO biographies (id, name) 
-- this is the data that is being inserted into the biographies table
VALUES
-- the values are for id and name 
    ( 001, 'Diary of Anne Frank'),
    ( 002, 'Frida: A Biography of Frida Kahlo'),
    ( 003, 'Long Walk to Freedom');

-- this selects all the data from the biographies table in the books_db database
SELECT * FROM biographies;
