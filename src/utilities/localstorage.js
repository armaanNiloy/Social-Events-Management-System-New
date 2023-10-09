const getStoredData = () =>{
    const storedCard = localStorage.getItem('card');
    if(storedCard){
        return JSON.parse(storedCard);
    }
    return [];
}


const saveCard = id =>{
    const storedCard = getStoredData();
    const exists = storedCard.find(donate => donate === id);
    if(!exists){
        storedCard.push(id);
        localStorage.setItem('card', JSON.stringify(storedCard))
        return true;
    }
    else return false;
}

export { getStoredData, saveCard}