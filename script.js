/*

Encrii by Eliot Chignell (2018)

An Encryption/Decryption tool.
Still in Development and probably easy to exploit.
You have been warned.

*/

// HTML Elements
var h = {
    eText: document.querySelector('#eText'),
    dText: document.querySelector('#dText'),
    eKey: document.querySelector('#eKey'),
    dKey: document.querySelector('#dKey'),
    fText: document.querySelector('#fText'),
    ffText: document.querySelector('#ffText')
};

// Core variables
var rawText = [];
var chrText = [];
var chrKey = [];
var fText = [];
var iText = [];
var fString = '';
var bigNum = 0

function encrypt() {

    // Resetting Variables
    rawText = [];
    rawKey = [];
    chrText = [];
    chrKey = [];
    fText = [];
    bigNum = 0;

    // Getting HTML values and splitting them
    rawText = (h.eText.value).split('');
    rawKey = (h.eKey.value).split('');

    // Converting to char codes
    for (var i=0;i<rawText.length;i++) {
        chrText.push(rawText[i].charCodeAt()+(i*i));
    }

    for (var i=0;i<rawKey.length;i++) {
        chrKey.push(rawKey[i].charCodeAt());
    }
    
    // Making a large number which is the charcodes of the key added together
    for (var i=0;i<chrKey.length;i++) {
        bigNum += chrKey[i];
    }
    
    // Algorithm
    for (var i=0;i<chrText.length;i++) {
        fText.push(chrText[i]*bigNum);
    }

    h.fText.innerHTML = 'Your Encrypted Text is:<br><hr>'+fText;

}

function decrypt() {

    // Resetting Variables
    rawText = [];
    rawKey = [];
    chrKey = [];
    fText = [];
    iText = [];
    bigNum = 0;

    rawText = (h.dText.value).split(',');
    rawKey = (h.dKey.value).split('');

    for (var i=0;i<rawKey.length;i++) {
        chrKey.push(rawKey[i].charCodeAt());
    }

    for (var i=0;i<chrKey.length;i++) {
        bigNum += chrKey[i];
    }
    
    for (var i=0;i<rawText.length;i++) {
		iText.push(rawText[i]/bigNum)
	}

    for (var i=0;i<iText.length;i++) {
        fText.push(String.fromCharCode(iText[i]-(i*i)));
    }

    for (var i=0;i<fText.length;i++) {
        fString += fText[i];
    }

    h.ffText.innerHTML = 'Your Decrypted Text is:<br><hr>'+fString;
}

// camelCaseIsDope
