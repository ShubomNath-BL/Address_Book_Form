let addressBookList;
window.addEventListener("DOMContentLoaded", (event) => {
    addressBookList = getEmployeePayrollDataFromStorage();
    createInnerHtml();
    localStorage.removeItem("editEmp");
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem("AddressBookList") ?
                                JSON.parse(localStorage.getItem("AddressBookList")) : [];
}

const createInnerHtml = () => {
    if(addressBookList.length == 0) return;
    const headerHtml = "<th>Full Name</th><th>Phone Number</th><th>Address</th><th>City</th>"+
                        "<th>State</th><th>Zip Code</th>"
    let innerHtml = `${headerHtml}`
    for(const addressBookData of addressBookList){
        innerHtml = `${innerHtml}
        <tr>
            <td>${addressBookData._name}</td>
            <td>${addressBookData._phoneNumber}</td>
            <td>${addressBookData._address}</td>
            <td>${addressBookData._city}</td>
            <td>${addressBookData._state}</td>
            <td>${addressBookData._zipCode}</td>
            <td>
                <img id="${addressBookData._name}" onclick="remove(this)" alt="delete" 
                                                            src="../Assets/icons/delete-black-18dp.svg">
                <img id="${addressBookData._name}" onclick="update(this)" alt="edit" 
                                                            src="../Assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
}

const remove = (node) => {
    let addressBookData = addressBookList.find(addData => addData._name == node.id);
    if(!addressBookData) return;
    const index = addressBookList
                                .map(addData => addData._name)
                                .indexOf(addressBookData._name);
    addressBookList.splice(index, 1);
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
    createInnerHtml();                            
}

const update = (node) => {
    let addressBookData = addressBookList.find(addData => addData._name == node.id);
    if(!addressBookData) return;
    localStorage.setItem("editEmp", JSON.stringify(addressBookData));
    window.location.replace(site_properties.add_address_book);
}