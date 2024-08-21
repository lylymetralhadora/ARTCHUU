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