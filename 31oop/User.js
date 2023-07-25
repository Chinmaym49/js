class User {

    constructor(id,name) {                              // Constructor
        this.id=id;                                     // Data member
        this.name=name;
        this.skills=[];
    }

    upskill(skill) {                                    // Member function
        this.skills.push(skill);
    }

    get() {
        return {id:this.id,name:this.name,skills:this.skills};
    }
}

module.exports=User;