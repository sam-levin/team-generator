class Employee {
    constructor (name, id, email, role) {
        this.name = name,
        this.id = id,
        this.email = email,
        this.role = role
    }
    
    setName(name) {
        this.name = name;
    }

    getName () {
        return this.name;
    }

    getID () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole (){
        return this.role
    }

    getJson() {
        return {
            name:this.name,
            id:this.id,
            email:this.email,
            role: this.role
        }
    }

    

}



module.exports = Employee;