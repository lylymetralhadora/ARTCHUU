create database artchuu;
use artchuu;

create table usuarios(
	id INT PRIMARY KEY auto_increment,
	nome VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);    
    
create table artes(
	id			 INT auto_increment primary key,
	arte		 VARCHAR(255),
    legenda		 VARCHAR(255) NOT NULL,
    venda		 boolean default false,
    preco		 float,
    created_at   timestamp default current_timestamp,
    usuario_id	 int not null,    
    foreign key(usuario_id) references usuarios(id)
);
    
create table curtidas(
	id 			 INT auto_increment primary key,
	usuario_id	 INT,
	arte_id		 INT,
	data 		 timestamp default current_timestamp,
	foreign key(arte_id) references artes(id),
	foreign key(usuario_id) references usuarios(id)
);

create table comentarios(
id 		INT auto_increment primary key,
content varchar(255),
usuario_id int,
id_arte int,
foreign key(usuario_id) references usuarios(id),
foreign key(id_arte) references artes(id)
);

select * from artes;

SELECT * FROM artchuu.artes;
drop table artchuu.artes;
SELECT * FROM artchuu.usuarios;
SELECT * FROM artchuu.comentarios;
SELECT usuarios.nome, comentarios.* FROM comentarios INNER JOIN usuarios ON usuario_id = 1;
drop table artchuu.usuarios;
alter table artes add foreign key(comentario_id) references comentarios(id);
alter table artes add column comentario_id int;
use artchuu;
SELECT usuarios.nome, comentarios.*
    FROM comentarios
    INNER JOIN usuarios ON usuarios.id = comentarios.usuario_id
    INNER JOIN artes ON artes.id = comentarios.id_arte
    WHERE comentarios.usuario_id = usuarios.id AND comentarios.id_arte = 1;