CREATE TABLE auth (
	id varchar(100) NOT NULL,
	username varchar(100) NOT NULL,
	password varchar(100) NOT NULL,
	PRIMARY KEY(id)
);
CREATE TABLE user (
	id varchar(100) NOT NULL,
	username varchar(100) NOT NULL,
	name varchar(100) NOT NULL,
	rol varchar(100) NOT NULL DEFAULT 'student',
	PRIMARY KEY (id),
	FOREIGN KEY (id) REFERENCES auth(id)
);

