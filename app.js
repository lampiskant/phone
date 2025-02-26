document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const phone = document.getElementById('phone').value;

    if (phone) {
        savePhoneNumber(phone);
    }
});

function savePhoneNumber(phone) {
    const db = getDatabase();
    const phoneRef = ref(db, 'phones/' + Date.now());  // Χρησιμοποιούμε το timestamp ως μοναδικό ID
    set(phoneRef, {
        phone: phone
    }).then(() => {
        alert("Ο αριθμός τηλεφώνου αποθηκεύτηκε επιτυχώς.");
        document.getElementById('phone').value = ''; // Καθαρισμός του πεδίου
    }).catch((error) => {
        alert("Σφάλμα κατά την αποθήκευση του αριθμού: " + error.message);
    });
}
