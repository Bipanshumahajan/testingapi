const vCard = require('vcards-js');

//create a new vCard
vcard = vCard();

//set properties
vcard.firstName = 'Eric';
vcard.middleName = 'J';
vcard.lastName = 'Nesser';
vcard.organization = 'ACME Corporation';
vcard.photo.attachFromUrl('https://avatars2.githubusercontent.com/u/5659221?v=3&s=460', 'JPEG');
vcard.workPhone = '312-555-1212';
vcard.birthday = new Date('01-01-1985');
vcard.title = 'Software Developer';
vcard.url = 'https://github.com/enesser';
vcard.note = 'Notes on Eric';

//save to file
vcard.saveToFile('./eric-nesser.vcf');

//get as formatted string
console.log("card generated ",vcard.getFormattedString());