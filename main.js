const socialMediaLinks = {
  github: 'ruanlandrade',
  instagram: 'ruanlandrade',
  youtube: 'UCkyIMmkmlBOzAwqDSdK83gw',
  twitter: 'RuanAndrade3'
}

function changeSocialMediaLinks () {
  for(let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href =`https://${social}.com/${socialMediaLinks[social]}`;
      
  }      
}

function getGitHubProfileInfos() {
  const url =`https://api.github.com/users/${socialMediaLinks.github}`;

  fetch(url).then(response => response.json())
  .then(data => {
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLink.href = data.html_url;
    userAvatar.src = data.avatar_url;
    userLogin.textContent = data.login;
  });
}
getGitHubProfileInfos();