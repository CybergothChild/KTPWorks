var groupmates = [
    {
    "name": "Матвей",
    "group": "1702",
    "age": 20,
    "marks": [4, 3, 5, 5, 4]
    },
{
    "name": "Елизавета",
    "group": "1701",
    "age": 18,
    "marks": [5, 5, 5, 5, 5]
    },
{
    "name": "Георгий",
    "group": "1702",
    "age": 20,
    "marks": [3, 5, 4, 3, 5]
    },
{
    "name": "Олег",
    "group": "1702",
    "age": 19,
    "marks": [5, 5, 5, 4, 5]
    },
{
    "name": "Вячеслав",
    "group": "1702",
    "age": 20,
    "marks": [5, 5, 5, 5, 5]
    },
{
    "name": "Карина",
    "group": "1703",
    "age": 19,
    "marks": [3, 3, 3, 4, 3]
    },
{
    "name": "Иван",
    "group": "1703",
    "age": 18,
    "marks": [4, 3, 3, 4, 3]
    },
];

console.log(groupmates);

var rpad = function(str, length) {
    // js не поддерживает добавление нужного количества символов
    // справа от строки то есть аналога ljust из языка Python здесь нет
    str = str.toString(); // преобразование в строку
    while (str.length < length)
    str = str + ' '; // добавление пробела в конец строки
    return str; // когда все пробелы добавлены, возвратить строку
};
var printStudents = function(students){
    console.log(
    rpad("Имя студента", 15),
    rpad("Группа", 8),
    rpad("Возраст", 8),
    rpad("Оценки", 20)
);
// был выведен заголовок таблицы
for (var i = 0; i<=students.length-1; i++){
    // в цикле выводится каждый экземпляр студента
    console.log(
    rpad(students[i]['name'], 15),
    rpad(students[i]['group'], 8),
    rpad(students[i]['age'], 8),
    rpad(students[i]['marks'], 20)
    );
}
console.log('\n'); // добавляется пустая строка в конце вывода
};
printStudents(groupmates);



var filterByGroup = function(students, group)
{
    var result = [];
    for (var i = 0; i < students.length; i++ )
    {
        if (students[i].group == group)
            result.push(students[i]);
    }
    
    return result;
};

console.log("Фильтрация по группе 1702:\n");
printStudents(filterByGroup(groupmates, "1702"));
console.log("Фильтрация по группе 1701:\n");
printStudents(filterByGroup(groupmates, "1701"));
console.log("Фильтрация по группе 1703:\n");
printStudents(filterByGroup(groupmates, "1703"));