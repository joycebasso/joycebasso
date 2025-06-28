
const galeria = document.getElementById("galeria-dinamica");
const imagens = [
  "IMG_9536_jpg.jpg", "IMG_0593.jpg", "IMG_JB_PWR.jpeg",
  "IMG_0655.jpg", "IMG_0582.jpg", "DSC_0437.JPG",
  "01 FOTO.png", "Foto 58.JPG", "Foto JB_.jpeg", "IMG_4865.jpg"
];

imagens.forEach(nome => {
  const a = document.createElement("a");
  a.href = `img/fotos_galeria/${nome}`;
  a.target = "_blank";
  a.innerHTML = `<img src="img/fotos_galeria/${nome}" alt="">`;
  galeria.appendChild(a);
});
