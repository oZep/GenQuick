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
