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

var fs = require('fs');
var path = require("path");
const shell = require('shelljs');
const { buffer } = require('shelljs/src/common');
var dir = path.join(__dirname, 'build', 'json');

function magick(imagePath, coverImagePath, saveFilePath)
{
    let command = 'magick convert \"' + imagePath + '\" null: -resize 1024x1024 -gravity east \"' + coverImagePath + '\" -resize 1024x1024 -layers composite ' + saveFilePath;
    console.log(command);
    let log = shell.exec(command, {silent:false}).stdout;
    if(!log.indexOf("unable to open image")){
        throw Error("Image not found");
    }
}

/*
    type: Male, Female, Cyborg..
    attributes : Skin, Eye, Hair..
*/
function getPath(type, trait_type, value)
{
    //layers-for-gif are images optimized for gifs.
    if(trait_type == 'Department')
    {
        //layers-for-gif are images optimized for gifs.
        return './layers-for-gif/Department/' + value + '.png';
    }
    else if(value == 'Winkeyes' || value == 'Shiba'){
        return './layers-for-gif/' + type + '-' + trait_type + '/' + value + '.gif';
    }
    else
    {
        return './layers-for-gif/' + type + '-' + trait_type + '/' + value + '.png';
    }
}

var metadataList = fs.readdirSync(dir); 
//console.log(metadataList);    
    
metadataList.forEach(buffer => {
    if(!buffer.indexOf("gif_required_")){
        const metadata = JSON.parse(fs.readFileSync(dir + '/' + buffer));
        console.log(metadata);

        let tomoDepartment = metadata.attributes[0]['value'];
        let tomoType = metadata.attributes[1]['value'];
        let tomoSkin = metadata.attributes[2]['value'];
        let tomoEye = metadata.attributes[3]['value'];
        let tomoMouth = metadata.attributes[4]['value'];
        let tomoGlasses = metadata.attributes[5]['value'];
        let tomoHair = metadata.attributes[6]['value'];
        let tomoClothes = metadata.attributes[7]['value'];
        let tomoAccessori = metadata.attributes[8]['value'];
        
        magick(getPath(tomoType, "Department", tomoDepartment), getPath(tomoType, "Skin", tomoSkin), 'buffer.gif');
        magick('buffer.gif', getPath(tomoType, "Eye", tomoEye), 'buffer.gif');
        magick('buffer.gif', getPath(tomoType, "Mouth", tomoMouth), 'buffer.gif');
        magick('buffer.gif', getPath(tomoType, "Glasses", tomoGlasses), 'buffer.gif');
        magick('buffer.gif', getPath(tomoType, "Hair", tomoHair), 'buffer.gif');
        magick('buffer.gif', getPath(tomoType, "Clothes", tomoClothes), 'buffer.gif');
        
        let savePath = './build/images/' +  metadata.edition + '.gif';
        let deletePath = './build/images/gif_required_' +  metadata.edition + '.gif';
        magick('buffer.gif', getPath(tomoType, "Accessori", tomoAccessori), savePath);
    }

})
        
//sample
//magick convert Chemistry.png null: -resize 1024x1024 -gravity east Male-Freckle.png -resize 1024x1024 -layers composite test.gif
//magick convert ./layers/Female-Accessori/Shiba-re.gif null: -resize 1024x1024 -gravity east ./layers/Female-Accessori/Winkeyes-re.gif -resize 1024x1024 -layers composite test.gif
//magick convert Blush.png null: -resize 1024x1024 -gravity east Winkeyes.gif -resize 1024x1024 -layers composite test.gif
//magick convert test.gif null: -resize 1024x1024 -gravity east Male-Sunglasses.png -resize 1024x1024 -layers composite test.gif


