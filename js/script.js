
  let lat = 11.37837;
  let lng = -72.2395;

  const map = L.map('map').setView([lat, lng], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  let marker = L.marker([lat, lng]).addTo(map);

  async function actualizarInfo() {
    document.getElementById("lat").textContent = lat.toFixed(6);
    document.getElementById("lng").textContent = lng.toFixed(6);

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=es`);
      const data = await response.json();

      if (data && data.display_name) {
        // Formato 
        const addr = data.address;

        let via = addr.road || addr.pedestrian || addr.footway || "";
        let numero = addr.house_number || "";
        let barrio = addr.suburb || addr.neighbourhood || "";
        let ciudad = addr.city || addr.town || addr.village || "";

        let direccion = "";

        // FORMATO CORTO COLOMBIANO
        if (via) {
          direccion += via;
        }

        if (numero) {
          direccion += " #" + numero;
        }

        // Si no hay datos suficientes, fallback
        if (!direccion) {
          direccion = data.display_name;
        }

        document.getElementById("address").textContent = direccion;
      } else {
        document.getElementById("address").textContent = "Dirección no disponible";
      }
    } catch (error) {
      document.getElementById("address").textContent = "Error obteniendo dirección";
    }
  }

  actualizarInfo();

  function centrar() {
    map.setView([lat, lng], 18);
  }
