
document.getElementById('btn').addEventListener('click', function() {
 
    const form = document.getElementById('registrationForm');
    
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});
document.getElementById('btnMenuID').addEventListener('click', function() {
 
    const form = document.getElementById('MenuID');
    
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});