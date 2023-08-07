// Get all buttons with specific IDs
const buttons = document.querySelectorAll('#mondstadt, #liyue, #inazuma, #sumeru, #fontaine, #enkanomiya, #chasm');

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const mapArea = button.id;
    const url = `https://genshin-impact-map.appsample.com/?map=${mapArea}`;
    window.open(url, '_blank');
  });
});

// Get all link buttons with the specified class namely for the subheaders   this is all to replace <a>
const linkButtons = document.querySelectorAll('.link-button');

// Add click event listener to each link button
linkButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const url = button.getAttribute('data-url');
    if (url) {
      window.open(url, '_blank');
    }
  });
});