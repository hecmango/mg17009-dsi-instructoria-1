import * as fs from 'fs';

const inputFileName = process.argv[2];
const outputFileName = process.argv[3];
const content = fs.readFileSync(inputFileName);
const contentout = fs.readFileSync(outputFileName);

if (fs.existsSync(outputFileName)) {
    if(contentout.toString() == ""){
        fs.writeFileSync(outputFileName, content);
        const contentoutf = fs.readFileSync(outputFileName);
        console.info(outputFileName.toString());
        console.log("Contenido del nuevo documento:");
        console.info(contentoutf.toString());
    }else{
        fs.writeFileSync(outputFileName, contentout+""+content);
        const contentoutf = fs.readFileSync(outputFileName);
        console.info(outputFileName.toString());
        console.log("Contenido del nuevo documento:");
        console.info(contentoutf.toString());
    }
}