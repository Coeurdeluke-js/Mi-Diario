document.addEventListener('DOMContentLoaded', function() {
    const dateSelector = document.getElementById('date-selector');
    const previousDayButton = document.getElementById('previous-day');
    const nextDayButton = document.getElementById('next-day');
    const dateNavigation = document.querySelector('.date-navigation');

    // Get today's date
    const today = new Date();
    const minDate = new Date('2025-03-01');
    const maxDate = today; // Limit to today's date

    function setDefaultDate() {
        const formattedDate = today.toISOString().slice(0, 10);
        dateSelector.value = formattedDate;
    }

    function disableNextButton() {
        nextDayButton.disabled = true;
        nextDayButton.classList.add('disabled');
        
        // Trigger bounce animation
        dateNavigation.classList.add('bounce-limit');
        setTimeout(() => {
            dateNavigation.classList.remove('bounce-limit');
        }, 600);

        // Temporarily add a visual feedback
        setTimeout(() => {
            nextDayButton.disabled = false;
            nextDayButton.classList.remove('disabled');
        }, 500);
    }

    function changeDate(days) {
        const currentDate = new Date(dateSelector.value);
        const newDate = new Date(currentDate.setDate(currentDate.getDate() + days));

        // Check if new date is within allowed range
        if (newDate < minDate) {
            // Trigger bounce animation for lower limit
            dateNavigation.classList.add('bounce-limit');
            setTimeout(() => {
                dateNavigation.classList.remove('bounce-limit');
            }, 600);
            return;
        }

        // Check if trying to go beyond today
        if (newDate > today) {
            disableNextButton();
            return;
        }

        const year = newDate.getFullYear();
        const month = String(newDate.getMonth() + 1).padStart(2, '0');
        const day = String(newDate.getDate()).padStart(2, '0');
        
        dateSelector.value = `${year}-${month}-${day}`;
    }

    previousDayButton.addEventListener('click', () => changeDate(-1));
    nextDayButton.addEventListener('click', () => changeDate(1));

    setDefaultDate();
});