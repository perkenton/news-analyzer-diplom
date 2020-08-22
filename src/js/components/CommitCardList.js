'use strict';

export default class CommitCardList {
  constructor(objCommitCardList) {
    this.COMMIT_CARDS_CONTAINER = objCommitCardList.COMMIT_CARDS_CONTAINER;
    this.res = objCommitCardList.res;
    this.createCommitCard = objCommitCardList.createCommitCard;
  }

  addCard = (commitDate, commiterAvatarUrl, commiterName, commiterMail, commiterMessage) => {
    const card = this.createCommitCard(commitDate, commiterAvatarUrl, commiterName, commiterMail, commiterMessage);
    this.COMMIT_CARDS_CONTAINER.appendChild(card);
  }

  render = () => {
    const alternativeAvatar = 'https://avatars3.githubusercontent.com/u/42587922?v=4';

    const arr = this.res.slice(0, 20);
    
    arr.forEach(item => {
      if (item.author != null) {
        this.addCard(item.commit.committer.date, item.author.avatar_url, item.commit.committer.name, item.commit.committer.email, item.commit.message);
      } else {
        this.addCard(item.commit.committer.date, alternativeAvatar, item.commit.committer.name, item.commit.committer.email, item.commit.message);
      }
    });
  }

}