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

const URL = 'https://www.ooogenerator.com';
const DESCRIPTION =
  "Vacation is exciting. So why isn't your OOO reply? Use this Out of Office Email Generator to get a personalized (and witty) reply to copy and paste in your inbox:";

const Wrapper = styled.div`
  margin-bottom: 16px;
`;

const BaseShareButton = `
  display: inline-block;
  cursor: pointer;
`;

const StyledFacebookShareButton = styled(FacebookShareButton)`
  ${BaseShareButton};
  margin-right: 16px;
`;

const StyledTwitterShareButton = styled(TwitterShareButton)`
  ${BaseShareButton};
`;

const StyledLinkedinShareButton = styled(LinkedinShareButton)`
  ${BaseShareButton};
  margin-left: 16px;
`;

const Sharing = () => (
  <Wrapper>
    <StyledFacebookShareButton
      url={URL}
      quote={`${DESCRIPTION} www.ooogenerator.com`}
    >
      <FacebookIcon round={true} size={36} />
    </StyledFacebookShareButton>
    <StyledTwitterShareButton url={URL} title={DESCRIPTION} via="HubSpot">
      <TwitterIcon round={true} size={36} />
    </StyledTwitterShareButton>
    <StyledLinkedinShareButton
      url={URL}
      title="OOO Generator"
      description={`${DESCRIPTION} www.ooogenerator.com`}
    >
      <LinkedinIcon round={true} size={36} />
    </StyledLinkedinShareButton>
  </Wrapper>
);

export default Sharing;
