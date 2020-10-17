const database = require('./db');
const saveOrphanage = require('./saveOrphanage')
database.then(async db => {
    //insert data into database
    /*await saveOrphanage(db, {
        lat: "-22.5076514",
        lng: "-43.1779323",
        name: "Testando",
        about: "Presta assitência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "0000000000",
        images: [
            "https://images.unsplash.com/photo-1601359208405-c02cb1b7e2cc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1600612294445-5e1153e3e4a3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        instructions: "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 8h até 18h ",
        open_on_weekends: "1"
    })*/
    //query data
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    //query only one element by id
    const orphanage = await db.all('SELECT * FROM orphanages where id = "1"');
    console.log(orphanage);

    //delete request
    /*console.log(await db.run("DELETE FROM orphanages WHERE id='9'"));
    console.log(await db.run("DELETE FROM orphanages WHERE id='10'"));
    console.log(selectedOrphanages);*/
})