const filterButtons = document.querySelectorAll('.filter-buttons button');
const videoCards = document.querySelectorAll('.video-card');

function filterVideos(category) {
  filterButtons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  videoCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Auto-play video on hover
document.querySelectorAll('.video-card video').forEach(video => {
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => video.pause());
});
function scrollToDiv(DivId) {
  document.getElementById(DivId).scrollIntoView({
    behavior: "smooth"
  });
};
document.getElementById("main-contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your request has been submitted.");
  // Later: connect this to Google Sheets, Email API, or your backend.
});

//contact section fetching
document.getElementById("main-contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    video_type: form.video_type.value,
    message: form.message.value
  };

  fetch("https://script.google.com/macros/s/AKfycbxaHZ6AtehUIRbryakKdlKONsLY1KQ3nX9XDj6cjHntdPkIMTJ4LM1FujTa74-I0HU9/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(() => {
    alert("Thank you! Your request has been submitted.");
    form.reset();
  }).catch(() => {
    alert("There was an error. Please try again later.");
  });
});