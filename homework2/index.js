const friends = [ "oleg", "marek", "artem", "vova", "ivan" ];

for (const friend of friends) {
    if ( friend === "oleg" ) {
        console.log( "Найкращого друга знайдено!" );
        break;
    } else {
        console.log( "Найкращого друга не знайдено!" );
    }
}
