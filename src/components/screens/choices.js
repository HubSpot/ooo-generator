import React from 'react';

import Page from '../page';
import Choice from '../choice';
import { H1, H5 } from '../style/headers';

export default class Choices extends React.Component {
  state = {
    startDate: null,
    endDate: null,
  };

  render() {
    return (
      <Page align="center" textAlign="left">
        <H1 color="pinkish">OOO Messages</H1>
        <H5 mb={5}>
          Pick the out of office message that will make your contacts smile.<br />
          Copy it to your clipboard and paste it into your email settings.<br />
          {"Then get out of here. It's vacation time!"}
        </H5>
        <Choice
          title="Message #1"
          message="Bits of moving fluff dream of the mind's eye kindling the energy hidden in matter. Drake Equation billions upon billions made in the interiors of collapsing stars courage of our questions stirred by starlight, rogue Hypatia not a sunrise but a galaxyrise. Realm of the galaxies, paroxysm of global death Euclid."
        />
        <Choice
          title="Message #2"
          message="Cambrian explosion made in the interiors of collapsing stars light years, astonishment Drake Equation cosmic ocean, trillion culture, colonies, at the edge of forever. Hundreds of thousands laws of physics! Stirred by starlight. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit dispassionate extraterrestrial observer consciousness realm of the galaxies courage of our questions and billions upon billions upon billions upon billions upon billions upon billions upon billions."
        />
      </Page>
    );
  }
}
