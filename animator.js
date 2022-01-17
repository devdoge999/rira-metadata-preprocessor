var fs = require('fs');
var path = require("path");
const shell = require('shelljs');
const { buffer } = require('shelljs/src/common');
var dir = path.join(__dirname, 'build', 'json');

/* 
    This script optimized for Windows 10 environment. 
    Due to the frame matching problem, it was assumed that there is only one GIF part.
    For shelljs, you need to use -g or --save depending on the environment.

    [require magick]
    https://imagemagick.org/script/download.php

    [require powershell alias]
    commend 'code $PROFILE' and add alias line
    Set-Alias magick -Value 'C:\Program Files\ImageMagick-7.0.11-Q16-HDRI\magick.exe' 
*/

function magick(imagePath, coverImagePath, saveFilePath){
    shell.exec('magick convert ' + imagePath + ' null: -resize 1024x1024 -gravity east ' + coverImagePath + ' -resize 1024x1024 -layers composite ' + saveFilePath , {silent:false}).stdout;
    //layers-for-gif are images optimized for gifs.
}

/*
    type: Male, Female, Cyborg..
    attributes : Skin, Eye, Hair..
*/
function getPath(type, trait_type, value){
    //layers-for-gif are images optimized for gifs.
    if(value == 'Winkeyes' || value == 'Shiba'){
        return './layers-for-gif/' + gender + '-' + trait_type + '/' + value + '.gif';
    }else{
        return './layers-for-gif/' + gender + '-' + trait_type + '/' + value + '.png';
    }
}

var metadataList = fs.readdirSync(dir); 
    console.log(metadataList);    
    
    metadataList.forEach(buffer => {
    if(buffer.indexOf("gif_required_")){ //GIF 레이어링이 필요한 파일
        const metadata = JSON.parse(fs.readFileSync(dir + '/' + buffer));
        //console.log(metadata);
        //console.log(buffer);
        
        //빌드 폴더에서prefix있는것들만 가져오기
        //파일호출시 #가 있음에 유의
        //프레임 속도가 같아야 함
    }else{

        console.log(buffer);
    }})
        //합성예외 "Type"
        //합성예외 "None"?

        

        let tomoDepartment = metadata.attributes[0]['value'];
        let tomoType = metadata.attributes[1]['value'];
        let tomoSkin = metadata.attributes[2]['value'];
        let tomoEye = metadata.attributes[3]['value'];
        let tomoMouth = metadata.attributes[4]['value'];
        let tomoGlasses = metadata.attributes[5]['value'];
        let tomoHair = metadata.attributes[6]['value'];
        let tomoClothes = metadata.attributes[7]['value'];
        let tomoAccessori = metadata.attributes[8]['value'];

        getPath(tomoType, "")

        if(Type == "Male"){
            
        }


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
        

var version = s

//sample
//magick convert Chemistry.png null: -resize 1024x1024 -gravity east Male-Freckle.png -resize 1024x1024 -layers composite test.gif

//magick convert ./layers/Female-Accessori/Shiba-re.gif null: -resize 1024x1024 -gravity east ./layers/Female-Accessori/Winkeyes-re.gif -resize 1024x1024 -layers composite test.gif

//magick convert Blush.png null: -resize 1024x1024 -gravity east Winkeyes.gif -resize 1024x1024 -layers composite test.gif
//magick convert test.gif null: -resize 1024x1024 -gravity east Male-Sunglasses.png -resize 1024x1024 -layers composite test.gif


