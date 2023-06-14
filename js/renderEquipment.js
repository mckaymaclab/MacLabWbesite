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
            <div class="pictureBackground">
                <img src="${item.Picture}" alt="">
            </div>
            <div class="eq-description">
                <p class="eq-name"><strong>${item.title}</strong></p>
                <p>Details</p>
            </div>
        </div>
        `  
        document.querySelector('#section_div-equipmentCards').insertAdjacentHTML('beforeend',card)
    });  
}

displayEquipment();
    