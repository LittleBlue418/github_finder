class GitHub {
  constructor () {
    this.client_id = '95279d2eb414e1664970';
    this.client_secret = 'c576d21d219a99b61b3daccf2cc2a50874b7be7a';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json();

    return {
      profile: profile
    }
  }
}