export { 
  NEWS_CARDS_CONTAINER,
  NEWS_NOT_FOUND_CONTAINER,
  RESULT_CONTAINER,
  NEWS_API_CONFIG,
  SEARCH_FORM,
  INPUT_REQUEST,
  SHOW_MORE_BUTTON,

  TEST_NEWS,

  COMMIT_CARDS_CONTAINER,
  GITHUB_API_URL,
  SWIPER_CONTAINER,
  SWIPER_CONFIG,
};



const NEWS_CARDS_CONTAINER = document.querySelector('.result__cards-list');

const NEWS_NOT_FOUND_CONTAINER = document.querySelector('.not-found');

const RESULT_CONTAINER = document.querySelector('.result');

const NEWS_API_CONFIG = {
  url: 'https://nomoreparties.co/news/v2/everything?',
  headers: {
    authorization: '153e4610e1864db79dbf8252a34f5610',
    'Content-Type': 'application/json'
  }
};

const SEARCH_FORM = document.forms.searchForm;

const INPUT_REQUEST = searchForm.elements.searchInput;

const SHOW_MORE_BUTTON = document.querySelector('.result__button-more');


const COMMIT_CARDS_CONTAINER = document.querySelector('.history__cards-list');

const GITHUB_API_URL = 'https://api.github.com/repos/perkenton/news-analyzer-diplom/commits';

const SWIPER_CONTAINER = '.swiper-container';

const SWIPER_CONFIG = {
  init: true,
  slidesPerView: 'auto',
  setWrapperSize: true,
  grabCursor: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}


const TEST_DATA = [
  {
      "sha": "ad5cee9a432723918faabcd38b301c5947595ba7",
      "node_id": "MDY6Q29tbWl0MjgxNzUxMDQ0OmFkNWNlZTlhNDMyNzIzOTE4ZmFhYmNkMzhiMzAxYzU5NDc1OTViYTc=",
      "commit": {
          "author": {
              "name": "perkenton",
              "email": "42587922+perkenton@users.noreply.github.com",
              "date": "2020-08-06T17:21:37Z"
          },
          "committer": {
              "name": "GitHub",
              "email": "noreply@github.com",
              "date": "2020-08-06T17:21:37Z"
          },
          "message": "Merge pull request #1 from perkenton/level-1\n\nLevel 1",
          "tree": {
              "sha": "7da449ec2ff9df2d853158c6916a62b5b71f2bdd",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/trees/7da449ec2ff9df2d853158c6916a62b5b71f2bdd"
          },
          "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/commits/ad5cee9a432723918faabcd38b301c5947595ba7",
          "comment_count": 0,
          "verification": {
              "verified": true,
              "reason": "valid",
              "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJfLDwhCRBK7hj4Ov3rIwAAdHIIAICsa6lyhELxFMGXmz1J4e/Z\n5WNFz6UjlBOk8fZYR8QVgnDAVRTlSnfFnjy4uQ8IjWEtGzrglJLEbAbFDK2Yt3tO\nmeNhh7yNJCIJOKJDSxfuFlRS7fngSEobNKN90fLuURue1cowa78AzfiRtACkQXKq\n+QpQcpXG5LaNVGx5wUYN5DHIOl0U9oyK+ZHBHg/YgoCf8vXjIyLHf2LEaynxNIB3\nAYQV3CnJFvcuhnADQhkEIayBer+ncbh0u/vyMJqrb5BJL38rHBs5mcH+1kCEHcjn\nXREYe07jCvBMYk7dMFr5I/h1GSp8xBYRGIm/e0H0XVQMx9AofHKWyPGFigtBrOQ=\n=RSG2\n-----END PGP SIGNATURE-----\n",
              "payload": "tree 7da449ec2ff9df2d853158c6916a62b5b71f2bdd\nparent 5478ff6ed91407aa95146bcf02f55e659063c7d4\nparent 3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20\nauthor perkenton <42587922+perkenton@users.noreply.github.com> 1596734497 +0300\ncommitter GitHub <noreply@github.com> 1596734497 +0300\n\nMerge pull request #1 from perkenton/level-1\n\nLevel 1"
          }
      },
      "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/ad5cee9a432723918faabcd38b301c5947595ba7",
      "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/ad5cee9a432723918faabcd38b301c5947595ba7",
      "comments_url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/ad5cee9a432723918faabcd38b301c5947595ba7/comments",
      "author": {
          "login": "perkenton",
          "id": 42587922,
          "node_id": "MDQ6VXNlcjQyNTg3OTIy",
          "avatar_url": "https://avatars3.githubusercontent.com/u/42587922?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/perkenton",
          "html_url": "https://github.com/perkenton",
          "followers_url": "https://api.github.com/users/perkenton/followers",
          "following_url": "https://api.github.com/users/perkenton/following{/other_user}",
          "gists_url": "https://api.github.com/users/perkenton/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/perkenton/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/perkenton/subscriptions",
          "organizations_url": "https://api.github.com/users/perkenton/orgs",
          "repos_url": "https://api.github.com/users/perkenton/repos",
          "events_url": "https://api.github.com/users/perkenton/events{/privacy}",
          "received_events_url": "https://api.github.com/users/perkenton/received_events",
          "type": "User",
          "site_admin": false
      },
      "committer": {
          "login": "web-flow",
          "id": 19864447,
          "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
          "avatar_url": "https://avatars3.githubusercontent.com/u/42587922?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/web-flow",
          "html_url": "https://github.com/web-flow",
          "followers_url": "https://api.github.com/users/web-flow/followers",
          "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
          "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
          "organizations_url": "https://api.github.com/users/web-flow/orgs",
          "repos_url": "https://api.github.com/users/web-flow/repos",
          "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
          "received_events_url": "https://api.github.com/users/web-flow/received_events",
          "type": "User",
          "site_admin": false
      },
      "parents": [
          {
              "sha": "5478ff6ed91407aa95146bcf02f55e659063c7d4",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/5478ff6ed91407aa95146bcf02f55e659063c7d4",
              "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/5478ff6ed91407aa95146bcf02f55e659063c7d4"
          },
          {
              "sha": "3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
              "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20"
          }
      ]
  },
  {
      "sha": "ad5cee9a432723918faabcd38b301c5947595ba7",
      "node_id": "MDY6Q29tbWl0MjgxNzUxMDQ0OmFkNWNlZTlhNDMyNzIzOTE4ZmFhYmNkMzhiMzAxYzU5NDc1OTViYTc=",
      "commit": {
          "author": {
              "name": "perkenton",
              "email": "42587922+perkenton@users.noreply.github.com",
              "date": "2020-08-06T17:21:37Z"
          },
          "committer": {
              "name": "GitHub",
              "email": "noreply@github.com",
              "date": "2020-08-06T17:21:37Z"
          },
          "message": "Merge pull request #1 from perkenton/level-1\n\nLevel 1",
          "tree": {
              "sha": "7da449ec2ff9df2d853158c6916a62b5b71f2bdd",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/trees/7da449ec2ff9df2d853158c6916a62b5b71f2bdd"
          },
          "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/commits/ad5cee9a432723918faabcd38b301c5947595ba7",
          "comment_count": 0,
          "verification": {
              "verified": true,
              "reason": "valid",
              "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJfLDwhCRBK7hj4Ov3rIwAAdHIIAICsa6lyhELxFMGXmz1J4e/Z\n5WNFz6UjlBOk8fZYR8QVgnDAVRTlSnfFnjy4uQ8IjWEtGzrglJLEbAbFDK2Yt3tO\nmeNhh7yNJCIJOKJDSxfuFlRS7fngSEobNKN90fLuURue1cowa78AzfiRtACkQXKq\n+QpQcpXG5LaNVGx5wUYN5DHIOl0U9oyK+ZHBHg/YgoCf8vXjIyLHf2LEaynxNIB3\nAYQV3CnJFvcuhnADQhkEIayBer+ncbh0u/vyMJqrb5BJL38rHBs5mcH+1kCEHcjn\nXREYe07jCvBMYk7dMFr5I/h1GSp8xBYRGIm/e0H0XVQMx9AofHKWyPGFigtBrOQ=\n=RSG2\n-----END PGP SIGNATURE-----\n",
              "payload": "tree 7da449ec2ff9df2d853158c6916a62b5b71f2bdd\nparent 5478ff6ed91407aa95146bcf02f55e659063c7d4\nparent 3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20\nauthor perkenton <42587922+perkenton@users.noreply.github.com> 1596734497 +0300\ncommitter GitHub <noreply@github.com> 1596734497 +0300\n\nMerge pull request #1 from perkenton/level-1\n\nLevel 1"
          }
      },
      "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/ad5cee9a432723918faabcd38b301c5947595ba7",
      "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/ad5cee9a432723918faabcd38b301c5947595ba7",
      "comments_url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/ad5cee9a432723918faabcd38b301c5947595ba7/comments",
      "author": {
          "login": "perkenton",
          "id": 42587922,
          "node_id": "MDQ6VXNlcjQyNTg3OTIy",
          "avatar_url": "https://avatars3.githubusercontent.com/u/42587922?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/perkenton",
          "html_url": "https://github.com/perkenton",
          "followers_url": "https://api.github.com/users/perkenton/followers",
          "following_url": "https://api.github.com/users/perkenton/following{/other_user}",
          "gists_url": "https://api.github.com/users/perkenton/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/perkenton/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/perkenton/subscriptions",
          "organizations_url": "https://api.github.com/users/perkenton/orgs",
          "repos_url": "https://api.github.com/users/perkenton/repos",
          "events_url": "https://api.github.com/users/perkenton/events{/privacy}",
          "received_events_url": "https://api.github.com/users/perkenton/received_events",
          "type": "User",
          "site_admin": false
      },
      "committer": {
          "login": "web-flow",
          "id": 19864447,
          "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
          "avatar_url": "https://avatars3.githubusercontent.com/u/42587922?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/web-flow",
          "html_url": "https://github.com/web-flow",
          "followers_url": "https://api.github.com/users/web-flow/followers",
          "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
          "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
          "organizations_url": "https://api.github.com/users/web-flow/orgs",
          "repos_url": "https://api.github.com/users/web-flow/repos",
          "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
          "received_events_url": "https://api.github.com/users/web-flow/received_events",
          "type": "User",
          "site_admin": false
      },
      "parents": [
          {
              "sha": "5478ff6ed91407aa95146bcf02f55e659063c7d4",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/5478ff6ed91407aa95146bcf02f55e659063c7d4",
              "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/5478ff6ed91407aa95146bcf02f55e659063c7d4"
          },
          {
              "sha": "3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
              "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20"
          }
      ]
  },
  {
      "sha": "ad5cee9a432723918faabcd38b301c5947595ba7",
      "node_id": "MDY6Q29tbWl0MjgxNzUxMDQ0OmFkNWNlZTlhNDMyNzIzOTE4ZmFhYmNkMzhiMzAxYzU5NDc1OTViYTc=",
      "commit": {
          "author": {
              "name": "perkenton",
              "email": "42587922+perkenton@users.noreply.github.com",
              "date": "2020-08-06T17:21:37Z"
          },
          "committer": {
              "name": "GitHub",
              "email": "noreply@github.com",
              "date": "2020-08-06T17:21:37Z"
          },
          "message": "Merge pull request #1 from perkenton/level-1\n\nLevel 1",
          "tree": {
              "sha": "7da449ec2ff9df2d853158c6916a62b5b71f2bdd",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/trees/7da449ec2ff9df2d853158c6916a62b5b71f2bdd"
          },
          "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/commits/ad5cee9a432723918faabcd38b301c5947595ba7",
          "comment_count": 0,
          "verification": {
              "verified": true,
              "reason": "valid",
              "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJfLDwhCRBK7hj4Ov3rIwAAdHIIAICsa6lyhELxFMGXmz1J4e/Z\n5WNFz6UjlBOk8fZYR8QVgnDAVRTlSnfFnjy4uQ8IjWEtGzrglJLEbAbFDK2Yt3tO\nmeNhh7yNJCIJOKJDSxfuFlRS7fngSEobNKN90fLuURue1cowa78AzfiRtACkQXKq\n+QpQcpXG5LaNVGx5wUYN5DHIOl0U9oyK+ZHBHg/YgoCf8vXjIyLHf2LEaynxNIB3\nAYQV3CnJFvcuhnADQhkEIayBer+ncbh0u/vyMJqrb5BJL38rHBs5mcH+1kCEHcjn\nXREYe07jCvBMYk7dMFr5I/h1GSp8xBYRGIm/e0H0XVQMx9AofHKWyPGFigtBrOQ=\n=RSG2\n-----END PGP SIGNATURE-----\n",
              "payload": "tree 7da449ec2ff9df2d853158c6916a62b5b71f2bdd\nparent 5478ff6ed91407aa95146bcf02f55e659063c7d4\nparent 3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20\nauthor perkenton <42587922+perkenton@users.noreply.github.com> 1596734497 +0300\ncommitter GitHub <noreply@github.com> 1596734497 +0300\n\nMerge pull request #1 from perkenton/level-1\n\nLevel 1"
          }
      },
      "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/ad5cee9a432723918faabcd38b301c5947595ba7",
      "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/ad5cee9a432723918faabcd38b301c5947595ba7",
      "comments_url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/ad5cee9a432723918faabcd38b301c5947595ba7/comments",
      "author": {
          "login": "perkenton",
          "id": 42587922,
          "node_id": "MDQ6VXNlcjQyNTg3OTIy",
          "avatar_url": "https://avatars3.githubusercontent.com/u/42587922?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/perkenton",
          "html_url": "https://github.com/perkenton",
          "followers_url": "https://api.github.com/users/perkenton/followers",
          "following_url": "https://api.github.com/users/perkenton/following{/other_user}",
          "gists_url": "https://api.github.com/users/perkenton/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/perkenton/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/perkenton/subscriptions",
          "organizations_url": "https://api.github.com/users/perkenton/orgs",
          "repos_url": "https://api.github.com/users/perkenton/repos",
          "events_url": "https://api.github.com/users/perkenton/events{/privacy}",
          "received_events_url": "https://api.github.com/users/perkenton/received_events",
          "type": "User",
          "site_admin": false
      },
      "committer": {
          "login": "web-flow",
          "id": 19864447,
          "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
          "avatar_url": "https://avatars3.githubusercontent.com/u/42587922?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/web-flow",
          "html_url": "https://github.com/web-flow",
          "followers_url": "https://api.github.com/users/web-flow/followers",
          "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
          "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
          "organizations_url": "https://api.github.com/users/web-flow/orgs",
          "repos_url": "https://api.github.com/users/web-flow/repos",
          "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
          "received_events_url": "https://api.github.com/users/web-flow/received_events",
          "type": "User",
          "site_admin": false
      },
      "parents": [
          {
              "sha": "5478ff6ed91407aa95146bcf02f55e659063c7d4",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/5478ff6ed91407aa95146bcf02f55e659063c7d4",
              "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/5478ff6ed91407aa95146bcf02f55e659063c7d4"
          },
          {
              "sha": "3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
              "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20"
          }
      ]
  },
  {
      "sha": "3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
      "node_id": "MDY6Q29tbWl0MjgxNzUxMDQ0OjNmYzI1ZjE1MDI2ZTZlOGNkZjJkZmMwYjIzY2FlNmZjZWU5MmJmMjA=",
      "commit": {
          "author": {
              "name": "Alexander Vasiliev",
              "email": "selado@ya.ru",
              "date": "2020-08-06T01:51:19Z"
          },
          "committer": {
              "name": "Alexander Vasiliev",
              "email": "selado@ya.ru",
              "date": "2020-08-06T01:51:19Z"
          },
          "message": "fix one little bug",
          "tree": {
              "sha": "7da449ec2ff9df2d853158c6916a62b5b71f2bdd",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/trees/7da449ec2ff9df2d853158c6916a62b5b71f2bdd"
          },
          "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/commits/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
          "comment_count": 0,
          "verification": {
              "verified": false,
              "reason": "unsigned",
              "signature": null,
              "payload": null
          }
      },
      "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
      "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
      "comments_url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20/comments",
      "author": { "avatar_url": "https://avatars3.githubusercontent.com/u/42587922?v=4", },
      "committer": null,
      "parents": [
          {
              "sha": "32940e164d4e7613240c63373ee14e34a0541b78",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/32940e164d4e7613240c63373ee14e34a0541b78",
              "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/32940e164d4e7613240c63373ee14e34a0541b78"
          }
      ]
  },
  {
      "sha": "32940e164d4e7613240c63373ee14e34a0541b78",
      "node_id": "MDY6Q29tbWl0MjgxNzUxMDQ0OjMyOTQwZTE2NGQ0ZTc2MTMyNDBjNjMzNzNlZTE0ZTM0YTA1NDFiNzg=",
      "commit": {
          "author": {
              "name": "Alexander Vasiliev",
              "email": "selado@ya.ru",
              "date": "2020-08-06T01:47:02Z"
          },
          "committer": {
              "name": "Alexander Vasiliev",
              "email": "selado@ya.ru",
              "date": "2020-08-06T01:47:02Z"
          },
          "message": "fix some little bugs again",
          "tree": {
              "sha": "01ad7bfb2ca4b1095364f24cc5ae33be955b48b3",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/trees/01ad7bfb2ca4b1095364f24cc5ae33be955b48b3"
          },
          "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/commits/32940e164d4e7613240c63373ee14e34a0541b78",
          "comment_count": 0,
          "verification": {
              "verified": false,
              "reason": "unsigned",
              "signature": null,
              "payload": null
          }
      },
      "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/32940e164d4e7613240c63373ee14e34a0541b78",
      "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/32940e164d4e7613240c63373ee14e34a0541b78",
      "comments_url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/32940e164d4e7613240c63373ee14e34a0541b78/comments",
      "author": null, //{ "avatar_url": "../../images/user-01.jpg", },
      "committer": null,
      "parents": [
          {
              "sha": "82c07683ddaf2ac3a4e23d1fafb808745b7b35c2",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/82c07683ddaf2ac3a4e23d1fafb808745b7b35c2",
              "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/82c07683ddaf2ac3a4e23d1fafb808745b7b35c2"
          }
      ]
  },
  {
      "sha": "82c07683ddaf2ac3a4e23d1fafb808745b7b35c2",
      "node_id": "MDY6Q29tbWl0MjgxNzUxMDQ0OjgyYzA3NjgzZGRhZjJhYzNhNGUyM2QxZmFmYjgwODc0NWI3YjM1YzI=",
      "commit": {
          "author": {
              "name": "Alexander Vasiliev",
              "email": "selado@ya.ru",
              "date": "2020-08-06T01:10:48Z"
          },
          "committer": {
              "name": "Alexander Vasiliev",
              "email": "selado@ya.ru",
              "date": "2020-08-06T01:10:48Z"
          },
          "message": "fix some little bugs",
          "tree": {
              "sha": "487399984a72d0267cc74593d69626eab7bfe31f",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/trees/487399984a72d0267cc74593d69626eab7bfe31f"
          },
          "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/commits/82c07683ddaf2ac3a4e23d1fafb808745b7b35c2",
          "comment_count": 0,
          "verification": {
              "verified": false,
              "reason": "unsigned",
              "signature": null,
              "payload": null
          }
      },
      "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/82c07683ddaf2ac3a4e23d1fafb808745b7b35c2",
      "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/82c07683ddaf2ac3a4e23d1fafb808745b7b35c2",
      "comments_url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/82c07683ddaf2ac3a4e23d1fafb808745b7b35c2/comments",
      "author": { "avatar_url": "../../images/user-01.jpg", },
      "committer": null,
      "parents": [
          {
              "sha": "efa9d37dc2d952654e9a9c9ee162576a7af1cd80",
              "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/efa9d37dc2d952654e9a9c9ee162576a7af1cd80",
              "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/efa9d37dc2d952654e9a9c9ee162576a7af1cd80"
          }
      ]
  },
];

const TEST_NEWS = {
    "status": "ok",
    "totalResults": 1358,
    "articles": [
        {
            "source": {
                "id": "lenta",
                "name": "Lenta"
            },
            "author": null,
            "title": "Россиянам пообещали осеннюю погоду в августе",
            "description": "Европейскую часть России ждет осенняя погода, рассказал научный руководитель Гидрометцентра России Роман Вильфанд. Понижение температуры и дожди ожидаются с середины недели в Северо-Западном, Центральном и Приволжском федеральных округах.  «Такая погода должн…",
            "url": "https://lenta.ru/news/2020/08/10/autumn/",
            "urlToImage": "https://icdn.lenta.ru/images/2020/08/10/03/20200810031004734/share_46ab9161a13818a1404f50bb24f83fe8.jpg",
            "publishedAt": "2020-08-10T00:10:47Z",
            "content": ". .\r\n , -, .\r\n , , 13 , 3-4 . « », .\r\n «» , . , , . , 21-26 . 20 ."
        },
        {
            "source": {
                "id": "lenta",
                "name": "Lenta"
            },
            "author": null,
            "title": "Нескольким российским регионам предсказали «волну жары»",
            "description": "Нескольким российским регионам предсказали «волну жары» — температура поднимется выше нормы на  6-7 градусов.  В Свердловской, Челябинской, Курганской и Тюменской областях температура держится на отметке в 33-38 градусов, иногда поднимаясь до 40 градусов. Так…",
            "url": "https://lenta.ru/news/2020/07/13/wave/",
            "urlToImage": "https://icdn.lenta.ru/images/2020/07/13/08/20200713081043328/share_b52183074085ba1b78fe139015751b3c.jpg",
            "publishedAt": "2020-07-13T05:13:24Z",
            "content": "« »   6-7 . , .\r\n , , , 33-38 , 40 , 6-7 .\r\n , , , .\r\n, ,   . , . , . ,   ."
        },
        {
            "source": {
                "id": "lenta",
                "name": "Lenta"
            },
            "author": null,
            "title": "Отдыхающим в Сочи туристам запретили купаться",
            "description": "Как отметили авторы издания, этим летом погода на Кубани «впадает из крайности в крайность»: в начале июля в регионе зафиксировали аномальную жару, а в середине месяца синоптики объявили на курортах штормовое предупреждение. Синоптики объявили на курорте штор…",
            "url": "https://lenta.ru/news/2020/07/12/so4i/",
            "urlToImage": "https://icdn.lenta.ru/images/2020/07/12/22/20200712221458919/share_b58db2120c628ffe653b80db75909468.jpg",
            "publishedAt": "2020-07-13T02:29:48Z",
            "content": ", , - . « ».\r\n , . , 12 14 ( ), 22 , .\r\n, . .\r\n , . , .\r\n*** «»: , , : travel@lenta-co.ru"
        },
        {
            "source": {
                "id": "lenta",
                "name": "Lenta"
            },
            "author": null,
            "title": "Названы сроки окончания аномальных дождей в России",
            "description": "Аномальные дожди продолжатся на европейской части России до конца июля, с наступлением августа погода должна нормализоваться. Об этом рассказал ведущий специалист центра погоды «Фобос» Евгений Тишковец. По его словам, в июле ожидаются лишь «какие-то короткие …",
            "url": "https://lenta.ru/news/2020/07/21/rainsrains/",
            "urlToImage": "https://icdn.lenta.ru/images/2020/07/21/17/20200721171922835/share_e7d65f4ac2424bc6348c7e63557d3f3b.jpg",
            "publishedAt": "2020-07-21T14:39:14Z",
            "content": ", . «» «».\r\n , «- », « » . . « 30, », .\r\n , 15 25 .\r\n . , , , ."
        },
        {
            "source": {
                "id": "lenta",
                "name": "Lenta"
            },
            "author": null,
            "title": "Российским регионам спрогнозировали аномальное тепло",
            "description": "Аномально теплая погода продлится до конца недели на севере европейской части России, на Урале. Сильнее всего отклонения от климатической нормы проявятся в Якутии. Там температура будет выше средних показателей на 14 градусов и составит плюс 26-31, сообщил Ро…",
            "url": "https://lenta.ru/news/2020/07/22/warm/",
            "urlToImage": "https://icdn.lenta.ru/images/2020/07/22/11/20200722110330974/share_d9782830ad2c720323c5b591fe5fb777.png",
            "publishedAt": "2020-07-22T08:20:00Z",
            "content": ""
        },
        {
            "source": {
                "id": "lenta",
                "name": "Lenta"
            },
            "author": null,
            "title": "Москвичей предупредили о преждевременной осени",
            "description": "Со следующей недели в Москве ожидается существенное похолодание и осенние дожди. О преждевременной осени жителей столицы предупредила специалист столичного метеобюро Татьяна Позднякова. При этом она подчеркнула, что спрогнозировать, как долго в столице продер…",
            "url": "https://lenta.ru/news/2020/08/04/autumn/",
            "urlToImage": "https://icdn.lenta.ru/images/2020/08/04/16/20200804161457740/share_7cfc1cb548b41bac761f0ec6b90817f9.jpg",
            "publishedAt": "2020-08-04T13:23:44Z",
            "content": ". , .\r\n« , , 13-15 , », , , , , .\r\n . , «» . , , , «» ."
        },
        {
            "source": {
                "id": null,
                "name": "Bash.im"
            },
            "author": null,
            "title": "Цитата #462182",
            "description": "xxx: Погода очень странная\r\nxxx: Льют дожди\r\nxxx: По идее должно хотеться спать\r\nxxx: Но меня чето наоборот штырит даже сильнее, чем в жару\r\nxxx: Так сегодня успел сделать все, что планировал до конца недели\r\nxxx: Какой-то неправильный дождь",
            "url": "https://bash.im/quote/462182",
            "urlToImage": "https://bash.im/img/url-fb.gif",
            "publishedAt": "2020-07-28T04:44:50Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "F1news.ru"
            },
            "author": "Татьяна Бельская",
            "title": "Марко: Прохладная погода нам не подходит",
            "description": "Спортивный консультант Red Bull Хельмут Марко считает, что прохладные условия помешают Максу Ферстаппену в борьбе с Льюисом Хэмилтоном в Гран При Штирии.",
            "url": "https://www.f1news.ru/news/f1-145642.html",
            "urlToImage": "https://cdn.f1ne.ws/userfiles/marko/145642.jpg",
            "publishedAt": "2020-07-12T09:51:00Z",
            "content": "Red Bull , .\r\n : « , Mercedes , . . 60:40. .\r\n 1,2 . »."
        },
        {
            "source": {
                "id": null,
                "name": "F1news.ru"
            },
            "author": "Дмитрий Бухаров",
            "title": "Макс Ферстаппен: Посмотрим, какой завтра будет погода",
            "description": "Макс Ферстаппен возглавил протокол второй пятничной тренировки, но воздержался от прогноза на уик-энд…",
            "url": "https://www.f1news.ru/news/f1-145578.html",
            "urlToImage": "https://cdn.f1ne.ws/userfiles/max_verstappen/145578.jpg",
            "publishedAt": "2020-07-10T16:07:00Z",
            "content": ", -\r\n (1-): « . , , Mercedes, . , , .\r\n, , - . . , , , .\r\n- , , , , ».\r\n (7-): « , , . \r\n, , . , , , , , .\r\n, . , , . , - »."
        },
        {
            "source": {
                "id": null,
                "name": "F1news.ru"
            },
            "author": "Дмитрий Бухаров",
            "title": "Гран При Великобритании: Прогноз погоды на уик-энд",
            "description": "Погода в ближайший гоночный уик-энд в Сильверстоуне будет традиционно переменчивой...",
            "url": "https://www.f1news.ru/news/f1-146047.html",
            "urlToImage": "https://cdn.f1ne.ws/userfiles/138266.jpg",
            "publishedAt": "2020-07-29T21:00:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "F1news.ru"
            },
            "author": "Дмитрий Бухаров",
            "title": "Гран При 70-летия: Прогноз погоды на уик-энд",
            "description": "В этот уик-энд погода в Сильверстоуне будет чуть более жаркой, чем неделю назад...",
            "url": "https://www.f1news.ru/news/f1-146257.html",
            "urlToImage": "https://cdn.f1ne.ws/userfiles/146257.jpg",
            "publishedAt": "2020-08-05T21:00:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "F1news.ru"
            },
            "author": "Дмитрий Бухаров",
            "title": "Марио Изола: При жаркой погоде шинам ещё сложнее",
            "description": "К традиционным высоким перегрузкам Сильверстоуна добавилась жаркая погода – и резине пришлось непросто...",
            "url": "https://www.f1news.ru/news/f1-146120.html",
            "urlToImage": "https://cdn.f1ne.ws/userfiles/pirelli/146120.jpg",
            "publishedAt": "2020-07-31T16:59:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Bash.im"
            },
            "author": null,
            "title": "Цитата #462042",
            "description": "Вечером пошли на прогулку. Я - маленькая и заметно беременная, муж - большой и на костылях (сустрав повредил, на ногу наступать нельзя). Погода хорошая, встретили кучу знакомых, и реально каждый из тех, кто нас давно не видел, озабоченно спрашивал, за что я е…",
            "url": "https://bash.im/quote/462042",
            "urlToImage": "https://bash.im/img/url-fb.gif",
            "publishedAt": "2020-07-16T04:45:01Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "F1news.ru"
            },
            "author": "Дмитрий Бухаров",
            "title": "Изола: Гран При Испании станет серьёзным испытанием",
            "description": "В феврале и марте команды работали на тестах в Барселоне, но в середине августа там будет совсем другая погода…",
            "url": "https://www.f1news.ru/news/f1-146463.html",
            "urlToImage": "https://cdn.f1ne.ws/userfiles/pirelli/145835.jpg",
            "publishedAt": "2020-08-10T14:23:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "F1news.ru"
            },
            "author": "Дмитрий Бухаров",
            "title": "Марко: Мы не можем даже мечтать о подиуме",
            "description": "Гоночный консультант Red Bull Хельмут Марко недоволен скоростью машины и считает, что добиться хорошего результата в этот уик-энд может помочь только погода…",
            "url": "https://www.f1news.ru/news/f1-145833.html",
            "urlToImage": "https://cdn.f1ne.ws/userfiles/marko/145833.jpg",
            "publishedAt": "2020-07-18T15:25:00Z",
            "content": "Red Bull , - \r\n: « , . , , . . , Mercedes 1,4 .\r\n, , , .\r\n, - , . , »."
        },
        {
            "source": {
                "id": null,
                "name": "F1news.ru"
            },
            "author": null,
            "title": "Майландер: Решение ждать улучшения погоды было верным",
            "description": "Погода была главным фактором, влиявшим на интригу субботних событий, а когда льёт дождь, одним из главных действующих лиц становится Бернд Майландер, водитель автомобиля безопасности FIA...",
            "url": "https://www.f1news.ru/interview/maylander/145639.shtml",
            "urlToImage": "https://cdn.f1ne.ws/userfiles/maylander/145639.jpg",
            "publishedAt": "2020-07-11T20:33:00Z",
            "content": ", , , , FIA. , , FIA. Red Bull Ring.\r\n: ? ? : , , , , .\r\n , , , , , , . , - , 1, 2 3.\r\n - , , 1. - , . : .\r\n 2, , .\r\n: , 1? : , , , , 14.00 14.45 . . , , , .\r\n: ? : - , . 6- 7- , 8- . , .\r\n-, , - , ,… [+92 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "F1news.ru"
            },
            "author": "Андрей Лось",
            "title": "Феттелю уже интересно, какая погода будет на Нюрбургринге",
            "description": "Себастьян Феттель приветствует возвращение Нюрбургринга в календарь Формулы 1 после семилетнего перерыва, ведь легендарная немецкая трасса последний раз принимала Гран При Германии в 2013 году...",
            "url": "https://www.f1news.ru/news/f1-145991.html",
            "urlToImage": "https://cdn.f1ne.ws/userfiles/vettel/145991.jpg",
            "publishedAt": "2020-07-25T18:56:00Z",
            "content": "1 , 2013 . , , 11 , .\r\n«! !» , .\r\n« . 1 , . Red Bull ( 2009- ). , 2013 .\r\n , . , , , »."
        },
        {
            "source": {
                "id": null,
                "name": "Mobile-review.com"
            },
            "author": null,
            "title": "Гид по акциям и скидкам №123",
            "description": "Лето в самом разгаре, а погода радует то жарой, то ливнями. Может, и нас заодно прожарит и зальет какими-то небывалыми скидками? Давайте проверим!…",
            "url": "https://mobile-review.com/articles/2020/discounts-123.shtml",
            "urlToImage": null,
            "publishedAt": "2020-07-16T20:33:20Z",
            "content": "« » : 100- , 111- , 123-. : ?\r\n«.»\r\n «.» « ». , BLM, , , «.» , «  — ,      —     ». , , AR-15. , – . , , , . \r\n «.» «». , - 5%. , . +5% . , . , «.», . -, « Vivo». 3 (, ), 6 ( ), . -, Vivo Y30, 20 2 .… [+1026 chars]"
        },
        {
            "source": {
                "id": "rbc",
                "name": "RBC"
            },
            "author": null,
            "title": "Гидрометцентр сообщил о возвращении лета в Москву",
            "description": "В ближайшие несколько дней в Москве будет стоять нормальная летняя погода. Об этом сообщил научный руководитель Гидрометцентра России Роман Вильфанд, передает ТАСС. Наступает нормальное московское ...",
            "url": "https://www.rbc.ru/rbcfreenews/5f122af39a79470d6c013fdd",
            "urlToImage": "https://s0.rbk.ru/v6_top_pics/media/img/4/08/755950265434084.jpg",
            "publishedAt": "2020-07-17T22:55:42Z",
            "content": ""
        },
        {
            "source": {
                "id": null,
                "name": "F1news.ru"
            },
            "author": "Михаил Смирнов",
            "title": "Кими Райкконен: Мы упустили хороший шанс",
            "description": "Неудачно завершилась квалификация Гран При Штирии для Alfa Romeo – Кими Райкконен и Антонио Джовинацци не вышли во вторую часть. В команде надеются, что сухая погода в гонке поможет побороться за очки.",
            "url": "https://www.f1news.ru/news/f1-145631.html",
            "urlToImage": "https://cdn.f1ne.ws/userfiles/raikkonen/145631.jpg",
            "publishedAt": "2020-07-11T18:20:00Z",
            "content": "Alfa Romeo . , .\r\n, : « , , . , , , .\r\n , . , ».\r\n(16-): « , . , . .\r\n , . , , - . , . , ».\r\n (19-): « , . , , , . , , .\r\n , . , , , . , , »."
        }
    ]
}


// [
//   {
//       "sha": "ad5cee9a432723918faabcd38b301c5947595ba7",
//       "node_id": "MDY6Q29tbWl0MjgxNzUxMDQ0OmFkNWNlZTlhNDMyNzIzOTE4ZmFhYmNkMzhiMzAxYzU5NDc1OTViYTc=",
//       "commit": {
//           "author": {
//               "name": "perkenton",
//               "email": "42587922+perkenton@users.noreply.github.com",
//               "date": "2020-08-06T17:21:37Z"
//           },
//           "committer": {
//               "name": "GitHub",
//               "email": "noreply@github.com",
//               "date": "2020-08-06T17:21:37Z"
//           },
//           "message": "Merge pull request #1 from perkenton/level-1\n\nLevel 1",
//           "tree": {
//               "sha": "7da449ec2ff9df2d853158c6916a62b5b71f2bdd",
//               "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/trees/7da449ec2ff9df2d853158c6916a62b5b71f2bdd"
//           },
//           "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/commits/ad5cee9a432723918faabcd38b301c5947595ba7",
//           "comment_count": 0,
//           "verification": {
//               "verified": true,
//               "reason": "valid",
//               "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJfLDwhCRBK7hj4Ov3rIwAAdHIIAICsa6lyhELxFMGXmz1J4e/Z\n5WNFz6UjlBOk8fZYR8QVgnDAVRTlSnfFnjy4uQ8IjWEtGzrglJLEbAbFDK2Yt3tO\nmeNhh7yNJCIJOKJDSxfuFlRS7fngSEobNKN90fLuURue1cowa78AzfiRtACkQXKq\n+QpQcpXG5LaNVGx5wUYN5DHIOl0U9oyK+ZHBHg/YgoCf8vXjIyLHf2LEaynxNIB3\nAYQV3CnJFvcuhnADQhkEIayBer+ncbh0u/vyMJqrb5BJL38rHBs5mcH+1kCEHcjn\nXREYe07jCvBMYk7dMFr5I/h1GSp8xBYRGIm/e0H0XVQMx9AofHKWyPGFigtBrOQ=\n=RSG2\n-----END PGP SIGNATURE-----\n",
//               "payload": "tree 7da449ec2ff9df2d853158c6916a62b5b71f2bdd\nparent 5478ff6ed91407aa95146bcf02f55e659063c7d4\nparent 3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20\nauthor perkenton <42587922+perkenton@users.noreply.github.com> 1596734497 +0300\ncommitter GitHub <noreply@github.com> 1596734497 +0300\n\nMerge pull request #1 from perkenton/level-1\n\nLevel 1"
//           }
//       },
//       "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/ad5cee9a432723918faabcd38b301c5947595ba7",
//       "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/ad5cee9a432723918faabcd38b301c5947595ba7",
//       "comments_url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/ad5cee9a432723918faabcd38b301c5947595ba7/comments",
//       "author": {
//           "login": "perkenton",
//           "id": 42587922,
//           "node_id": "MDQ6VXNlcjQyNTg3OTIy",
//           "avatar_url": "https://avatars3.githubusercontent.com/u/42587922?v=4",
//           "gravatar_id": "",
//           "url": "https://api.github.com/users/perkenton",
//           "html_url": "https://github.com/perkenton",
//           "followers_url": "https://api.github.com/users/perkenton/followers",
//           "following_url": "https://api.github.com/users/perkenton/following{/other_user}",
//           "gists_url": "https://api.github.com/users/perkenton/gists{/gist_id}",
//           "starred_url": "https://api.github.com/users/perkenton/starred{/owner}{/repo}",
//           "subscriptions_url": "https://api.github.com/users/perkenton/subscriptions",
//           "organizations_url": "https://api.github.com/users/perkenton/orgs",
//           "repos_url": "https://api.github.com/users/perkenton/repos",
//           "events_url": "https://api.github.com/users/perkenton/events{/privacy}",
//           "received_events_url": "https://api.github.com/users/perkenton/received_events",
//           "type": "User",
//           "site_admin": false
//       },
//       "committer": {
//           "login": "web-flow",
//           "id": 19864447,
//           "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
//           "avatar_url": "https://avatars3.githubusercontent.com/u/19864447?v=4",
//           "gravatar_id": "",
//           "url": "https://api.github.com/users/web-flow",
//           "html_url": "https://github.com/web-flow",
//           "followers_url": "https://api.github.com/users/web-flow/followers",
//           "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
//           "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
//           "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
//           "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
//           "organizations_url": "https://api.github.com/users/web-flow/orgs",
//           "repos_url": "https://api.github.com/users/web-flow/repos",
//           "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
//           "received_events_url": "https://api.github.com/users/web-flow/received_events",
//           "type": "User",
//           "site_admin": false
//       },
//       "parents": [
//           {
//               "sha": "5478ff6ed91407aa95146bcf02f55e659063c7d4",
//               "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/5478ff6ed91407aa95146bcf02f55e659063c7d4",
//               "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/5478ff6ed91407aa95146bcf02f55e659063c7d4"
//           },
//           {
//               "sha": "3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
//               "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
//               "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20"
//           }
//       ]
//   },
//   {
//       "sha": "3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
//       "node_id": "MDY6Q29tbWl0MjgxNzUxMDQ0OjNmYzI1ZjE1MDI2ZTZlOGNkZjJkZmMwYjIzY2FlNmZjZWU5MmJmMjA=",
//       "commit": {
//           "author": {
//               "name": "Alexander Vasiliev",
//               "email": "selado@ya.ru",
//               "date": "2020-08-06T01:51:19Z"
//           },
//           "committer": {
//               "name": "Alexander Vasiliev",
//               "email": "selado@ya.ru",
//               "date": "2020-08-06T01:51:19Z"
//           },
//           "message": "fix one little bug",
//           "tree": {
//               "sha": "7da449ec2ff9df2d853158c6916a62b5b71f2bdd",
//               "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/trees/7da449ec2ff9df2d853158c6916a62b5b71f2bdd"
//           },
//           "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/commits/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
//           "comment_count": 0,
//           "verification": {
//               "verified": false,
//               "reason": "unsigned",
//               "signature": null,
//               "payload": null
//           }
//       },
//       "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
//       "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20",
//       "comments_url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/3fc25f15026e6e8cdf2dfc0b23cae6fcee92bf20/comments",
//       "author": null,
//       "committer": null,
//       "parents": [
//           {
//               "sha": "32940e164d4e7613240c63373ee14e34a0541b78",
//               "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/32940e164d4e7613240c63373ee14e34a0541b78",
//               "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/32940e164d4e7613240c63373ee14e34a0541b78"
//           }
//       ]
//   },
//   {
//       "sha": "32940e164d4e7613240c63373ee14e34a0541b78",
//       "node_id": "MDY6Q29tbWl0MjgxNzUxMDQ0OjMyOTQwZTE2NGQ0ZTc2MTMyNDBjNjMzNzNlZTE0ZTM0YTA1NDFiNzg=",
//       "commit": {
//           "author": {
//               "name": "Alexander Vasiliev",
//               "email": "selado@ya.ru",
//               "date": "2020-08-06T01:47:02Z"
//           },
//           "committer": {
//               "name": "Alexander Vasiliev",
//               "email": "selado@ya.ru",
//               "date": "2020-08-06T01:47:02Z"
//           },
//           "message": "fix some little bugs again",
//           "tree": {
//               "sha": "01ad7bfb2ca4b1095364f24cc5ae33be955b48b3",
//               "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/trees/01ad7bfb2ca4b1095364f24cc5ae33be955b48b3"
//           },
//           "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/commits/32940e164d4e7613240c63373ee14e34a0541b78",
//           "comment_count": 0,
//           "verification": {
//               "verified": false,
//               "reason": "unsigned",
//               "signature": null,
//               "payload": null
//           }
//       },
//       "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/32940e164d4e7613240c63373ee14e34a0541b78",
//       "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/32940e164d4e7613240c63373ee14e34a0541b78",
//       "comments_url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/32940e164d4e7613240c63373ee14e34a0541b78/comments",
//       "author": null,
//       "committer": null,
//       "parents": [
//           {
//               "sha": "82c07683ddaf2ac3a4e23d1fafb808745b7b35c2",
//               "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/82c07683ddaf2ac3a4e23d1fafb808745b7b35c2",
//               "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/82c07683ddaf2ac3a4e23d1fafb808745b7b35c2"
//           }
//       ]
//   },
//   {
//       "sha": "82c07683ddaf2ac3a4e23d1fafb808745b7b35c2",
//       "node_id": "MDY6Q29tbWl0MjgxNzUxMDQ0OjgyYzA3NjgzZGRhZjJhYzNhNGUyM2QxZmFmYjgwODc0NWI3YjM1YzI=",
//       "commit": {
//           "author": {
//               "name": "Alexander Vasiliev",
//               "email": "selado@ya.ru",
//               "date": "2020-08-06T01:10:48Z"
//           },
//           "committer": {
//               "name": "Alexander Vasiliev",
//               "email": "selado@ya.ru",
//               "date": "2020-08-06T01:10:48Z"
//           },
//           "message": "fix some little bugs",
//           "tree": {
//               "sha": "487399984a72d0267cc74593d69626eab7bfe31f",
//               "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/trees/487399984a72d0267cc74593d69626eab7bfe31f"
//           },
//           "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/git/commits/82c07683ddaf2ac3a4e23d1fafb808745b7b35c2",
//           "comment_count": 0,
//           "verification": {
//               "verified": false,
//               "reason": "unsigned",
//               "signature": null,
//               "payload": null
//           }
//       },
//       "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/82c07683ddaf2ac3a4e23d1fafb808745b7b35c2",
//       "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/82c07683ddaf2ac3a4e23d1fafb808745b7b35c2",
//       "comments_url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/82c07683ddaf2ac3a4e23d1fafb808745b7b35c2/comments",
//       "author": null,
//       "committer": null,
//       "parents": [
//           {
//               "sha": "efa9d37dc2d952654e9a9c9ee162576a7af1cd80",
//               "url": "https://api.github.com/repos/perkenton/news-analyzer-diplom/commits/efa9d37dc2d952654e9a9c9ee162576a7af1cd80",
//               "html_url": "https://github.com/perkenton/news-analyzer-diplom/commit/efa9d37dc2d952654e9a9c9ee162576a7af1cd80"
//           }
//       ]
//   },
// ]