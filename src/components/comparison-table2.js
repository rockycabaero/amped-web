import * as React from 'react';
import 'twin.macro';
import SvgLight from '../assets/ico-light.svg';

import SvgSolarPanel from '../assets/ico-solar-panel.svg';

import SvgBattery from '../assets/ico-batter.svg';
import SvgTv from '../assets/ico-tv.svg';
import WowSolar from './wowsolar';

export function ComparisonTable2() {
  return (
    <table
      className="table-auto"
      tw="border border-tableborder text-base w-full"
    >
      <thead tw="text-px14 lg:text-px16 text-left text-primary font-circular-bold">
        <tr>
          <th tw="p-3.5 border-2 border-tableborder font-normal">Products</th>
          <th tw="p-3.5 border-2 border-tableborder font-normal">
            <div tw="mb-4">
              <SvgBattery css={[{ width: 40 }]} />
            </div>
            <div>Included Battery </div>
          </th>
          <th tw="p-3.5 border-2 border-tableborder font-normal">
            <div tw="pb-4">
              <SvgSolarPanel css={[{ width: 40 }]} />
            </div>
            <div>Solar Panel</div>
          </th>
          <th tw="p-3.5 border-2 border-tableborder font-normal">
            <div tw="pb-4">
              <SvgTv css={[{ width: 40 }]} />
            </div>
            <div>TV Screen Size</div>
          </th>
          <th tw="p-3.5 border-2 border-tableborder font-normal">
            <div tw="mb-4">
              <SvgLight css={[{ width: 40 }]} />
            </div>
            <div>Number of Lamps </div>
          </th>
        </tr>
      </thead>
      <tbody tw="text-default text-px14 lg:text-px18 bg-white">
        <tr>
          <td tw="border border-tableborder p-3.5">
            <WowSolar tw="text-px14 lg:text-px18" model={'TV 24100'} />
          </td>
          <td tw="border border-tableborder p-3.5">100Whr</td>
          <td tw="border border-tableborder p-3.5">40W</td>
          <td tw="border border-tableborder p-3.5">24”</td>
          <td tw="border border-tableborder p-3.5">4 (10 Maximum)</td>
        </tr>
        <tr>
          <td tw="border border-tableborder p-3.5">
            <WowSolar tw="text-px14 lg:text-px18" model={'TV 32120'} />
          </td>
          <td tw="border border-tableborder p-3.5">120Whr</td>
          <td tw="border border-tableborder p-3.5">40W</td>
          <td tw="border border-tableborder p-3.5">32”</td>
          <td tw="border border-tableborder p-3.5">4 (10 Maximum)</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ComparisonTable2;
