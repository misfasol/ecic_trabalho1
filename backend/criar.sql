create schema trabalho1;
drop schema trabalho1;
use trabalho1;

create table trabalho1.usuarios (
	id int primary key auto_increment not null,
    nome varchar(100),
    email varchar(100),
    cpf varchar(11),
    genero varchar(1),
    endereco varchar(200)
);

insert into trabalho1.usuarios values (null, "kevi", "ke@gmail.com", "00000000001", "m", "rua dele");
insert into trabalho1.usuarios values (null, "igor", "igro@gmail.com", "00000000002", "m", "rua dois");
insert into trabalho1.usuarios values (null, "jona", "joas@gmail.com", "00000000002", "m", "rua colo");

delete from trabalho1.usuarios where id = 1;

update trabalho1.usuarios set trabalho1.usuarios.nome = "noi", trabalho1.usuarios.email = "email@gmail.com" where trabalho1.usuarios.id = 55;

select * from trabalho1.usuarios;
