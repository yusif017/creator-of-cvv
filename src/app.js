let editMode = false;
let currentItem = null;
let ilk = true
let ilkexom = true
let ilkedication = true
let ilkproject=true


function addItem(text) {
    const outputDiv = document.getElementById('output');
    const sidebarList = document.getElementById('sidebarList');
    if (ilk) {
       
        ilk = false
    }
    // Yeni bir öğe oluştur
    const newItem = document.createElement('div');
    newItem.className = 'item';

    // Metni içeren bir paragraf oluştur
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;

    // Düzenleme ve silme butonlarını içeren bir div oluştur
    const buttonContainer = document.createElement('div');

    // Düzenleme butonu oluştur


    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z" fill="#F44336"/>
</svg>
` ;
    deleteButton.addEventListener('click', function () {
        outputDiv.removeChild(newItem);
        sidebarList.removeChild(sidebarItem);
    });

    newItem.appendChild(newParagraph);
    buttonContainer.appendChild(deleteButton);
    newItem.appendChild(buttonContainer);
    outputDiv.appendChild(newItem);
    const sidebarItem = document.createElement('li');
    sidebarItem.textContent = text;
    sidebarItem.addEventListener('click', function () {
        // Metni ana input alanına yükle
        document.getElementById('userInput').value = text;
        // Düzenleme modunu başlat
        editMode = true;
        currentItem = newItem;
        document.getElementById('submitButton').textContent = 'Güncelle';
    });
    sidebarList.appendChild(sidebarItem);

}
document.getElementById('button-add').addEventListener('click', function () {
    const input = document.getElementById('addskills').value;
    if (input) {
        if (editMode) {
            currentItem.querySelector('p').textContent = input;
            const sidebarItems = document.getElementById('sidebarList').getElementsByTagName('li');
            for (let i = 0; i < sidebarItems.length; i++) {
                if (sidebarItems[i].textContent === currentItem.querySelector('p').textContent) {
                    sidebarItems[i].textContent = input;
                    break;
                }
            }
            editMode = false;
            document.getElementById('addskills').value = '';
        } else {
            addItem(input);
            document.getElementById('addskills').value = '';
        }
    }
});
document.getElementById('inputadSoyad').addEventListener('change', function (event) {
    const text = event.target.value
    document.getElementById('adSoyad').textContent = text.toUpperCase();
}

);
document.getElementById('inputRol').addEventListener('change', function (event) {
    const text = event.target.value
    document.getElementById('rol').textContent = text.toUpperCase();
}

);
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('previewImage').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
document.getElementById('inputphoto').addEventListener('change', function (event) {
    const text = event.target.value
    document.getElementById('phone').textContent = text;
}
);
document.getElementById('inputemail').addEventListener('change', function (event) {
    const text = event.target.value
    document.getElementById('email').textContent = text;
}
);
document.getElementById('inputgit').addEventListener('change', function (event) {
    const text = event.target.value
    document.getElementById('git').textContent = text;
}
);
document.getElementById('inputlinkdin').addEventListener('change', function (event) {
    const text = event.target.value
    document.getElementById('linkdin').textContent = text;
}
);

// Select elementini seçin
const selectElement = document.getElementById('selectOptions');

// UL listesini seçin
const selectedItemsList = document.getElementById('selectedItems');

// Select elementinde seçim değişikliği olduğunda çalışacak işlevi tanımlayın
selectElement.addEventListener('change', function () {
    // UL listesini temizleyin
   
    selectedItemsList.innerHTML = '';
    // Seçilen option öğelerini alın
    const selectedOptions = Array.from(selectElement.selectedOptions);

    // Her bir seçili option için işlem yapın
    selectedOptions.forEach(option => {
        // LI öğesi oluşturun ve içeriğini ayarlayın
        const listItem = document.createElement('li');
        listItem.textContent = option.textContent;

        // LI öğesini UL listesine ekleyin
        selectedItemsList.appendChild(listItem);
    });
});

document.getElementById('addExperienceButton').addEventListener('click', function () {
    const sirket = document.getElementById('inputSirket').value;
    const tarix = document.getElementById('inputTarixbaslama').value;
    const tarixbitme = document.getElementById('inputTarixbitme').value;
    const vezife = document.getElementById('inputVezife').value;
    if (ilkexom) {
      
        ilkexom = false

    }
    if (sirket && tarix && vezife) {
        // Create experience card (div)
        const experienceCard = document.createElement('div');
        experienceCard.className = 'experience-card';

        const textContainer = document.createElement('div');

        const sirketElement = document.createElement('p');
        sirketElement.textContent = `Şirket: ${sirket.toUpperCase()}`;
        textContainer.appendChild(sirketElement);

        const tarixElement = document.createElement('p');
        tarixElement.textContent = `Başlama Tarixi: ${formatDate(tarix)}`;
        textContainer.appendChild(tarixElement);

        const tarixBitmeElement = document.createElement('p');
        tarixBitmeElement.textContent = `Bitme Tarixi: ${tarixbitme ? formatDate(tarixbitme) : "Present"}`;
        textContainer.appendChild(tarixBitmeElement);

        const vezifeElement = document.createElement('p');
        vezifeElement.textContent = `Vezife: ${vezife}`;
        textContainer.appendChild(vezifeElement);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z" fill="#fff"/>
    </svg>`;
        deleteButton.addEventListener('click', function () {
            experienceCard.remove();
            experienceItem.remove();
        });

        experienceCard.appendChild(textContainer);
        experienceCard.appendChild(deleteButton);

        document.getElementById('experiencesContainer').appendChild(experienceCard);

        // Create experience list item (li)
        const experienceItem = document.createElement('li');

        const companyHeader = document.createElement('h2');
        companyHeader.className = 'text-[20px] font-medium';
        companyHeader.textContent = sirket.toUpperCase();
        experienceItem.appendChild(companyHeader);

        const roleDiv = document.createElement('div');
        roleDiv.className = 'flex items-center gap-1';
        roleDiv.innerHTML = '<span>Role:</span>';
        const roleParagraph = document.createElement('p');
        roleParagraph.textContent = vezife;
        roleDiv.appendChild(roleParagraph);
        experienceItem.appendChild(roleDiv);

        const periodDiv = document.createElement('div');
        periodDiv.className = 'flex items-center gap-1';
        periodDiv.innerHTML = '<span>Period:</span>';
        const periodParagraph = document.createElement('p');
        periodParagraph.textContent = `${formatDate(tarix)} to ${tarixbitme ? formatDate(tarixbitme) : "Present"}`;
        periodDiv.appendChild(periodParagraph);
        experienceItem.appendChild(periodDiv);

        document.getElementById('experienceCarduli').appendChild(experienceItem);

        // Clear input fields after adding the experience
        document.getElementById('inputSirket').value = '';
        document.getElementById('inputTarixbaslama').value = '';
        document.getElementById('inputTarixbitme').value = '';
        document.getElementById('inputVezife').value = '';
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
});


function formatDate(dateString) {
    const months = [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun',
        'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
    ];

    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${year}`;
}



document.getElementById('addEdicatioButton').addEventListener('click', function () {
    const ixtisas = document.getElementById('inputEdicatioIxtisas').value;
    const name = document.getElementById('inputEdicatioName').value;

    if (ixtisas && name) {
       if (ilkedication) {
       
        ilkedication=false
       }
        const educationCard = document.createElement('div');
        educationCard.className = 'experience-card';

        const textContainer = document.createElement('div');

        const ixtisasElement = document.createElement('p');
        ixtisasElement.textContent = `Ixtisas: ${ixtisas.toUpperCase()}`;
        textContainer.appendChild(ixtisasElement);

        const nameElement = document.createElement('p');
        nameElement.textContent = `Name: ${name}`;
        textContainer.appendChild(nameElement);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z" fill="#fff"/>
            </svg>`;
        deleteButton.addEventListener('click', function () {
            educationCard.remove();
            educationItem.remove();
        });

        educationCard.appendChild(textContainer);
        educationCard.appendChild(deleteButton);

        document.getElementById('edicationContainer').appendChild(educationCard);

        // Create education list item (li)
        const educationItem = document.createElement('li');

        const ixtisasHeader = document.createElement('h2');
        ixtisasHeader.className = 'text-[20px] font-medium';
        ixtisasHeader.textContent = ixtisas.toUpperCase();
        educationItem.appendChild(ixtisasHeader);

        const nameDiv = document.createElement('div');
        nameDiv.className = 'flex items-center gap-1';
        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = name;
        nameDiv.appendChild(nameParagraph);
        educationItem.appendChild(nameDiv);

        document.getElementById('edicasionCarduli').appendChild(educationItem);

        // Clear input fields after adding the education experience
        document.getElementById('inputEdicatioIxtisas').value = '';
        document.getElementById('inputEdicatioName').value = '';
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
});



document.getElementById('addProjectButton').addEventListener('click', function () {
    const ixtisas = document.getElementById('inputProjectName').value;
    const name = document.getElementById('inputProjectUrl').value;

    if (ixtisas && name) {
       if (ilkproject) {
      
        ilkproject=false
       }
        const educationCard = document.createElement('div');
        educationCard.className = 'experience-card';

        const textContainer = document.createElement('div');

        const ixtisasElement = document.createElement('p');
        ixtisasElement.textContent = `Ixtisas: ${ixtisas}`;
        textContainer.appendChild(ixtisasElement);

        const nameElement = document.createElement('p');
        nameElement.textContent = `Name: ${name}`;
        textContainer.appendChild(nameElement);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z" fill="#fff"/>
            </svg>`;
        deleteButton.addEventListener('click', function () {
            educationCard.remove();
            educationItem.remove();
        });

        educationCard.appendChild(textContainer);
        educationCard.appendChild(deleteButton);

        document.getElementById('projectContainer').appendChild(educationCard);

        // Create education list item (li)
        const educationItem = document.createElement('li');

        const ixtisasHeader = document.createElement('h2');
        ixtisasHeader.className = 'text-[20px] font-medium';
        ixtisasHeader.textContent = ixtisas;
        educationItem.appendChild(ixtisasHeader);

        const nameDiv = document.createElement('div');
        nameDiv.className = 'flex items-center gap-1';
        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = name;
        nameDiv.appendChild(nameParagraph);
        educationItem.appendChild(nameDiv);

        document.getElementById('projectContainerli').appendChild(educationItem);

        // Clear input fields after adding the education experience
        document.getElementById('inputProjectName').value = '';
        document.getElementById('inputProjectUrl').value = '';
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
});