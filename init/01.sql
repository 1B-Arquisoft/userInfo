CREATE TABLE auth (
	id varchar(20) NOT NULL,
	username varchar(20) NOT NULL,
	password varchar(20) NOT NULL,
	PRIMARY KEY(id)
);
CREATE TABLE user (
	id varchar(20) NOT NULL,
	username varchar(20) NOT NULL,
	name varchar(20) NOT NULL,
	rol varchar(20) NOT NULL DEFAULT 'student',
	PRIMARY KEY (id),
	FOREIGN KEY (id) REFERENCES auth(id)
);

