class GitHub {
  constructor () {
    this.client_id = '95279d2eb414e1664970';
    this.client_secret = 'c576d21d219a99b61b3daccf2cc2a50874b7be7a';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`
      https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}
    `)

    const repoResponse = await fetch(`
      https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}
      &client_id=${this.client_id}&client_secret=${this.client_secret}
    `)

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profile,
      repos: repos
    }
  }
}