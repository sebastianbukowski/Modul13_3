process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    // tutaj treść tego co ma się wykonać w momencie odczytania wejścia.
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    //process.stdout.write(input);
    var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n'); 
                process.exit();
                break;
            case 'show system language':
                process.stdout.write(process.env.LANG.slice(0,2) + '\n'); 
                break;
            case 'node -v':
                process.stdout.write(process.versions.node + '\n');
                break;
            default: 
                process.stderr.write('Wrong instruction! \n');
                break;    
        }
});