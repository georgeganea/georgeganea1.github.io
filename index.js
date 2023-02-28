const redirectFunction = (e) => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?redirect=facebook.com"
  let value = params.redirect; // "facebook.com"

  console.log("value", value);
  window.location.href = value;

  // chrome.tabs.update((updateProperties = { url: value }));
};

const redirecto = document.getElementById("override-button");

redirecto.addEventListener("click", redirectFunction);
