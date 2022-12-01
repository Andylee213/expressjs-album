# expressjs-album

Dynamic Photo Album With nodejs &amp; express js

To run this sample express js project, you have to

- install mariadb database server on your computer
- create a database named `albums`
- create new database user `dbuser` and assign password `123321`
- create table `photo' and insert photo records with the following SQL statement

```
DROP TABLE IF EXISTS photo;
CREATE TABLE photo (
	id int PRIMARY KEY,
	title varchar(20),
	category varchar(20),
	taken_by varchar(20),
	file_name varchar(30)
);

INSERT INTO photo
VALUES
(1, 'Photo 1', 'landscape', 'Sunny', 'photo01.png'),
(2, 'Photo 2', 'landscape', 'Sunny', 'photo02.png'),
(3, 'Photo 3', 'landscape', 'Sunny', 'photo03.png'),
(4, 'Photo 4', 'landscape', 'Sunny', 'photo04.png'),
(5, 'Photo 5', 'landscape', 'Sunny', 'photo05.png'),
(6, 'Photo 6', 'landscape', 'Sunny', 'photo06.png'),
(7, 'Photo 7', 'landscape', 'Sunny', 'photo07.png'),
(8, 'Photo 8', 'landscape', 'Sunny', 'photo08.png'),
(9, 'Photo 9', 'landscape', 'Sunny', 'photo09.png'),
(10, 'Photo 10', 'landscape', 'Sunny', 'photo10.png'),
(11, 'Photo 11', 'landscape', 'Sunny', 'photo11.png'),
(12, 'Photo 12', 'landscape', 'Sunny', 'photo12.png'),
(13, 'Photo 12', 'people', 'Sunny', 'photo13.png'),
(14, 'Photo 12', 'people', 'Sunny', 'photo14.png'),
(15, 'Photo 12', 'people', 'Sunny', 'photo15.png'),
(16, 'Photo 12', 'people', 'Sunny', 'photo16.png');
```
