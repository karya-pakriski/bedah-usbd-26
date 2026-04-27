document.addEventListener("DOMContentLoaded", () => {
    let slideSaatIni = 0;
    const daftarSlide = document.querySelectorAll('.slide');
    const indikatorHalaman = document.getElementById('indikator-halaman');

    // Abaikan skrip ini jika tidak berada di halaman presentasi
    if (daftarSlide.length === 0) return;

    function tampilkanSlide(indeks) {
        daftarSlide.forEach((slide) => slide.classList.remove('aktif'));
        daftarSlide[indeks].classList.add('aktif');
        
        if (indikatorHalaman) {
            indikatorHalaman.innerText = `Halaman ${indeks + 1} dari ${daftarSlide.length}`;
        }
    }

    window.slideBerikutnya = function() {
        if (slideSaatIni < daftarSlide.length - 1) {
            slideSaatIni++;
            tampilkanSlide(slideSaatIni);
        }
    }

    window.slideSebelumnya = function() {
        if (slideSaatIni > 0) {
            slideSaatIni--;
            tampilkanSlide(slideSaatIni);
        }
    }

    // Navigasi menggunakan tombol panah keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            slideBerikutnya();
        } else if (e.key === 'ArrowLeft') {
            slideSebelumnya();
        }
    });

    // Inisialisasi tampilan awal
    tampilkanSlide(slideSaatIni);
});
