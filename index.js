const readLineSync=require('readline-sync');

function encode(url)
{
  return encodeURIComponent(url);
}
function decode(url)
{
  return decodeURIComponent(url);
}

function logic(selectOption,url)
{
  switch(selectOption)
{
  case 1:
        const encoded=encode(url);
        console.log(`\nThe Encoded URL for given ${url}  :\n ${encoded}`);
        break;
  case 2:
        const decoded=decode(url);
        console.log(`\nThe Decoded URL for given ${url}  :  \n${decoded}`);
        break;
  default:
      console.log("You have given invalid URL");
}
}
const selectOption=parseInt(readLineSync.question('           Welcome To  URL Encoder/Decoder Application.\n\n Select the option you want utilize:\n1)Encode\n2)Decode\n Enter you choice : '));


if(selectOption==1 || selectOption==2)
{
  const url=readLineSync.question('Enter the URL: ');
  console.log(`You opted : ${selectOption}`);

  logic(selectOption,url);
}
else
console.log("You have choosen \'WRONG OPTION\' choose options [1] or [2]");








console.log("\n\nThank you for using our service");





