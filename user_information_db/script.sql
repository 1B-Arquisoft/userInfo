CREATE DATABASE if not exists USER_INFORMATION;
USE USER_INFORMATION;
USE USER_INFORMATION;
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
	email varchar(100) NOT NULL DEFAULT 'new_student@gmail.com',
	institution_email varchar(100) NOT NULL DEFAULT '@unal.edu.co',
	address varchar(100) NOT NULL DEFAULT '@unal.edu.co',
	cellphone_number varchar(100),
	born_date date,
	PRIMARY KEY (id),
	FOREIGN KEY (id) REFERENCES auth(id)
);

