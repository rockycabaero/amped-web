import * as React from 'react';
import tw from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import scrollama from 'scrollama';

function ProductSelactableLabels({
  stepName = '',
  labels = [],
  activeIndex,
  setActive,
}) {
  return (
    <div tw="flex flex-col">
      {labels.map((label, idx) => {
        return (
          <button
            className={stepName}
            onClick={() => setActive(idx)}
            key={idx}
            tw="p-8 text-left border-r-2 border-l-2 border-sky-gray-20"
            css={[
              tw`border-b-2`,
              activeIndex === idx && tw`bg-default text-white`,
              idx === 0 && tw`rounded-tl-md rounded-tr-md border-t-2`,
              idx === labels.length - 1 && tw`rounded-bl-md rounded-br-md`,
            ]}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function ProductImageSequence({ activeIndex, imageSequence = [] }) {
  return <div>{imageSequence[activeIndex]}</div>;
}

function ProductDetail({ children }) {
  const [active, setActive] = React.useState(0);

  return (
    <div tw="h-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-16 lg:gap-32">
      {children(active, setActive)}
    </div>
  );
}

function Submenu({ sections }) {
  function handleClick(e, idx) {
    sections[idx].current.scrollIntoView();
  }

  return (
    <div tw="bg-white sticky top-20 z-10">
      <ul tw="py-8 w-10/12 mx-auto text-px16 flex font-circular-regular items-center justify-between">
        <li>
          <a
            href="#/"
            tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
            onClick={(e) => handleClick(e, 0)}
          >
            World Class Design
          </a>
        </li>
        <li>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </li>
        <li>
          <a
            href="#/"
            tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
            onClick={(e) => handleClick(e, 1)}
          >
            City-Like Performance
          </a>
        </li>
        <li>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </li>
        <li>
          <a
            href="#/"
            tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
            onClick={(e) => handleClick(e, 2)}
          >
            Smart Affordability
          </a>
        </li>
        <li>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </li>
        <li>
          <a
            href="#/"
            tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
            onClick={(e) => handleClick(e, 3)}
          >
            Premium Materials
          </a>
        </li>
        <li>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </li>
        <li>
          <a
            href="#/"
            tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
            onClick={(e) => handleClick(e, 4)}
          >
            Africa Tough
          </a>
        </li>
        <li>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </li>
        <li>
          <a
            href="#/"
            tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
            onClick={(e) => handleClick(e, 5)}
          >
            Designed in the USA
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function Innovation() {
  const section1 = React.useRef();
  const section2 = React.useRef();
  const section3 = React.useRef();
  const section4 = React.useRef();
  const section5 = React.useRef();
  const section6 = React.useRef();
  const [scroller1Active, setScroller1Active] = React.useState(0);
  const [scroller2Active, setScroller2Active] = React.useState(0);
  const [scroller3Active, setScroller3Active] = React.useState(0);
  const [scroller4Active, setScroller4Active] = React.useState(0);
  const [scroller5Active, setScroller5Active] = React.useState(0);

  React.useEffect(() => {
    const scroller1 = scrollama();
    const scroller2 = scrollama();
    const scroller3 = scrollama();
    const scroller4 = scrollama();
    const scroller5 = scrollama();

    scroller1
      .setup({
        step: '.scroller-1-step',
      })
      .onStepEnter((response) => {
        setScroller1Active(response.index);
      });

    scroller2
      .setup({
        step: '.scroller-2-step',
      })
      .onStepEnter((response) => {
        setScroller2Active(response.index);
      });

    scroller3
      .setup({
        step: '.scroller-3-step',
      })
      .onStepEnter((response) => {
        setScroller3Active(response.index);
      });

    scroller4
      .setup({
        step: '.scroller-4-step',
      })
      .onStepEnter((response) => {
        setScroller4Active(response.index);
      });

    scroller5
      .setup({
        step: '.scroller-5-step',
      })
      .onStepEnter((response) => {
        setScroller5Active(response.index);
      });
  }, []);

  return (
    <Layout pageTitle="Innovations">
      <Submenu
        sections={[section1, section2, section3, section4, section5, section6]}
      />
      <div tw="py-48 bg-sitegray">
        <div ref={section1} tw="px-4 lg:px-0 min-h-screen items-stretch flex">
          <div tw="lg:w-9/12 mx-auto flex flex-col">
            <div tw="grid grid-cols-1 lg:grid-cols-5 mb-16">
              <div tw="mb-8 lg:mb-0 text-4xl lg:text-px54 col-span-2">
                World Class Design
              </div>
              <div tw="text-px21 col-span-3">
                Reliability in rugged environments takes innovation. Performance
                with affordability takes innovation. Our field experience
                informs our engineering, and hours spent with partners and
                customers are backed up with hours in the lab to ensure that
                every Amped appliance lives up to Smart Performance. Each
                appliance we create is unique, not only between other products
                but with our own products, as each appliance type is designed
                with the appropriate circuitry, software and mechanical design.
              </div>
            </div>
            <div tw="flex-grow px-4 lg:px-0 mx-auto">
              <ProductDetail>
                {(active, setActive) => {
                  return (
                    <>
                      <div tw="sticky top-0">
                        <ProductImageSequence
                          activeIndex={scroller1Active}
                          imageSequence={[
                            <StaticImage
                              alt=""
                              loading="eager"
                              placeholder="none"
                              src="../images/worldclass-design-s00.png"
                              layout="fullWidth"
                            />,
                            <StaticImage
                              alt=""
                              loading="eager"
                              placeholder="none"
                              src="../images/worldclass-design-s01.png"
                              layout="fullWidth"
                            />,
                            <StaticImage
                              alt=""
                              loading="eager"
                              placeholder="none"
                              src="../images/worldclass-design-s02.png"
                              layout="fullWidth"
                            />,
                            <StaticImage
                              alt=""
                              loading="eager"
                              placeholder="none"
                              src="../images/worldclass-design-s03.png"
                              layout="fullWidth"
                            />,
                          ]}
                        />
                      </div>
                      <ProductSelactableLabels
                        stepName={'scroller-1-step'}
                        labels={[
                          'Sealed mechanical enclosure that protect against dust and water',
                          'Proprietary Software handles in rush power of large compressor based appliances like refrigerators',
                          'Ability to power appliances from solar panner while fully charging batteries',
                          'Advanced thermal circuit handling for improved reliability and Smart Inverter technology as powerful as a fuel generator',
                        ]}
                        activeIndex={scroller1Active}
                        setActive={setScroller1Active}
                      />
                    </>
                  );
                }}
              </ProductDetail>
            </div>
          </div>
        </div>
      </div>

      <div ref={section2} tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="w-9/12 grid grid-cols-1 lg:grid-cols-5 mx-auto lg:mb-32 mb-16">
          <div tw="mb-8 col-span-2 text-4xl lg:text-px54">
            City-like Performance
          </div>
          <div tw="col-span-3 text-px21">
            We analyze every component in our appliances to find opportunities
            for efficiency improvement. We build our own proprietary circuits,
            software, and mechanical designs to gain 2X performance improvements
            like brighter televisions at the same power consumption as
            competitors – delivering appliances that perform like those in the
            city but with the efficiency need for off the grid applications.
          </div>
        </div>
        <div tw="lg:w-9/12 mx-auto">
          <ProductDetail>
            {(active, setActive) => {
              return (
                <>
                  <ProductSelactableLabels
                    activeIndex={scroller2Active}
                    setActive={setScroller2Active}
                    stepName={'scroller-2-step'}
                    labels={[
                      'Optimized screen transmissivity',
                      'Custom LED driver circuit maximizes brightness and runtime',
                      'High-efficiency LED backlighting and motherboard software limits unnecessary current draws',
                      'Protection against direct solar input',
                    ]}
                  />
                  <ProductImageSequence
                    activeIndex={scroller2Active}
                    imageSequence={[
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/city-like-performance-s00.png"
                        layout="fullWidth"
                      />,
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/city-like-performance-s01.png"
                        layout="fullWidth"
                      />,
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/city-like-performance-s02.png"
                        layout="fullWidth"
                      />,
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/city-like-performance-s03.png"
                        layout="fullWidth"
                      />,
                    ]}
                  />
                </>
              );
            }}
          </ProductDetail>
        </div>
      </div>
      <div ref={section3} tw="px-4 lg:px-0 py-16 lg:py-48 bg-sitegray">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-5 lg:mb-32 mb-16">
          <div tw="text-4xl lg:text-px54 col-span-2 mb-8 lg:mb-0">
            Smart Affordability
          </div>
          <div tw="text-px21 col-span-3">
            Others focus on product affordability. We focus on the total cost of
            ownership of a product. The hours we have spent with partners
            assisting in building operation capacity informs our engineering. We
            take those learnings - building innovative and unique features that
            make our products the lowest cost to operate. Our systems report any
            issue with an error code so if there is a problem, it can be
            resolved over the phone without the cost of sending a technician.
          </div>
        </div>
        <div tw="lg:w-9/12 mx-auto">
          <ProductDetail>
            {(active, setActive) => {
              return (
                <>
                  <ProductImageSequence
                    activeIndex={scroller3Active}
                    imageSequence={[
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/smart-affordable-s00.png"
                        layout="fullWidth"
                      />,
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/smart-affordable-s01.png"
                        layout="fullWidth"
                      />,
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/smart-affordable-s02.png"
                        layout="fullWidth"
                      />,
                    ]}
                  />
                  <ProductSelactableLabels
                    stepName={'scroller-3-step'}
                    activeIndex={scroller3Active}
                    setActive={setScroller3Active}
                    labels={[
                      'Hardware features were shifted into microprocessor code, reducing costs and increasing control',
                      'Smart diagnostics for easy phone support',
                      'Software that monitors and protects the battery preventing warranty claims',
                    ]}
                  />
                </>
              );
            }}
          </ProductDetail>
        </div>
      </div>
      <div ref={section4} tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-5 mb-16 lg:mb-32">
          <div tw="col-span-2 text-4xl lg:text-px54 mb-8 lg:mb-0">
            Premium Materials
          </div>
          <div tw="col-span-3 text-px21">
            Performance demands quality, and that begins with the exceptional
            materials we use to build our products. We start with XYZ
            polycarbonate plastic for our lights fusing them with a special
            process so they are highly resistant to damage. For our handheld
            torch, we start with 6061 aerospace grade aluminum for incredible
            durability.
          </div>
        </div>
        <div tw="lg:w-9/12 mx-auto">
          <ProductDetail>
            {(active, setActive) => {
              return (
                <>
                  <ProductImageSequence
                    activeIndex={scroller4Active}
                    imageSequence={[
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/premium-materials-s00.png"
                        layout="fullWidth"
                      />,
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/premium-materials-s01.png"
                        layout="fullWidth"
                      />,
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/premium-materials-s02.png"
                        layout="fullWidth"
                      />,
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/premium-materials-s03.png"
                        layout="fullWidth"
                      />,
                    ]}
                  />
                  <ProductSelactableLabels
                    stepName={'scroller-4-step'}
                    activeIndex={scroller4Active}
                    setActive={setScroller4Active}
                    labels={[
                      'Top quality LEDs that stay bright for years to come and highest efficiency LEDs sourced directly from top-tier suppliers',
                      'Low loss lenses with premium diffusion so there are no hot spots or glare and scratch and shock resistance against cracking if dropped',
                      'No regrind used in plastic materials',
                      'Sealed to keep out water, sand, grit, and dust',
                    ]}
                  />
                </>
              );
            }}
          </ProductDetail>
        </div>
      </div>
      <div ref={section5} tw="px-4 lg:px-0 py-16 lg:py-48 bg-sitegray">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-5 mb-16 lg:mb-32">
          <div tw="col-span-2 text-4xl lg:text-px54 mb-8 lg:mb-0">
            Africa Tough
          </div>
          <div tw="col-span-3 text-px21">
            Our customers operate in some of the world’s most demanding
            environments. Ambient temperatures that exceed 40 degrees Celsius.
            Humidity that hovers around 90%+. And, clouds dust and sand that can
            block out the sun. We study every warranty claim to find
            opportunities for reliability improvement. Even a single claim can
            inspire a reliability innovation. We do our own mechanical and
            electrical designs to gain even the smallest improvements like …
          </div>
        </div>
        <div tw="lg:w-9/12 mx-auto">
          <ProductDetail>
            {(active, setActive) => {
              return (
                <>
                  <ProductImageSequence
                    activeIndex={scroller5Active}
                    imageSequence={[
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/africa-touch-s00.png"
                        layout="fullWidth"
                      />,
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/africa-touch-s01.png"
                        layout="fullWidth"
                      />,
                      <StaticImage
                        alt=""
                        loading="eager"
                        placeholder="none"
                        src="../images/africa-touch-s02.png"
                        layout="fullWidth"
                      />,
                    ]}
                  />
                  <ProductSelactableLabels
                    stepName={'scroller-5-step'}
                    activeIndex={scroller5Active}
                    setActive={setScroller5Active}
                    labels={[
                      'Ruggedized screen that is easy to read at night and keypad that can withstand 500,000+ presses',
                      <div>
                        <div tw="mb-4">Battery protection technology:</div>
                        <ul tw="list-disc ml-8">
                          <li>
                            Short circuit protection for 12V and USB parts
                          </li>
                          <li>
                            Software that protects against high input charge
                            rates
                          </li>
                          <li>
                            Circuity that protects against over-temperature
                            events
                          </li>
                          <li>Ultra-low battery drain for long term storage</li>
                        </ul>
                      </div>,
                      'Thick enclosures that are drop-proof',
                    ]}
                  />
                </>
              );
            }}
          </ProductDetail>
        </div>
      </div>
      <div ref={section6} tw="px-4 lg:px-0 pt-16 lg:pt-48 mb-16 lg:mb-32">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-5">
          <div tw="col-span-2 text-4xl lg:text-px54 mb-8 lg:mb-0">
            Designed in the USA
          </div>
          <div tw="col-span-3 text-px21">
            Innovation is one of the most overused terms in the marketplace.
            Everyone claims it. But Amped lives it. At Amped, innovation is the
            never-ending challenge to improve. Always experimenting. Always
            inventing. Always pushing prototypes beyond the point of breaking
            until we have finally arrived at a solar appliance that meets our
            exacting demands. Innovation is always pushing the boundaries. At
            Amped, innovation is attention to details. It starts with listening
            and watching our customers with an eye to improving the customer
            experience. Then it’s the critical analysis of every component in an
            appliance to find opportunities for efficiency improvement. It ends
            with custom-designed componentry with exceptional materials.
            Innovation makes Amped appliances feel like you live in the city
            while living off-grid. No compromise. At Amped, innovation is our
            people. We’re not a big faceless factory, but rather a workplace of
            innovators who design and build the world’s best solar appliances
            and power generation systems using our minds and hearts. We do it by
            sharing ideas and always asking the next question to find what can
            be done to make this better. Our products are designed one at time
            right here on San Francisco, USA, following hundreds of meticulous
            steps and passing through many sets of hands. We are out there in
            the same places in the same unforgiving conditions that you are.
            Amped Innovation is applied experience. Lifetimes of it.
          </div>
        </div>
      </div>
      <div tw="px-4 lg:px-0 pb-16 lg:pb-48">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-10 gap-4">
          <div tw="col-span-3">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/FullSizeRender 10.png"
              layout="fullWidth"
            />
          </div>
          <div tw="flex flex-col gap-4 col-span-4">
            <div>
              <StaticImage
                alt=""
                loading="eager"
                placeholder="none"
                src="../images/WhatsApp Image 2021-08-24 at 9.38.56 PM (3).png"
                layout="fullWidth"
              />
            </div>
            <div tw="grid grid-cols-2 gap-4">
              <div>
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/Jane Namusisi-3.png"
                  layout="fullWidth"
                />
              </div>
              <div>
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/WhatsApp Image 2021-08-24 at 9.38.56 PM.png"
                  layout="fullWidth"
                />
              </div>
            </div>
          </div>
          <div tw="col-span-3">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/FullSizeRender 3.png"
              layout="fullWidth"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
