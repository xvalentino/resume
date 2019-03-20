import React from 'react';
import ReactDOM from 'react-dom';
import Text from 'mineral-ui/Text';
import Box from 'mineral-ui/Box';
import Link from 'mineral-ui/Link';
import Flex, { FlexItem } from 'mineral-ui/Flex';
import { ThemeProvider } from 'mineral-ui/themes';

const breakpoints = [600, 99999];

const Resume = () => {
  return (
    <ThemeProvider>
      <Box marginHorizontal={60}>
        <Text align='center' element='h1'>
          Valentino Espinoza
        </Text>
        <Flex gutterWidth={70} justifyContent='center' direction='row'>
          <FlexItem>
            <Text appearance='mouse'>Denver, CO</Text>
          </FlexItem>
          <FlexItem>
            <Text appearance='mouse'>xvalentino13@gmail.com</Text>
          </FlexItem>

          <FlexItem>
            <Text appearance='mouse'>
              <Link href='https://xvalentino.com/'>xvalentino.com</Link>
            </Text>
          </FlexItem>
        </Flex>
        <Text element='h2'>Summary</Text>

        <Text appearance='prose'>
          I'm a software engineer who has worked with enterprise companies as
          well as small startups. I enjoy being challenged and thinking about
          how the products I work on fit into the big picture.
        </Text>
        <Flex
          breakpoints={breakpoints}
          direction={['column-reverse', 'row', null]}
        >
          <FlexItem grow={1}>
            <Text element='h2'>Highlights</Text>
            <Flex
              breakpoints={breakpoints}
              justifyContent='around'
              direction={['row', 'column', null]}
              gutterWidth={[30, 0, null]}
            >
              <Text>Front-end focused</Text>
              <Text>3+ years React</Text>
              <Text>React Native</Text>
              <Text>TypeScript/Flow</Text>
              <Text>Fullstack experience</Text>
              <Text>Business Awareness</Text>
              <Text>Loves challenges</Text>
            </Flex>
            <Text element='h2'>Interests</Text>
            <Flex
              breakpoints={breakpoints}
              justifyContent='around'
              direction={['row', 'column', null]}
              gutterWidth={[30, 0, null]}
            >
              <Text>Teaching</Text>
              <Text>Learning</Text>
              <Text>Accessibility</Text>
              <Text>Inclusion</Text>
              <Text>Music</Text>
              <Text>Video</Text>
              <Text>Products that make a difference</Text>
            </Flex>
          </FlexItem>
          <FlexItem grow={4}>
            <div>
              <Text element='h2'>Experience</Text>
              <div>
                <Text element='h3' appearance='h4'>
                  Apto 2018 - Current
                </Text>
                <Text>
                  Series B startup. Customer relationship management software.
                  I've been helping lead our migration from a system tightly
                  coupled to SalesForce with Angular on the front end, to a more
                  maintainable React + GraphQL codebase. I have taken lead in
                  teaching others and made it my goal to enable engineering.
                </Text>
              </div>
              <div>
                <Text element='h3' appearance='h4'>
                  CA Technologies 2016-2018
                </Text>

                <Text>
                  A fortune 1000 company that focuses on agile management,
                  security and cloud solutions. Worked on CA Agile Central
                  (formally Rally), an application lifecycle management software
                  targeted towards enterprise businesses. I focused on front end
                  work with React while occassionally getting to write some
                  clojure + Java on the back end. I built software that scaled
                  while making changes to a large codebase being maintained by
                  many engineers across different locations.
                </Text>
                <ul>
                  <Flex gutterWidth={90} wrap>
                    <FlexItem>
                      <Text element='li'>
                        Lead cross-site engineering guild
                      </Text>
                    </FlexItem>
                    <FlexItem>
                      <Text element='li'>
                        Maintained a large codebase with a lot of traffic
                      </Text>
                    </FlexItem>
                  </Flex>
                </ul>
              </div>
              <div>
                <Text element='h3' appearance='h4'>
                  Econify 2015-2016
                </Text>
                <Text>
                  Consultancy with a focus on enterprise customers in NYC. I had
                  the opportunity to work with bigger clients such as Vevo and
                  Viceland as well as some smaller clients such as Videri. This
                  experience led me to do full stack work working with web apps,
                  mobile developement, apple tv, and xbox one while observing
                  the different obstacles these companies faced.
                </Text>
                <ul>
                  <Flex gutterWidth={90} wrap>
                    <FlexItem>
                      <Text element='li'>
                        Worked on products with massive user bases such as{' '}
                        <strong>Vevo</strong> and
                        <strong> Viceland</strong>
                      </Text>
                    </FlexItem>
                    <FlexItem>
                      <Text element='li'>Planned directly with clients</Text>
                    </FlexItem>
                    <FlexItem>
                      <Text element='li'>
                        Adapted quickly to change in product, stack, and team
                      </Text>
                    </FlexItem>
                  </Flex>
                </ul>
              </div>
            </div>
          </FlexItem>
        </Flex>
      </Box>
    </ThemeProvider>
  );
};

window.onload = function() {
  ReactDOM.render(<Resume />, document.getElementById('app'));
};
