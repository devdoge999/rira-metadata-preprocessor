var fs = require('fs');
var path = require("path");
var dir = path.join(__dirname, 'build', 'json');
var shell = require('shelljs');

//const { addAbortSignal } = require('stream');

/* 
    This script optimized for Windows 10 environment. 
    If there are multiple moving parts, check that the frame timing matches.

    [require magick]
    https://imagemagick.org/script/download.php

    [require powershell alias]
    commend 'code $PROFILE' and add alias line
    Set-Alias magick -Value 'C:\Program Files\ImageMagick-7.0.11-Q16-HDRI\magick.exe' 
*/

var metadataList = fs.readdirSync(dir); 

console.log(metadataList);


metadataList.forEach(buffer => {
    if(buffer.indexOf("gif_required_")){
        const metadata = JSON.parse(fs.readFileSync(dir + '/' + buffer));

        //console.log(metadata);
        
        //빌드 폴더에서prefix있는것들만 가져오기
        //파일호출시 #가 있음에 유의
/*
        let Department = metadata.attributes[0]['value'];
        let Type = metadata.attributes[1]['value'];
        let Skin = metadata.attributes[2]['value'];
        let Eye = metadata.attributes[3]['value'];
        let Mouth = metadata.attributes[4]['value'];
        let Glasses = metadata.attributes[5]['value'];
        let Hair = metadata.attributes[6]['value'];
        let Clothes = metadata.attributes[7]['value'];
        let Accessori = metadata.attributes[8]['value'];
*/
        /*
        console.log(Department);
        console.log(Type);
        console.log(Skin);
        console.log(Eye);
        console.log(Mouth);
        console.log(Glasses);
        console.log(Hair);
        console.log(Clothes);
        console.log(Accessori);*/
        
    }
})

//var version = shell.exec('magick logo: logo.gif', {silent:false}).stdout;

//sample
//magick convert Chemistry.png null: -resize 1024x1024 -gravity east Male-Freckle.png -resize 1024x1024 -layers composite test.gif
//magick convert test.gif null: -resize 1024x1024 -gravity east Male-Shiba.gif -resize 1024x1024 -layers composite test.gif
//magick convert test.gif null: -resize 1024x1024 -gravity east Male-Winkeyes.gif -resize 1024x1024 -layers composite test.gif
//magick convert test.gif null: -resize 1024x1024 -gravity east Male-Sunglasses.png -resize 1024x1024 -layers composite test.gif


