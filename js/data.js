//Программа обучения детей программированию

const
    listPart={
        listBat: {
            descript: ["Batch", "Bat - везде под рукой"],
            content: [
                ["Hello World!", 2018, bat, n, "img/bat/bat01.png", "Первая программа. На любом компьютере. Без скачиваний и установок. В блокноте и на bat-нике."],
                ["Проверка пароля", 2018, bat, n, "img/bat/bat02.png", "Простейшая логика любой программы. Ввод - проверка ввода - вывод в зависимости от результате проверки."],
                ["Строковый калькулятор", 2018, bat, n, "img/bat/bat03.png", "Еще одна простая логика. Ввод - обработка данных - вывод результата."],
                ["Треугольник нарастающий", 2018, bat, np, "img/bat/bat04.png", "Наглядный пример работы цикла с счетчиком."],
                ["Треугольник убывающий", 2018, bat, np, "img/bat/bat05.png", "Работа цикла с отсчетом в обратном порядке."],
                ["Квадрат", 2018, bat, np, "img/bat/bat06.png", "Совмещение работы разных циклов. Признаки повторения кода."],
                ["Больше-меньше", 2018, bat, np, "img/bat/bat07.png", "Простейшая консольная игра с рандомом, выбором из 2 вариантов и выводом результата."],
                ["Камень-ножницы-бумага", 2018, bat, np, "img/bat/bat08.png", "Простая консольная игра с выбором из 3 вариантом и комбинированной логикой."],
                ["Анимация", 2018, bat, np, "img/bat/bat09.png", "Анимация в консоли - выходим за рамки стандартного программирования."],
                ["Очистка папки temp", 2019, bat, np, "img/bat/bat10.png", "Простая и полезная программка."]
            ]
        },
        listCpp: {
            descript: ["C++", "C/C++ - что под капотом"],
            content: [
                ["Hello World!", 2018, Cpp, vs, "img/cpp/cpp10.png", "Традиционное знакомство с C++."],
                ["Больше-меньше", 2018, Cpp, vs, "img/cpp/cpp11.png", "Применяем goto и метки, прежде чем перейти к функциям."],
                ["Таблица умножения", 2018, Cpp, vs, "img/cpp/cpp12.png", "Практическое применение функций."]
            ]
        },
        listJS: {
            descript: ["JavaScript", "JavaScript - два в одном"],
            content: [
                ["Змейка", 2018, js, np, "img/JS/Snake.png", "Игра \"Змейка\" - легендарная классика электронных игр."],
                ["Жизнь", 2021, js, vsc, "img/JS/Life.jpg", "Игра \"Жизнь\" - знакомство с клеточными автоматами."],
                ["Звезды", 2021, js, vsc, "img/JS/Stars.jpg", "Знакомство с анимацией для украшений веб-страниц."],
                ["Муравейник", 2021, js, vsc, "img/JS/Anthill.jpg", "Симулятор муравейника."]
            ]
        },
        listJava: {
            descript: ["Java", "Java - кровавый энтерпрайз"],
            content: [
                ["Tetris", 2019, java, np, "img/Java/Tetrs.jpg", "Классический тетрис с выводом результатов в системе чемпионата."],
                ["Space zombie", 2019, java, as, "img/Java/AS_Java_KNB.jpg", "Описание 222 ..."],
                ["Прога lang4_03", 2019, java, as, "img/Java/AS_Java_KNB.jpg", "Описание 333 ..."],
                ["Прога lang4_04", 2019, java, as, "img/Java/AS_Java_KNB.jpg", "Описание 444 ..."],
                ["Прога lang4_05", 2019, java, as, "img/Java/AS_Java_KNB.jpg", "Описание 555 ..."],
                ["Прога lang4_06", 2019, java, as, "img/Java/AS_Java_KNB.jpg", "Описание 666 ..."],
                ["Прога lang4_07", 2019, java, as, "img/Java/AS_Java_KNB.jpg", "Описание 777 ..."],
                ["Прога lang4_08", 2019, java, as, "img/Java/AS_Java_KNB.jpg", "Описание 888 ..."],
                ["Прога lang4_09", 2019, java, as, "img/Java/AS_Java_KNB.jpg", "Описание 222 ..."],
                ["Прога lang4_10", 2019, java, as, "img/Java/AS_Java_KNB.jpg", "Описание 333 ..."],
                ["Прога lang4_11", 2019, java, as, "img/Java/AS_Java_KNB.jpg", "Описание 999 ..."]
            ]
        },
        listPas: {
            descript: ["Pascal", "Pascal - язык мертвых"],
            content: [
                ["Прога lang5_01", 2018, bat, np, "img/bat/bat01.png", "Описание 111 ..."],
                ["Прога lang5_02", 2019, bat, np, "img/bat/bat02.png", "Описание 222 ..."],
                ["Прога lang5_03", 2020, bat, np, "img/bat/bat03.png", "Описание 333 ..."],
                ["Прога lang5_04", 2026, bat, np, "img/bat/bat09.png", "Описание 999 ..."]
            ]
        },
        listCS: {
            descript: ["С#", "С# - где ты раньше был"],
            content: [
                ["Прога lang6_01", 2018, bat, np, "img/bat/bat01.png", "Описание 111 ..."],
                ["Прога lang6_02", 2019, bat, np, "img/bat/bat02.png", "Описание 222 ..."],
                ["Прога lang6_03", 2020, bat, np, "img/bat/bat03.png", "Описание 333 ..."],
                ["Прога lang6_04", 2026, bat, np, "img/bat/bat09.png", "Описание 999 ..."]
            ]
        },
        listPy: {
            descript: ["Python", "Python - наша прелесть для олимпийцев"],
            content: [
                ["Прога lang7_01", 2018, bat, np, "img/bat/bat01.png", "Описание 111 ..."],
                ["Прога lang7_02", 2019, bat, np, "img/bat/bat02.png", "Описание 222 ..."],
                ["Прога lang7_03", 2020, bat, np, "img/bat/bat03.png", "Описание 333 ..."],
                ["Прога lang7_04", 2026, bat, np, "img/bat/bat09.png", "Описание 999 ..."]
            ]
        },
    };
