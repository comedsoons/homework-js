const title = document.createElement("h1");
title.textContent = "This is a bongo cat";
title.classList.add("text")
document.body.appendChild(title);

const textBox = document.createElement("div");
textBox.classList.add("textBox");
document.body.appendChild(textBox);


const paragraph = document.createElement("p");
paragraph.textContent = "Bongo Cat is an adorable drawing of a cat-like figure with pointed ears, a pleasant smile, and little pink paws that pat on whatever instrument its creators add."
paragraph.classList.add("paragraph");
textBox.appendChild(paragraph);

const link = document.createElement("a");
link.href = "https://bongo.cat/";
link.textContent = "Bongo Cat Game";
link.classList.add("link");
document.body.appendChild(link);