async function cargarMenus() {
  // obtener guardado post login
  const token = localStorage.getItem("token");
  const resp = await fetch("/api/menu", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const menus = await resp.json();
  const ul = document.getElementById("menu");

  // Clear menu post dibujado
  ul.innerHTML = "";

  // recorrer menús desde la API
  menus.forEach((m) => {
    const li = document.createElement("li");

    // crear link
    const link = document.createElement("a");

    // la ruta viene desde la base de datos
    link.href = m.ruta;

    // texto visible del menú
    link.innerText = m.nombre;

    // agregar el link dentro del li
    li.appendChild(link);

    // agregar el li al ul
    ul.appendChild(li);
  });
}

cargarMenus();
