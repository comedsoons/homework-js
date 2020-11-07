const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user['hobby'] = 'skydiving';
user['premium'] = false;
console.log(user);

const keys = Object.keys(user);
const values = Object.values(user);

for (let key of keys) {
    console.log(`${key}: ${user[key]}`);
}