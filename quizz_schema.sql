use quizzy;
CREATE TABLE quizz (
	id int auto_increment,
    theme varchar(50) not null,
    owner varchar(50) not null,
    questionNum int not null,
    primary key(id)
);

CREATE TABLE players (
	id int auto_increment,
	username varchar(50) not null,
    team varchar(50) not null,
    quizzId int not null,
    score int default 0,
	primary key(id),
    foreign key(quizzId) references quizz(id)
);

CREATE TABLE questions (
	id int auto_increment,
    title varchar(200) not null,
    A varchar(100),
    B varchar(100),
    C varchar(100),
    D varchar(100),
    correctQuestion char not null,
    quizzId int not null,
    primary key(id),
    foreign key(quizzId) references quizz(id)
)