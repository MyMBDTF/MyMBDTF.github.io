const canvas = document.getElementById("canvas");
canvas.width = 1500;
canvas.height = 1500;

const ctx = canvas.getContext("2d");

const fantasyImage = new Image();
fantasyImage.src = "mbdtf_cutout.png";

const uploadImage = new Image();
const uploadElem = document.getElementById("upload");
uploadElem.addEventListener("change", () => {
  const file = uploadElem.files[0];
  uploadImage.src = URL.createObjectURL(file);
  uploadImage.onload = () => {
    ctx.translate(750, 750);

    const w = Math.max(uploadImage.width, 569);
    const h = Math.max(uploadImage.height, 569);
    ctx.drawImage(uploadImage, -w/2, -w/2, w, h);

    ctx.translate(-750, -750);
    ctx.drawImage(fantasyImage, 0, 0);
  }

  document.getElementById("upbutton").classList.add("hidden");
  canvas.classList.remove("hidden");
}, false);
