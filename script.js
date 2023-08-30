// Functions

// Variables
$promoPictures = document.querySelector('.promo-pics')
$dessertName = document.querySelector('.dessert-name')
$dessertContext = document.querySelector('.dessert-context')

// Slides other bakery images when clicked on thumbnails
function slider (picture){
    $promoPictures.src = picture;
}

// Changes the circle's color everytime picture changes
function nameAndContextChanger (name,context) {
    $dessertName.textContent = name;
    $dessertContext.textContent = context
}