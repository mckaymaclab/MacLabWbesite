const getData = async () =>{
    const res = await fetch('../js/equipment.json');
    const data = await res.json();
    return data;
} 

const displayEquipment = async () =>{ 
    const equipmentInfo = await getData()
    equipmentInfo.forEach(item => {
        const card =`
        <div class="equipmentCard">
            <div>
                <h2>${item.title}<h2>
                <h3>${item.RentalPeriod}<h3>
                <p>${item.description}</p>
            </div>
            <div>
            <img src="${item.Picture}"><img>
            </div>
        </div>
        `  
        // document.querySelector('#section_div-equipmentCards').insertAdjacentHTML('beforeend',card)
    });  
}

displayEquipment();
    