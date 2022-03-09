import * as React from 'react';
import { css } from 'twin.macro';
import Slider from 'react-slick';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Banner from '../components/heroes/buy-wowsolar';
import BuyWowSolar from '../components/sections/buy-wowsolar';
import { SubHeader } from '../components/_/header';
import SliderButton from '../components/btn-slider-arrow';
import PlayIcon from '../assets/ico-play_video.svg';
import Button from '../components/_/button';
import WowSolar from '../components/wowsolar';
import SelectOption from '../components/select-option';
import TeamMap from '../assets/team-map.svg';
import IcoPhone from '../assets/ico-phone.svg';

function ContactCard({ icon, content, label }) {
  return (
    <div tw="bg-sitegray rounded p-8">
      <div tw="mb-8">{icon}</div>
      <div tw="text-px21 font-bold">{content}</div>
      <div tw="text-secondary text-px16">{label}</div>
    </div>
  );
}

const sliderOverride = css`
  & .slick-list,
  & .slick-track {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }

  & .slick-slide > div {
    height: 100%;
  }
`;

const galleryImages = [
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-1.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-2.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-3.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-4.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-5.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-6.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-7.jpg"
  />,
  <StaticImage
    alt=""
    loading="eager"
    placeholder="none"
    src="../images/instagram-8.jpg"
  />,
];

function ContentSlider({
  sliderRef,
  contents = [],
  slidesToShow = 3,
  ...rest
}) {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider
      tw="lg:w-screen lg:-mx-8"
      {...sliderSettings}
      {...rest}
      ref={sliderRef}
    >
      {contents.map((content, idx) => (
        <div tw="min-h-full" key={idx}>
          {content}
        </div>
      ))}
    </Slider>
  );
}

function StorySliderContent({ media, caption, author }) {
  return (
    <div tw="mx-0 lg:mx-8 min-h-full flex flex-col justify-between">
      <div tw="w-full h-80 ">{media}</div>
      <div tw="text-px21 p-8 my-10 bg-sitegray rounded">{caption}</div>
      <div>{author}</div>
    </div>
  );
}

function StoryAuthor({ image, name, address }) {
  return (
    <div tw="flex items-center">
      <div tw="rounded-full w-24 h-24 bg-gray-200 mr-4">{image}</div>
      <div>
        <div tw="text-px28">{name}</div>
        <div tw="text-px16 text-secondary">{address}</div>
      </div>
    </div>
  );
}

function DownloadableContent({ media, title, actions }) {
  return (
    <div tw="mx-8">
      <div
        css={[
          {
            minHeight: 250,
          },
        ]}
      >
        {media}
      </div>
      <div>
        <div tw="text-px28 mt-8">{title}</div>
        <div tw="text-px18 text-secondary">{actions}</div>
      </div>
    </div>
  );
}

function PlayButton({ ...rest }) {
  return (
    <button {...rest}>
      <PlayIcon />
    </button>
  );
}

export default function AmpedStory() {
  const slider1Ref = React.useRef();
  const slider2Ref = React.useRef();
  const slider3Ref = React.useRef();
  const [customerExperiencePlayed, setCustomerExperiencePlayed] =
    React.useState({
      v1: false,
      v2: false,
      v3: false,
      v4: false,
    });
  const [distributorExperiencePlayed, setDistributorExperiencePlayed] =
    React.useState({
      v1: false,
      v2: false,
      v3: false,
      v4: false,
    });

  return (
    <Layout pageTitle="Buy WowSolar">
      <Banner />
      <div tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="lg:w-9/12 m-auto grid grid-cols-1 lg:grid-cols-5">
          <SubHeader tw="col-span-2 mb-8 lg:mb-0 leading-normal">
            Supporting African Business
          </SubHeader>
          <div tw="col-span-3 text-px21">
            Amped currently does not sell products directly through this
            website. However, Amped works with dozens of distributors in 23
            countries globally. Feel free to reach out to us directly if you
            would like to purchase a WOWsolar product, and our sales team can
            connect you to one or more distributors that service your region.
            They will be able to sell you WOWsolar products.
          </div>
        </div>
      </div>

      <div tw="px-4 lg:px-0 lg:w-9/12 mx-auto py-16 pb-48">
        <div tw="grid grid-cols-1 lg:grid-cols-5">
          <div tw="text-px32 font-circular-bold col-span-2 mb-8 lg:mb-0 pr-16 leading-normal">
            Buy WowSolar&trade;
          </div>
          <div tw="col-span-3 text-px21">
            <div tw="mb-8">
              Amped works with dozens of distributors in 23 countries on the
              Continent. Our sales team can connect you to any of our partners
              in your country
            </div>
            <div tw="mb-4">
              <div tw="mb-4">Select a Country</div>
              <SelectOption tw="w-full">
                <option>Kenya</option>
              </SelectOption>
              <div tw="flex justify-center items-center">
                <TeamMap />
              </div>
              <div tw="grid grid-cols-2 justify-between gap-8">
                <ContactCard
                  icon={
                    <div>
                      <IcoPhone />
                    </div>
                  }
                  content={
                    <div tw="mb-6">
                      <div tw="mb-4">info@solariumsolar.ke</div>
                      <div>1-888-502-2236</div>
                    </div>
                  }
                  label="Solarium Solar"
                />
                <ContactCard
                  icon={
                    <div>
                      <IcoPhone />
                    </div>
                  }
                  content={
                    <div tw="mb-6">
                      <div tw="mb-4">info@mwezisolar.ke</div>
                      <div>1-888-502-2236</div>
                    </div>
                  }
                  label="Mwezi Solar"
                />
                <ContactCard
                  icon={
                    <div>
                      <IcoPhone />
                    </div>
                  }
                  content={
                    <div tw="mb-6">
                      <div tw="mb-4">info@economesolar.ke</div>
                      <div>1-888-502-2236</div>
                    </div>
                  }
                  label="Econome Solar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div tw="bg-sitegray">
        <BuyWowSolar />
      </div>

      <div tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="text-px54 text-center mb-16 lg:mb-32">
          <div>
            <a href="#/" tw="break-all">
              #AmpedInnovationRedefiningSolar
            </a>
          </div>
        </div>
        <div tw="gap-2 lg:gap-8 grid grid-cols-1 lg:grid-cols-4 lg:w-9/12 mx-auto">
          {galleryImages.map((image, idx) => (
            <div key={idx}>{image}</div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
