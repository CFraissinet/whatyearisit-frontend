fetch("https://whatyearisit-backend-prwggc2l0-cfraissinet.vercel.app/year")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#year").textContent = data.year;
  });
