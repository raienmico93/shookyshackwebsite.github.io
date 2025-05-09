function listItems() {
    const searchInput = document.getElementById("searchInput");
    const linkList = document.getElementById("linkList");
    const items = linkList.getElementsByTagName("li");

    const filter = searchInput.value.toLowerCase();

    if (filter === "") {
        linkList.style.display = "none"; // Hide the whole list
    } else {
        linkList.style.display = "block"; // Show the list again
        let hasVisible = false;

        for (let i = 0; i < items.length; i++) {
            const linkText = items[i].textContent.toLowerCase();
            const match = linkText.includes(filter);
            items[i].style.display = match ? "" : "none";
            if (match) hasVisible = true;
        }

        // Optionally hide the list if nothing matches
        if (!hasVisible) {
            linkList.style.display = "none";
        }
    }
};



document.addEventListener('DOMContentLoaded', function() {
    
    var swiper1 = new Swiper(".row", {
        spaceBetween: 30,
        loop: false,
        centeredSlides: true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          512: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });

    const swiper2 = new Swiper('.blogs-row', {
        // Optional parameters
        loop: false,
        slidesPerView: 1,
        spaceBetween: 100,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});