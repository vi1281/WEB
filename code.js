
document.getElementById('btn').addEventListener('click', function() {
 
    const form = document.getElementById('registrationForm');
    
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});
