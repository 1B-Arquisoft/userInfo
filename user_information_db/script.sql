CREATE DATABASE if not exists USER_INFORMATION;
USE USER_INFORMATION;
CREATE TABLE auth (
	id varchar(100) NOT NULL,
	username varchar(100) NOT NULL,
	password varchar(100) NOT NULL,
	PRIMARY KEY(id)
);
CREATE TABLE user (
	id varchar(100) NOT NULL,
	username varchar(100) NOT NULL UNIQUE,
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

INSERT INTO auth (id, username, password) VALUES('1192922977', 'lceballosa', '$2b$05$gQwVmgO2euIRuxXj7dM0duNr4FoR2/S33ElhT0pkLc5FX7xUkqxhi');
INSERT INTO auth (id, username, password) VALUES('1000234543', 'nvalderramas', '$2b$05$gQwVmgO2euIRuxXj7dM0duNr4FoR2/S33ElhT0pkLc5FX7xUkqxhi');
INSERT INTO auth (id, username, password) VALUES('11023456765', 'danperez', '$2b$05$gQwVmgO2euIRuxXj7dM0duNr4FoR2/S33ElhT0pkLc5FX7xUkqxhi');
INSERT INTO auth (id, username, password) VALUES('10034235353', 'juromerop', '$2b$05$gQwVmgO2euIRuxXj7dM0duNr4FoR2/S33ElhT0pkLc5FX7xUkqxhi');
INSERT INTO auth (id, username, password) VALUES('1023456234', 'dasilvaca', '$2b$05$gQwVmgO2euIRuxXj7dM0duNr4FoR2/S33ElhT0pkLc5FX7xUkqxhi');
INSERT INTO auth (id, username, password) VALUES('1023432432', 'rdguarnizo', '$2b$05$gQwVmgO2euIRuxXj7dM0duNr4FoR2/S33ElhT0pkLc5FX7xUkqxhi');


INSERT INTO `user` (id, username, name, rol, email, institution_email, address, cellphone_number, born_date) VALUES('1192922977', 'lceballosa', 'Laura Valentina Ceballos Aguilar', 'student', 'lau.ceballos00@gmail.com', 'lceballosa@unal.edu.co', 'calle 23d 45 67', '3002956655', '2000-05-30');
INSERT INTO `user` (id, username, name, rol, email, institution_email, address, cellphone_number, born_date) VALUES('1000234543', 'nivalderramas', 'Nicolás Ricardo Valderrama Solano', 'student', 'nico_crack@gmail.com', 'nivalderramas@unal.edu.co', 'carrera 1 11 23', '3143153465', '2001-04-20');
INSERT INTO `user` (id, username, name, rol, email, institution_email, address, cellphone_number, born_date) VALUES('11023456765', 'danperez', 'Daniel Esteban Pérez Mahecha', 'student', 'perapro@gmail.com', 'danperez@unal.edu.co', 'carrera 1 11 23', '3213459802', '2002-06-16');
INSERT INTO `user` (id, username, name, rol, email, institution_email, address, cellphone_number, born_date) VALUES('10034235353', 'juromerop', 'Juan Pablo Romero ', 'student', 'jp_2000@gmail.com', 'juromerop@unal.edu.co', 'calle 24 29d 97', '3203456799', '2000-10-13');
INSERT INTO `user` (id, username, name, rol, email, institution_email, address, cellphone_number, born_date) VALUES('1023456234', 'dasilvaca', 'Daniel Santiago Silva Capera', 'student', 'daniels_cap@gmail.com', 'dasilvaca@unal.edu.co', 'calle 300 500 29', '3005256790', '2001-11-23');
INSERT INTO `user` (id, username, name, rol, email, institution_email, address, cellphone_number, born_date) VALUES('1023432432', 'rdguarnizo', 'Ruben Rario Guarnizo', 'student', 'ruben_guarnizo@gmail.com', 'rdguarnizo@unal.edu.co', 'carrera 34 85 19', '3203224554', '2000-02-20');


