const LinksSocialMedia = {
  github: 'dastan160',
  youtube: 'UCZbXIGAasy--jmMl0ePxq9w',
  facebook: 'Dastan160',
  instagram: 'dastan35',
  twitter: 'dastannnnn'
}

function changeSocialMediaLink() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLink()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGithubProfileInfos()

//boas praticas para codar
//camelCase
//PascalCase
//snake_case

//ser humano 12345
//computador 0123456
