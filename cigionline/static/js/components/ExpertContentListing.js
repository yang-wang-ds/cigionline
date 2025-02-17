import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import React from 'react';

function ExpertContentListing(props) {
  const { row } = props;

  return (
    <tr>
      <td colSpan="6">
        <div className="table-mobile-text">
          Title
        </div>
        <div className="table-infos-wrapper">
          {row.contenttype === 'Event' && (
            <span className="table-icon icon-event">
              <i className="fal fa-calendar-alt" />
            </span>
          )}
          {row.contenttype === 'Multimedia' && row.contentsubtype === 'Video' && (
            <span className="table-icon icon-multimedia">
              <i className="fal fa-play" />
            </span>
          )}
          {row.contenttype === 'Multimedia' && row.contentsubtype === 'Audio' && (
            <span className="table-icon icon-multimedia">
              <i className="fal fa-headphones" />
            </span>
          )}
          {row.contenttype === 'Publication' && (
            <span className="table-icon icon-publication">
              <i className="fal fa-file-alt" />
            </span>
          )}
          {['Opinion', 'CIGI in the News', 'Op-Eds', 'News Releases'].includes(row.contenttype) && (
            <span className="table-icon icon-opinion">
              <i className="fal fa-comment-dots" />
            </span>
          )}
          <div className="table-infos">
            <a href={row.url} className="table-title-link">
              {row.title}
            </a>
            {row.publishing_date && (
              <div className="table-infos-meta">
                {DateTime.fromISO(row.publishing_date).toLocaleString(DateTime.DATE_FULL)}
              </div>
            )}
          </div>
        </div>
      </td>
      <td colSpan="3">
        <div className="table-mobile-text">
          Topic
        </div>
        <div className="table-content">
          <ul className="custom-text-list">
            {row.topics.map((topic) => (
              <li key={`${row.id}-topic-${topic.id}`}>
                <a href={topic.url} className="table-content-link">
                  {topic.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </td>
      <td colSpan="2">
        <div className="table-mobile-text">
          Type
        </div>
        <div className="table-content">
          <ul className="custom-text-list">
            <li key={`${row.id}-contenttype`} className="table-infos-meta">
              {row.contenttype}
            </li>
          </ul>
        </div>
      </td>
      <td colSpan="1">
        <div className="table-mobile-text">
          PDF
        </div>
        <div className="table-content">
          {row.pdf_download && (
            <a href={row.pdf_download} className="table-btn-icon">
              <i className="fa fas fa-download" />
            </a>
          )}
        </div>
      </td>
    </tr>
  );
}

ExpertContentListing.propTypes = {
  row: PropTypes.shape({
    contentsubtype: PropTypes.string,
    contenttype: PropTypes.string,
    id: PropTypes.number,
    pdf_download: PropTypes.string,
    publishing_date: PropTypes.string,
    title: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      url: PropTypes.string,
    })),
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExpertContentListing;
