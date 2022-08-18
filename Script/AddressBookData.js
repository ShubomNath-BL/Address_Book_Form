class AddressBookValue{
    get id(){return this._id}
    set id(id){
        this._id = id;
    }

    get name(){return this._name}
    set name(name){
        this._name = name;
    }

    get phoneNumber(){return this._phoneNumber}
    set phoneNumber(phoneNumber){
        this._phoneNumber = phoneNumber;
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