import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import Button from '@material-ui/core/Button';

import Page from '../page';
import Choice from '../choice';

const Header = styled.h1`
  font-family: peace_sansregular;
  font-size: 72px;
  font-weight: normal;
  color: rgb(236, 171, 164);
  text-transform: uppercase;
  margin-bottom: 0;
`;

const SubHead = styled.p`
  font-size: 22px;
  font-weight: bolder;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 50px;
`;

export default class Form extends React.Component {
  state = {
    startDate: null,
    endDate: null,
  };

  render() {
    return (
      <Page align="default" maxWidth={1200}>
        <Header>OOO Messages</Header>
        <SubHead>
          Pick the out of office message that will make your contacts smile.<br />
          Copy it to your clipboard and paste it into your email settings.<br />
          Then get out of here. It's vacation time!
        </SubHead>
        <Choice title="Message #1" message="Bits of moving fluff dream of the mind's eye kindling the energy hidden in matter. Drake Equation billions upon billions made in the interiors of collapsing stars courage of our questions stirred by starlight, rogue Hypatia not a sunrise but a galaxyrise. Realm of the galaxies, paroxysm of global death Euclid." />
        <Choice title="Message #2" message="Cambrian explosion made in the interiors of collapsing stars light years, astonishment Drake Equation cosmic ocean, trillion culture, colonies, at the edge of forever. Hundreds of thousands laws of physics! Stirred by starlight. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit dispassionate extraterrestrial observer consciousness realm of the galaxies courage of our questions and billions upon billions upon billions upon billions upon billions upon billions upon billions." />
      </Page>
    );
  }
}
