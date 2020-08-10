'use strict';

export default class CommitCardList {
  constructor(objCommitCardList) {
    this.COMMIT_CARDS_CONTAINER = objCommitCardList.COMMIT_CARDS_CONTAINER;
    this.TEST_DATA = objCommitCardList.TEST_DATA;
    this.createCommitCard = objCommitCardList.createCommitCard;
  }

  addCard = (commitDate, commiterAvatarUrl, commiterName, commiterMail, commiterMessage) => {
    const card = this.createCommitCard(commitDate, commiterAvatarUrl, commiterName, commiterMail, commiterMessage);
    this.COMMIT_CARDS_CONTAINER.appendChild(card);
  }

  render = () => {
    const alternativeAvatar = '../../images/jacques-yves-cousteau-464.jpg';

    this.TEST_DATA.forEach(item => {
      if (item.author != null) {
        this.addCard(item.commit.committer.date, item.author.avatar_url, item.commit.committer.name, item.commit.committer.email, item.commit.message);
      } else {
        this.addCard(item.commit.committer.date, alternativeAvatar, item.commit.committer.name, item.commit.committer.email, item.commit.message);
      }
    });
  }

}