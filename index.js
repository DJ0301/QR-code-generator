import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';


inquirer
  .prompt([{
    message : 'Enter URL',
    name : 'URL',
  },
  ])
  .then((answers) => {
    console.log(answers);
    const url = answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('my-url.png'));
    fs.writeFile('URL.txt',url,(err)=>
    {
        if (err) throw err;
        console.log('The file has been saved!');
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });