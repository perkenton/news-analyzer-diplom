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
    const alternativeAvatar = 'https://sun9-65.userapi.com/b8gycPnXk-iBxKp8S-LuwTdPX1dEgQbhSNfJag/9bOPuVd-_9k.jpg';

    this.res.forEach(item => {
      if (item.author != null) {
        this.addCard(item.commit.committer.date, item.author.avatar_url, item.commit.committer.name, item.commit.committer.email, item.commit.message);
      } else {
        this.addCard(item.commit.committer.date, alternativeAvatar, item.commit.committer.name, item.commit.committer.email, item.commit.message);
      }
    });
  }

}