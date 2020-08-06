
class Team {
    constructor(name){
        this.name = name;
        if(this.name.length < 1){
            console.log("Name is too short.");
            throw "Error on name length";
        }
    }
}

module.exports = Team;