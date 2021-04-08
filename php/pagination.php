<?php
    // Подключение к БД
    $db = mysql_connect("localhost", "root", "");
    mysql_select_db("phpsite", $db);
    mysql_query("SET NAMES 'utf8'", $db);

    /*
    $kol - количество записей для вывода
    $art - с какой записи выводить
    $total - всего записей
    $page - текущая страница
    $str_pag - количество страниц для пагинации
    */

    // Пагинация

    // Текущая страница
    if (isset($_GET['page'])){
        $page = $_GET['page'];
    }else {
        $page = 1
    };

    $kol = 3;  // количество записей для вывода
    $art = ($page * $kol) - $kol;
    echo $art;

    // Определяем все количество записей в таблице
    $res = mysql_query("SELECT COUNT(*) FROM `lessons`");
    $row = mysql_fetch_row($res);
    $total = $row[0]; // всего записей
    echo $total;

    // Количество страниц для пагинации
    $str_pag = ceil($total / $kol);
    echo $str_pag;

    // формируем пагинацию
    for ($i = 1; $i <= $str_pag; $i++){
        echo "<a href=lessons.php?page=".$i."> Страница ".$i." </a>";
    }

    // Запрос и вывод записей
    $result = mysql_query("SELECT * FROM `lessons` LIMIT $art,$kol", $db);
    $myrow = mysql_fetch_array($result);
    do{
        echo "<h2>".$myrow['title']."</h2>";
        echo "<p>".$myrow['text']."</p>";
    } while ($myrow = mysql_fetch_array($result));