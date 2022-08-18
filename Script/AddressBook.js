const text = document.querySelector("#text");
const textError = document.querySelector(".text-error");
text.addEventListener("input",function(){
    let RegexName=RegExp("^[A-Z]{1}[a-z]{3,}$");
    if(RegexName.test(text.value)){
        textError.textContent = "";
    }else{
        textError.textContent = "Invalid name";
    }
});

const number = document.querySelector("#phoneNumber");
const telError = document.querySelector(".tel-error");
number.addEventListener("input",function(){
    let RegexTel=RegExp("^[1-9]{2}\\s{0,1}[0-9]{10}$");
    if(RegexTel.test(phoneNumber.value)){
        telError.textContent = "";
    }else{
        telError.textContent = "Invalid phone number";
    }
});

const save = () => {
    try{
        let addressBookData = createAddressBook();
        createAndUpdateStorage(addressBookData);
    }catch(e){
        return;
    }
}