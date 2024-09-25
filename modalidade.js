const addTimeButton = document.getElementById('add-time-button');
const timeInput = document.getElementById('time-input');
const nameInput = document.getElementById('name-input');
const scheduleContainer = document.getElementById('schedule-container');

addTimeButton.addEventListener('click', () => {
const timeValue = timeInput.value.trim();
const nameValue = nameInput.value.trim();
if (timeValue === '' || nameValue === '') {
    alert('Por favor, insira um horário e um nome.');
    return;
}

// Find the first empty time slot
const emptySlot = [...scheduleContainer.children].find((child) => {
    return child.id && child.id.startsWith('time-slot') && child.innerHTML === '';
});

if (emptySlot) {
    emptySlot.innerHTML = `${timeValue} - ${nameValue}`; // Set the time and name in the slot
    emptySlot.classList.add('button-gray'); // Add the gray button style
    timeInput.value = ''; // Clear the time input field
    nameInput.value = ''; // Clear the name input field
} else {
    alert('Todos os horários estão preenchidos.');
}
});