INSERT INTO role (id,nombre) VALUES(1,'ADMIN');
INSERT INTO role (id,nombre) VALUES(2,'PROFESOR');
INSERT INTO role (id,nombre) VALUES(3,'ALUMNO');

INSERT INTO usuario(id,apellidos,email,nombre,password,user) VALUES(1,'García García','admin@tfg.com','Administrador','$2a$10$agHuWbtWZVAt3ATyK.jNe.JiXV6A3SGoT3e2Ir8Ytp/n4hr4dQM12','admin');
INSERT INTO usuario(id,apellidos,email,nombre,password,user) VALUES(2,'Morote Herrero','profesor1@tfg.com','Manuel','$2a$10$O9SjDJUe7xb3m6aVWq4ife2.me87h2VNRnitTXB2sev011bFwtTXW','profesor1');
INSERT INTO usuario(id,apellidos,email,nombre,password,user) VALUES(3,'Monllor Alcaraz','profesor2@tfg.com','Javier','$2a$10$O9SjDJUe7xb3m6aVWq4ife2.me87h2VNRnitTXB2sev011bFwtTXW','profesor2');
INSERT INTO usuario(id,apellidos,email,nombre,password,user) VALUES(4,'Gironés García','profesor3@tfg.com','Álvaro','$2a$10$O9SjDJUe7xb3m6aVWq4ife2.me87h2VNRnitTXB2sev011bFwtTXW','profesor3');
INSERT INTO usuario(id,apellidos,email,nombre,password,user) VALUES(5,'González García','alumno@tfg.com','Juanito','$2a$10$S4ZeBHyCuu3LEzr9XrkGA.VAdREKOp/HHK2gLu.z1iHzY9bns5x72','alumno');

INSERT INTO usuario_roles(usuarios_id,roles_id) VALUES(1,1);
INSERT INTO usuario_roles(usuarios_id,roles_id) VALUES(2,2);
INSERT INTO usuario_roles(usuarios_id,roles_id) VALUES(3,2);
INSERT INTO usuario_roles(usuarios_id,roles_id) VALUES(4,2);
INSERT INTO usuario_roles(usuarios_id,roles_id) VALUES(5,3);

INSERT INTO asignatura (id,curso,nombre,descripcion,profesor_id) VALUES (1,'1º','Matemáticas','aaaaaaaaaaaa',2);
INSERT INTO asignatura (id,curso,nombre,descripcion,profesor_id) VALUES (2,'1º','Historia','aaaaaaaaaaa',3);
INSERT INTO asignatura (id,curso,nombre,descripcion,profesor_id) VALUES (3,'1º','Física y Química','aaaaaaaaa',2);
INSERT INTO asignatura (id,curso,nombre,descripcion,profesor_id) VALUES (4,'1º','Castellano','aaaaaaaaaaaa',4);

INSERT INTO asignatura (id,curso,nombre,descripcion,profesor_id) VALUES (5,'2º','Matemáticas','aaaaaaaaaaaa',2);
INSERT INTO asignatura (id,curso,nombre,descripcion,profesor_id) VALUES (6,'2º','Historia','aaaaaaaaaaa',3);
INSERT INTO asignatura (id,curso,nombre,descripcion,profesor_id) VALUES (7,'2º','Física y Química','aaaaaaaaa',2);
INSERT INTO asignatura (id,curso,nombre,descripcion,profesor_id) VALUES (8,'2º','Castellano','aaaaaaaaaaaa',4);

INSERT INTO asignatura (id,curso,nombre,descripcion,profesor_id) VALUES (9,'3º','Matemáticas','aaaaaaaaaaaa',2);
INSERT INTO asignatura (id,curso,nombre,descripcion,profesor_id) VALUES (10,'3º','Historia','aaaaaaaaaaa',3);
INSERT INTO asignatura (id,curso,nombre,descripcion,profesor_id) VALUES (11,'3º','Física y Química','aaaaaaaaa',2);
INSERT INTO asignatura (id,curso,nombre,descripcion,profesor_id) VALUES (12,'3º','Castellano','aaaaaaaaaaaa',4);

INSERT INTO usuario_asignaturas_impartidas (usuario_id,asignaturas_impartidas_id) VALUES (2,1);
INSERT INTO usuario_asignaturas_impartidas (usuario_id,asignaturas_impartidas_id) VALUES (3,2);
INSERT INTO usuario_asignaturas_impartidas (usuario_id,asignaturas_impartidas_id) VALUES (2,3);
INSERT INTO usuario_asignaturas_impartidas (usuario_id,asignaturas_impartidas_id) VALUES (4,4);

INSERT INTO usuario_asignaturas_impartidas (usuario_id,asignaturas_impartidas_id) VALUES (2,5);
INSERT INTO usuario_asignaturas_impartidas (usuario_id,asignaturas_impartidas_id) VALUES (3,6);
INSERT INTO usuario_asignaturas_impartidas (usuario_id,asignaturas_impartidas_id) VALUES (2,7);
INSERT INTO usuario_asignaturas_impartidas (usuario_id,asignaturas_impartidas_id) VALUES (4,8);

INSERT INTO usuario_asignaturas_impartidas (usuario_id,asignaturas_impartidas_id) VALUES (2,9);
INSERT INTO usuario_asignaturas_impartidas (usuario_id,asignaturas_impartidas_id) VALUES (3,10);
INSERT INTO usuario_asignaturas_impartidas (usuario_id,asignaturas_impartidas_id) VALUES (2,11);
INSERT INTO usuario_asignaturas_impartidas (usuario_id,asignaturas_impartidas_id) VALUES (4,12);
