function scrollup() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onload = function ondocload() {
  var button = document.getElementById('topbutton');
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }
};
