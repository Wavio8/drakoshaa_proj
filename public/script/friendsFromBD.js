document.addEventListener('DOMContentLoaded', () => {
  const showMoreFriendsBtn = document.querySelector('#show-more-friends');

  showMoreFriendsBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const response = await fetch('/friend/all');
    console.log(response);
    if (response.status !== 200) {
      throw new Error('Failed to fetch friends');
    }
    const { friends } = await response.json();
    console.log(friends);

    const friendList = document.querySelector('#friend-list');
    friendList.innerHTML = '';

    friends.forEach((friend) => {
      const friendElement = document.createElement('li');
      friendElement.innerHTML = `
          <h3>${friend.name}</h3>
        `;
      friendList.appendChild(friendElement);
    });
  });
});
