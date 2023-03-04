const redirectFunction = (e) => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  
  let value = params.redirect;

  console.log("value", value);
  window.location.href = value;
};

const redirecto = document.getElementById("override-button");

redirecto.addEventListener("click", redirectFunction);
