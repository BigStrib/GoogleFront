function updateTimeAndDate() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    const numericDateElement = document.getElementById("numeric-date"); // New element for numeric date format

    const now = new Date();
    
    // Format the time as HH:MM:SS AM/PM
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    // Format the date as "Sunday, October 13, 2025"
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    
    // Format the date as "MM/DD/YYYY"
    const numericDateString = now.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit' 
    });

    // Update the content of the elements
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
    numericDateElement.textContent = numericDateString;  // Display the MM/DD/YYYY date
}

// Update time and date every second
setInterval(updateTimeAndDate, 1000);

// Initial call to display the time and date right away
updateTimeAndDate();
