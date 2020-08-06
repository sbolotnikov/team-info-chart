const fs = require("fs");
class HtmlFileWriter{
    constructor(){

    }
    addFilename(filename){
        this.filename = filename;
    }
    addTemplate(templateHtml){
        this.templateHtml = templateHtml;
    }
    addTitle(name){
        this.name = name;
    }
    writeFile(){
        let html = this.templateHtml;
        html = html.replace("<!-- heading -->", this.name);
        fs.writeFileSync(this.filename, html, 'utf8');
    }

}

module.exports = HtmlFileWriter;