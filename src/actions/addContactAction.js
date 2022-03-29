export const addContact = (contact)=>  {
    return {
        type: "CREATE_CONTACT",
        payload: contact,
    }
}

export const editLocation=(locationNumber)=>{
    //alert(locationNumber)
    //console.log(locationNumber)
    return{
        type: "UPDATE_LOCATION",
        payload:locationNumber
    }
}