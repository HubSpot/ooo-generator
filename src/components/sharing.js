import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

const Sharing = () => (
  <div>
    <FacebookShareButton
      url="https://www.ooogenerator.com"
      quote="Vacation is exciting. So why isn't your OOO reply? Use this Out of Office Email Generator to get a personalized (and witty) reply to copy and paste in your inbox: www.ooogenerator.com"
      style={{ display: 'inline-block', marginRight: '12px' }}
    >
      <FacebookIcon round={true} size={48} />
    </FacebookShareButton>
    <TwitterShareButton
      url="https://www.ooogenerator.com"
      title="Vacation is exciting. So why isn't your OOO reply? Use this Out of Office Email Generator to get a personalized (and witty) reply to copy and paste in your inbox:"
      via="HubSpot"
      style={{ display: 'inline-block' }}
    >
      <TwitterIcon round={true} size={48} />
    </TwitterShareButton>
    <LinkedinShareButton
      url="https://www.ooogenerator.com"
      title="OOO Generator"
      description="Vacation is exciting. So why isn't your OOO reply? Use this Out of Office Email Generator to get a personalized (and witty) reply to copy and paste in your inbox: www.ooogenerator.com"
      style={{ display: 'inline-block', marginLeft: '12px' }}
    >
      <LinkedinIcon round={true} size={48} />
    </LinkedinShareButton>
  </div>
);

export default Sharing;
