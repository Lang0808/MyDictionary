CREATE DATABASE MyDictionary;

CREATE TABLE nguoi_dung (
    ten_nguoi_dung varchar(50) primary key,
    mat_khau varchar(50)
);

CREATE TABLE word (
	id serial primary key,
	nguoi_dung varchar(50),
	ngon_ngu_1 varchar(50),
	ngon_ngu_2 varchar(50),
	tu_1 varchar(200),
	tu_2 varchar(200),
	unique(nguoi_dung, ngon_ngu_1, ngon_ngu_2, tu_1)
);

ALTER TABLE word
ADD
CONSTRAINT FK_WORD_USER foreign key(nguoi_dung) references nguoi_dung(ten_nguoi_dung);
