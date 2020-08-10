'use strict';

import '../pages/about.css';

import CommitCard from '../js/components/CommitCard.js';
import CommitCardList from '../js/components/CommitCardList.js';
import {
  TEST_DATA,
  COMMIT_CARDS_CONTAINER,
} from '../js/constants/constants.js';



const createCommitCard = (commitDate, commiterAvatarUrl, commiterName, commiterMail, commiterMessage) => {
  return new CommitCard({commitDate, commiterAvatarUrl, commiterName, commiterMail, commiterMessage}).create();
}
const commitCardList = new CommitCardList({COMMIT_CARDS_CONTAINER, createCommitCard, TEST_DATA});
commitCardList.render();

