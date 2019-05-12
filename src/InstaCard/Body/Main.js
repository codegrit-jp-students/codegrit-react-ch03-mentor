import React from 'react';
import PropTypes from 'prop-types';
import MainIcons from './MainIcons';
import Comments from './Comments';

const BodyMain = ({ theme }) => (
  <section className="card-main">
    <MainIcons theme={theme} />
    <div className="card-like-counts">100 likes</div>
    <Comments />
    <div className="post-date">1日前</div>
    <section className="comment-box">
      <div className="comment-area">コメントする</div>
    </section>
  </section>
);

Comment.propTypes = {
  theme: PropTypes.string.isRequired
}

Comment.defaultProps = {
  theme: "light",
}

export default BodyMain;