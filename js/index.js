/*
1) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', 
то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. 
Решите задачу через switch-case.
*/
const num = +prompt('enter a number: 1, 2, 3 or 4');
let result;

switch (num) {
    case 1:
        result = 'winter';
        console.log(`Season - ${result}`);
        break;
    case 2:
        result = 'spring';
        console.log(`Season - ${result}`);
        break;
    case 3:
        result = 'summer';
        console.log(`Season - ${result}`);
        break;
    case 4:
        result = 'autumn';
        console.log(`Season - ${result}`);
        break;
    default:
        result = 'unknown season';
        console.log(`Season - ${result}`);
};

/*
2) В переменной month лежит какое-то число из интервала от 1 до 12. 
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
*/
const month = +prompt('enter a number from 1 to 12');

switch (month) {
    case 1:
    case 2:
    case 12:
        console.log(`Month ${month} is in winter`);
        break;
    case 3:
    case 4:
    case 5:
        console.log(`Month ${month} is in spring`);
        break;
    case 6:
    case 7:
    case 8:
        console.log(`Month ${month} is in summer`);
        break;
    case 9:
    case 10:
    case 11:
        console.log(`Month ${month} is in autumn`);
        break;
    default:
        console.log('Unknown season'); 
};

/*
3) Запросить у пользователя номер дня недели и вывести соответствующее полное 
строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). 
предусмотреть ошибку введения (default)
*/
const dayWeek = +prompt('Enter the day of the week - from 1 to 7');

switch (dayWeek) {
    case 1: 
        console.log(`Monday - ${dayWeek} of the week`);
        break;
    case 2: 
        console.log(`Tuesday - ${dayWeek} of the week`);
        break;    
    case 3: 
        console.log(`Wednesday - ${dayWeek} of the week`);
        break;
    case 4: 
        console.log(`Thursday - ${dayWeek} of the week`);
        break;
    case 5: 
        console.log(`Friday - ${dayWeek} of the week`);
        break;
    case 6: 
        console.log(`Saturday - ${dayWeek} of the week`);
        break;
    case 7: 
        console.log(`Sunday - ${dayWeek} of the week`);
        break;
    default:
        console.log(`Unknown day of the week`);
};

/*
4) В переменной day лежит какое-то число из интервала от 1 до 31. 
Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
*/
const day = 22;
switch (true) {
    case day > 0 && day <= 10:
        console.log('it`s a first decade');
        break;
    case day > 10 && day <= 20:
        console.log('it`s a second decade');
        break;    
    case day > 20 && day <= 31:
        console.log('it`s a third decade');
        break;
    default:
        console.log('Unknown decade');
};