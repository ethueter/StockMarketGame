/*
create table users
(
	id integer(5) NOT NULL,
	username varchar(45),
	password varchar(45),
	games integer,
	created timestamp(0),
	last_login_date date DEFAULT GETDATE(),
	archived boolean DEFAULT 0,
	primarykey(id)
);
*/
INSERT INTO USERS (id, username, password, games)
VALUES (10000, 'Ashwin', 'pwd', 0);

INSERT INTO USERS (id, username, password, games)
VALUES (10001, 'Tyler', '123', 2);
INSERT INTO USERS (id, username, password, games)
VALUES (10003, 'Player3', '000', 4);