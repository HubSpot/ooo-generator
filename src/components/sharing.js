import React from 'react';
import styled from 'styled-components';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

const StyledFacebookShareButton = styled(FacebookShareButton)`
  display: inline-block;
  margin-right: 12px;
`;

const StyledTwitterShareButton = styled(TwitterShareButton)`
  display: inline-block;
`;

const StyledLinkedinShareButton = styled(LinkedinShareButton)`
  display: inline-block;
  margin-left: 12px;
`;

const Sharing = () => (
  <div>
    <StyledFacebookShareButton
      url="https://www.ooogenerator.com"
      quote="Vacation is exciting. So why isn't your OOO reply? Use this Out of Office Email Generator to get a personalized (and witty) reply to copy and paste in your inbox: www.ooogenerator.com"
    >
      <FacebookIcon round={true} size={48} />
    </StyledFacebookShareButton>
    <StyledTwitterShareButton
      url="https://www.ooogenerator.com"
      title="Vacation is exciting. So why isn't your OOO reply? Use this Out of Office Email Generator to get a personalized (and witty) reply to copy and paste in your inbox:"
      via="HubSpot"
    >
      <TwitterIcon round={true} size={48} />
    </StyledTwitterShareButton>
    <StyledLinkedinShareButton
      url="https://www.ooogenerator.com"
      title="OOO Generator"
      description="Vacation is exciting. So why isn't your OOO reply? Use this Out of Office Email Generator to get a personalized (and witty) reply to copy and paste in your inbox: www.ooogenerator.com"
    >
      <LinkedinIcon round={true} size={48} />
    </StyledLinkedinShareButton>
  </div>
);

export default Sharing;
