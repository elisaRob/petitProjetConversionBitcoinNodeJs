const axios = require('axios');

async function main(){

    const valeurCourrante = process.argv[2] ? process.argv[2].toUpperCase() : "USD";

    try{

        // let valeurCourrante = "USD";
        // if (process.argv[2]){
        //     valeurCourrante = process.argv[2].toUpperCase()
        // }

        //process c'est le processus actuel c'est une variable, un objet qui existe déjà dans nodejs
        //Lorsque vous éxécutez n'importe quelle programme dans nodeJs et à l'intèrieur de process si on fait un . on va avoir accès
        //à un attribut qui s'appelle argv qui contient les arguments de notre programme, les arguments qu'on a passé au 
        //programme lorsqu'on l'a exécuté. => il y a deux arguments le premier correspond à l'endroit ou node à été
        //installer depuis lequel on l'utilise ,n, le deuxième argument correspond à notre programme il correspond
        //au chemin complet de notre programme
        // console.log(process.argv[2])
        // const valeurCourrante=process.argv[2].toUpperCase()

        const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
        const { data } = await axios.get(url)


        if(!data.bpi[valeurCourrante]){
            throw new Error('Devise inconnue');
        }

        const updatedAt = data.time.updated
        const rate= data.bpi[valeurCourrante].rate
        console.log(`1 BIT=${rate} EUR (${updatedAt}) `)
    } catch(err){
        console.log(err.toString())
    }


}

main();

