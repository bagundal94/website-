function orderViaWhatsApp(productName) {
    // Ganti nomor WhatsApp dengan nomor toko Anda
    const phoneNumber = "6282136867674";
    
    // Pesan default yang akan dikirim
    const message = `Halo, saya ingin memesan ${productName}. Berapa stok yang tersedia dan bagaimana cara pemesanannya?`;
    
    // Membuat link WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Membuka tab baru
    window.open(whatsappUrl, '_blank');
}

// Smooth scrolling untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Animasi scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const nav = document.querySelector('nav');
    
    if (scrollPosition > 100) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.width = '100%';
        nav.style.zIndex = '1000';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.position = 'relative';
        nav.style.boxShadow = 'none';
    }
});