const image = document.createElement("img");
image.src = "https://raw.githubusercontent.com/gist/T-Jedsada/a837e3a4b6335123a5c07cd0fb25dece/raw/4d74ce241b1a24864bbf9ea1733f8f142490a5c6/bongo-cat.gif";
image.classList.add("image");
image.alt = "cat";
image.height = 300;
document.querySelector(".listItem").appendChild(image);

image.classList.replace("image", "catImage");
image.alt = "This is a bongo cat";
image.height = 350;