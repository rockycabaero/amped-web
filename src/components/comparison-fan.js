import * as React from 'react';
import 'twin.macro';
import SVGLight from '../assets/ico-light.svg';
import SVGSolarPanel from '../assets/ico-solar-panel.svg';
import SVGRadio from '../assets/ico-radio.svg';
import WowSolar from './wowsolar';
import SVGBattery from '../assets/ico-batter.svg';

export function ComparisonTableFan() {
  return (
    <table
      className="table-auto"
      tw="border border-tableborder text-base w-full"
    >
      <thead tw="text-px16 text-left text-primary font-circular-bold">
        <tr>
          <th tw="p-3.5 border-2 border-tableborder font-normal">Products</th>
          <th tw="p-3.5 border-2 border-tableborder font-normal">
            <div tw="mb-4">
              <SVGBattery css={[{ width: 40 }]} />
            </div>
            <div>Included Battery </div>
          </th>
          <th tw="p-3.5 border-2 border-tableborder font-normal">
            <div tw="pb-4">
              <SVGSolarPanel css={[{ width: 40 }]} />
            </div>
            <div>Solar Panel</div>
          </th>
          <th tw="p-3.5 border-2 border-tableborder font-normal">
            <div tw="mb-4">
              <SVGLight css={[{ width: 40 }]} />
            </div>
            <div>Lights </div>
          </th>
          <th tw="p-3.5 border-2 border-tableborder font-normal">
            <div tw="pb-4">
              <SVGRadio css={[{ width: 40 }]} />
            </div>
            <div>Radio and Torch Available</div>
          </th>
        </tr>
      </thead>
      <tbody tw="bg-white text-px18 font-circular-book">
        <tr>
          <td tw="border border-tableborder p-3.5">
            <WowSolar tw="text-px18" model={'FAN 16100'} />
          </td>
          <td tw="border border-tableborder p-3.5">100Whr</td>
          <td tw="border border-tableborder p-3.5">40W</td>
          <td tw="border border-tableborder p-3.5">3</td>
          <td tw="border border-tableborder p-3.5">Yes, Upon Request</td>
        </tr>
        <tr>
          <td tw="border border-tableborder p-3.5">
            <WowSolar tw="text-px18" model={'TV 32120'} />
          </td>
          <td tw="border border-tableborder p-3.5">120Whr</td>
          <td tw="border border-tableborder p-3.5">40W</td>
          <td tw="border border-tableborder p-3.5">4</td>
          <td tw="border border-tableborder p-3.5">Yes, Upon Request</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ComparisonTableFan;
