let isUpdate = false;
let addressBookObj = {};
window.addEventListener("DOMContentLoaded", (event) => {
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener("input",function(){
        if(name.value.length==0){
            textError.textContent = "";
            return;
        }
        try{
            (new AddressBookValue()).name = name.value;
            textError.textContent = "";
        }catch (e){
            textError.textContent = e;
        }
    });

    const phoneNumber = document.querySelector("#phoneNumber");
    const telError = document.querySelector(".tel-error");
    phoneNumber.addEventListener("input",function(){
        if(phoneNumber.value.length==0){
            textError.textContent = "";
            return;
        }
        try{
            (new AddressBookValue()).phoneNumber = phoneNumber.value;
            textError.textContent = "";
        }catch (e){
            textError.textContent = e;
        }
    });
    checkForUpdate();
});

const save = () => {
    let addressBookData = createAddressBook();
    createAndUpdateStorage(addressBookData);
    alert("save");    
}

const setForm = () => {
    setValue("#name", addressBookObj._name);
    setValue("#phoneNumber", addressBookObj._phoneNumber);
    setValue("#address", addressBookObj._address);
    setValue("#city", addressBookObj._city);
    setValue("#state", addressBookObj._state);
    setValue("#zipCode", addressBookObj._zipCode);
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

function createAndUpdateStorage(addressBookData){
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(addressBookList != undefined){
        addressBookList.push(addressBookData);
    }else{
        addressBookList = [addressBookData]
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList))
}

const createAddressBook = () => {
    let addressBookData = new AddressBookValue();    
    addressBookData.name = getInputValueById("#name");        
    addressBookData.city = getInputValueById("#city");
    addressBookData.state = getInputValueById("#state");
    addressBookData.address = getInputValueById("#address");
   // addressBookData.name = getInputValueById("#name");
    addressBookData.phoneNumber = getInputValueById("#phoneNumber");
    addressBookData.zipCode = getInputValueById("#zipCode");
    return addressBookData;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const checkForUpdate = () => {
    const addressBookJason = localStorage.getItem("editEmp");
    isUpdate = addressBookJason ? true : false;
    if(!isUpdate) return;
    addressBookObj = JSON.parse(addressBookJason);
    setForm();
}