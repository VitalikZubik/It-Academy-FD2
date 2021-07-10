function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    const colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    const selectedColors = {}
    let id = 1;
    console.log( 'цветов: ' + colorsCount );

    for ( let i=1; i<=colorsCount; i++ ) {
        const n=randomDiap(1,7);
        const colorName=colors[n];

        if(Object.keys(selectedColors).length === 0) {
            selectedColors[id++] = colorName;
            console.log( colorName );
        } else {
            let isFound = false;
            for(let elem in selectedColors) {
                if(colorName === selectedColors[elem]) {
                    i--
                    isFound = true;
                    break;
                }                    
            } 

            if (!isFound) {
                selectedColors[id++] = colorName;
                console.log( colorName ); 
            }       
        }
    }   
}

mood(3);