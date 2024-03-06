const xml2js = require('xml2js');
const fs = require('fs');
const xmldataconverter = (xml) => {
    const parser = new xml2js.Parser({explicitArray: false, mergeAttrs: true});
    parser.parseString(xml, (err, result) => {
        if (err) {
            throw 'Input Proper XML Data';
        }
        const json = JSON.stringify(result, null, 4);
        console.log(json);
    });
};
function csvdataconverter(csv) {
    const lines = csv.split('\n');
    // console.log(lines);
    const headers = lines[0].split(',');
    // console.log(headers);
    // console.log(lines.slice(1));
    return lines.slice(1).map(line => {
        const set = line.split(',');
        // console.log(set);
        return headers.reduce((obj, header, i) => {


            console.log(typeof(header));
            // header = JSON.stringify(header);
            obj[header] = set[i]; 
            return obj;
        },{});
    });
}
const identity = (data) =>{

    const variable = data.indexOf("<")
    if(variable==0){
        return xmldataconverter(data)
    }

    return console.log(csvdataconverter(data)); 


}
module.exports = identity ;



