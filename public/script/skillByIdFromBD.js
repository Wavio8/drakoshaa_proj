function loadSkill(skillId) {
  console.log(skillId);
  fetch(`/skill/${skillId}`)
    .then((response) => response.json())
    .then((data) => {
      const albumText = document.querySelector(
        `[data-skill-id="${skillId}"] .album__text`,
      );
      console.log(albumText);
      console.log(data);
      console.log(data.text);
      albumText.textContent = data.skill;
    })
    .catch((error) => console.error(error));
}

document.addEventListener('DOMContentLoaded', () => {
  const albumPreviews = document.querySelectorAll('.album__preview');
  albumPreviews.forEach((preview) => {
    const skillId = preview.dataset.skillId;
    loadSkill(skillId);
  });
});
