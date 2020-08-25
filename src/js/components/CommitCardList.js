'use strict';

export default class CommitCardList {
  constructor(objCommitCardList) {
    this.COMMIT_CARDS_CONTAINER = objCommitCardList.COMMIT_CARDS_CONTAINER;
    this.res = objCommitCardList.res;
    this.createCommitCard = objCommitCardList.createCommitCard;
    this.NUMBER_OF_COMMITS = objCommitCardList.NUMBER_OF_COMMITS;
    this.formattingDate = objCommitCardList.formattingDate;
  }

  addCard = (commitDate, commiterAvatarUrl, commiterName, commiterMail, commiterMessage) => {
    const card = this.createCommitCard(commitDate, commiterAvatarUrl, commiterName, commiterMail, commiterMessage);
    this.COMMIT_CARDS_CONTAINER.appendChild(card);
  }

  render = () => {
    const alternativeAvatar = 'https://avatars3.githubusercontent.com/u/42587922?v=4';

    const arr = this.res.slice(0, this.NUMBER_OF_COMMITS);
    
    arr.forEach(item => {
      const normalDateFormat = this.formattingDate(item.commit.committer.date);
      if (item.author != null) {
        this.addCard(normalDateFormat, item.author.avatar_url, item.commit.committer.name, item.commit.committer.email, item.commit.message);
      } else {
        this.addCard(normalDateFormat, alternativeAvatar, item.commit.committer.name, item.commit.committer.email, item.commit.message);
      }
    });
  }

}