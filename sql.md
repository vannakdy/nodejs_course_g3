+ INSERT INOT 
    INSERT INTO customer 
    (firstname,lastname,gender,email,tel,status)
    VALUES
    ('Ly','Join',1,'join111@gmail.com','09999999',1)
+ SELECT
    SELECT * FROM customer;
    SELECT firstname , lastname FROM customer;
    SELECT * FROM customer WHERE customer_id = 1;
    SELECT * FROM customer WHERE status = 0 AND gender = 1;
+ UPDATE 
    UPDATE customer SET gender = 0 , status = 0 WHERE customer_id = 1;
+ DELETE
    DELETE FROM customer WHERE customer_id = 3;