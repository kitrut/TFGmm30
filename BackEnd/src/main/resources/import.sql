INSERT INTO role (id,nombre) VALUES(1,'ADMIN');
INSERT INTO role (id,nombre) VALUES(2,'PROFESOR');
INSERT INTO role (id,nombre) VALUES(3,'ALUMNO');

INSERT INTO usuario(id,apellidos,email,nombre,password,user) VALUES(1,'García García','admin@tfg.com','Administrador','$2a$10$agHuWbtWZVAt3ATyK.jNe.JiXV6A3SGoT3e2Ir8Ytp/n4hr4dQM12','admin');
INSERT INTO usuario(id,apellidos,email,nombre,password,user) VALUES(2,'Morote Herrero','profesor1@tfg.com','Manuel','$2a$10$O9SjDJUe7xb3m6aVWq4ife2.me87h2VNRnitTXB2sev011bFwtTXW','profesor');
INSERT INTO usuario(id,apellidos,email,nombre,password,user) VALUES(3,'González García','alumno@tfg.com','Juanito','$2a$10$S4ZeBHyCuu3LEzr9XrkGA.VAdREKOp/HHK2gLu.z1iHzY9bns5x72','alumno');

INSERT INTO usuario_roles(usuarios_id,roles_id) VALUES(1,1);
INSERT INTO usuario_roles(usuarios_id,roles_id) VALUES(2,2);
INSERT INTO usuario_roles(usuarios_id,roles_id) VALUES(3,3);