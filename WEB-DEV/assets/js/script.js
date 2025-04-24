document.getElementById('read-more-btn').addEventListener('click', function () {
  const hiddenText = document.querySelector('.hidden-text');
  const button = this;

  if (hiddenText.style.display === 'none') {
    hiddenText.style.display = 'inline';
    button.textContent = 'Read less'; // Change button text
  } else {
    hiddenText.style.display = 'none';
    button.textContent = 'Read more'; // Revert button text
  }
});