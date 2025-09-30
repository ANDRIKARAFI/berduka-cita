// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('condolence-form');
    const messageDisplay = document.getElementById('message-display');

    if (form) {
        // Mencegah pengiriman form statis
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('input[type="text"]');
            const messageInput = this.querySelector('textarea');
            
            const name = nameInput.value;
            let message = messageInput.value;
            
            if (name && message) {
                // Batasi panjang pesan
                message = message.substring(0, 300);

                // Buat elemen pesan baru
                const newMsg = document.createElement('p');
                newMsg.classList.add('static-msg', 'new-message');
                newMsg.innerHTML = `**"${message}"**<br> - ${name}`;
                
                // Tambahkan pesan baru di bagian atas (sebagai contoh, tanpa penyimpanan permanen)
                messageDisplay.prepend(newMsg);
                
                // Efek visual singkat
                newMsg.style.opacity = 0;
                setTimeout(() => {
                    newMsg.style.opacity = 1;
                    newMsg.style.transition = 'opacity 0.5s';
                }, 10);
                
                // Reset form
                nameInput.value = '';
                messageInput.value = '';

                alert('Ucapan duka Anda telah terkirim. Terima kasih. (Pesan ini hanya contoh karena tidak menggunakan database)');
            } else {
                alert('Mohon lengkapi nama dan ucapan duka.');
            }
        });
    }
});