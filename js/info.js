let lat = 11.37837;
let lng = -72.2395;

async function actualizarInfo(){
  document.getElementById("lat").textContent = lat.toFixed(6);
  document.getElementById("lng").textContent = lng.toFixed(6);
  document.getElementById("time").textContent = new Date().toLocaleTimeString();

  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=es`);
    const data = await res.json();

    let addr = data.address;
    let via = addr.road || "";
    let num = addr.house_number || "";
    let city = addr.city || addr.town || addr.village || "";

    let direccion = via;
    if(num) direccion += " #" + num;

    document.getElementById("dir").textContent = direccion;
    document.getElementById("via").textContent = via;
    document.getElementById("num").textContent = num;
    document.getElementById("city").textContent = city;

  } catch (e) {
    document.getElementById("dir").textContent = "Error obteniendo dirección";
  }
}

actualizarInfo();
