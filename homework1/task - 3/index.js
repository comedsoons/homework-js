const ADMIN_PASSWORD = "olegtsir";

message = prompt("password");

if (ADMIN_PASSWORD === message) {
    message = ('Ласкаво просимо!');
} else if (message === null) {
    message = ('Скасовано користувачем!');
} else {
    message = ('Доступ заборонений, невірний пароль!');
}

alert(message);