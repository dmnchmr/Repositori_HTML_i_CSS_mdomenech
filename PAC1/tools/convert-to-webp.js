const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = '/img';
const outputFolder = '/img/img_op';

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdirSync(inputFolder).forEach(file => {
    const inputPath = path.join(inputFolder, file);
    const parsed = path.parse(file);

    if (/\.(jpe?g|png)$/i.test(file)) {
        const outputPath = path.join(outputFolder, parsed.name + '.webp'); 

        sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath)
            .then(() => console.log(`✅ ${file} ➔ ${parsed.name}.webp`))
            .catch(err => console.error('❌ Error converting', file, err));
    }
});
