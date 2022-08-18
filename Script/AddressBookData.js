class AddressBookValue{
    get id(){return this._id}
    set id(id){
        this._id = id;
    }

    get name(){return this._name}
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(nameRegex.test(name))
            this._name=name;
        else throw "Name is Invalid";  
    }

    get phoneNumber(){return this._phoneNumber}
    set phoneNumber(phoneNumber){
        let RegexTel=RegExp("^[1-9]{2}\\s{0,1}[0-9]{10}$");
        if(RegexTel.test(phoneNumber))
            this._phoneNumber=phoneNumber;
        else throw "Number is Invalid";  
    }

    get address(){return this._address}
    set address(address){
        this._address = address;
    }

    get city(){return this._city}
    set city(city){
        this._city = city;
    }

    get state(){return this._state}
    set state(state){
        this._state = state;
    }

    get zipCode(){return this._zipCode}
    set zipCode(zipCode){
        this._zipCode = zipCode;
    }

    toString(){
        return "id= "+ this.id +", name= "+ this.name +", phoneNumber= "+ this.phoneNumber +
        ", address= "+ this.address +", city= "+ this.city +", state= "+ this.state +", zipCode= "
        + this.zipCode;
    }
}