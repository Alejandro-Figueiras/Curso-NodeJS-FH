require('colors');

const main = async() => {
    console.clear();
    while(true) {
        let opt = await import('./helpers/inquirer.mjs').then(module => module.inquirerMenu());
        await import('./helpers/inquirer.mjs').then(module => module.pausa());
        if (opt === '0') {
            break;
        }
    }
}
main();