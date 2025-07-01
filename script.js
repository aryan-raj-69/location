function sendLocation() {
  const phone = document.getElementById("phone").value;
  if (!phone) {
    alert("Please enter your phone number");
    return;
  }

  navigator.geolocation.getCurrentPosition((position) => {
    const locationData = {
      phone: phone,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      timestamp: Date.now()
    };

    const newRef = db.ref("locations").push();
    newRef.set(locationData)
      .then(() => alert("Location sent successfully"))
      .catch((error) => alert("Error: " + error.message));
  }, (err) => {
    alert("Location access denied");
  });
}
