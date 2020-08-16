import '../pages/about.css';

import CommitCard from '../js/components/CommitCard.js';
import CommitCardList from '../js/components/CommitCardList.js';
import CommitError from '../js/components/CommitError.js';
import GithubApi from '../js/modules/GithubApi.js';
import {
  COMMIT_CARDS_CONTAINER,
  GITHUB_API_URL,
  SWIPER_CONTAINER,
  SWIPER_CONFIG,
} from '../js/constants/constants.js';

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';


'use strict';

(function() {

  const createCommitCard = (commitDate, commiterAvatarUrl, commiterName, commiterMail, commiterMessage) => {
    return new CommitCard({commitDate, commiterAvatarUrl, commiterName, commiterMail, commiterMessage}).create();
  };

  new GithubApi(GITHUB_API_URL).getCommits()
    .then(res => {
      new CommitCardList({COMMIT_CARDS_CONTAINER, createCommitCard, res}).render();

      Swiper.use([Navigation, Pagination]);
      new Swiper(SWIPER_CONTAINER, SWIPER_CONFIG);
    })
    
    .catch((err) => {
      new CommitError(COMMIT_CARDS_CONTAINER, err).createAndRender();
  });

})();