var {readdirSync,statSync,unlinkSync} = require('fs'),
{join} = require('path'),
files = [];
module.exports = dir => {
filesDir(dir).forEach(paths => {
if(paths.includes('.DS_Store')) unlinkSync(paths)
})}
function filesDir(dir){
readdirSync(dir).forEach(file => {
const inn = join(dir,file);
if (statSync(inn).isDirectory()) return filesDir(inn);
else return files.push(inn);
});
return files        
}