function stars(num = 5) {
    for (let index = 0; index < num; index++) {
        console.log("* ".repeat(num));    
    }
}

stars(1);
stars(2);
stars();
stars(7);