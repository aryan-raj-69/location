db.ref("locations").on("value", (snapshot) => {
  const dataDiv = document.getElementById("data");
  dataDiv.innerHTML = "";

  const data = snapshot.val();
  for (let key in data) {
    const entry = data[key];
    dataDiv.innerHTML += `
      <div class="card">
        <p><strong>Phone:</strong> ${entry.phone}</p>
        <p><strong>Lat:</strong> ${entry.latitude}</p>
        <p><strong>Lng:</strong> ${entry.longitude}</p>
        <p><strong>Time:</strong> ${new Date(entry.timestamp).toLocaleString()}</p>
      </div>
    `;
  }
});
