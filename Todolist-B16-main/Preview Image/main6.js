var upload = document.querySelector("#mypicture");
var preview = document.querySelector(".preview");

upload.addEventListener("change", function (e) {
  var file = upload.files[0];
  if (!file) return;

  if (!file.name.endsWith(".jpg")) {
    console.log("Hinh anh phai thuoc dinh dang jpeg");
    return;
  } else {
    error.innerHTML = `Chi duoc up anh 5MB`;
  }

  console.log(file);

  var img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  preview.appendChild(img);
});
