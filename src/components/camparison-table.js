import * as React from 'react';
import 'twin.macro';
import SVGLight from '../assets/ico-light.svg';
import SVGPayGo from '../assets/ico-paygo-controller.svg';
import SVGSolarPanel from '../assets/ico-solar-panel.svg';
import SVGRadio from '../assets/ico-radio.svg';
import SVGTorch from '../assets/ico-torch.svg';
import SVGPowerInput from '../assets/ico-power-input.svg';
import SVGPowerOutput from '../assets/ico-power-output.svg';
import WowSolar from './wowsolar';

export function ComparisonTable() {
  return (
    <table
      className="table-auto"
      tw="border border-gray-200 text-px16 w-full rounded-md"
    >
      <thead tw="text-px14 lg:text-px16 text-left text-primary font-circular-bold">
        <tr>
          <th tw="p-3.5 border-2 border-gray-200">Products</th>
          <th tw="p-3.5 border-2 border-gray-200">
            <div tw="mb-4">
              <SVGLight css={[{ width: 40 }]} />
            </div>
            <div>Lighting System </div>
            <div>Configuration</div>
          </th>
          <th tw="p-3.5 border-2 border-gray-200">
            <div tw="pb-4">
              <SVGPayGo css={[{ width: 40 }]} />
            </div>
            <div>PAYGO</div>
            <div>Controller</div>
          </th>
          <th tw="p-3.5 border-2 border-gray-200">
            <div tw="pb-4">
              <SVGSolarPanel css={[{ width: 40 }]} />
            </div>
            <div>Solar</div> <div>Panel</div>
          </th>
          <th tw="p-3.5 border-2 border-gray-200">
            <div tw="pb-4">
              <SVGRadio css={[{ width: 40 }]} />
            </div>
            <div>Radio with </div>
            <div>Inbuilt Torch</div>
          </th>
          <th tw="p-3.5 border-2 border-gray-200">
            <div tw="pb-4">
              <SVGTorch css={[{ width: 40 }]} />
            </div>
            <div>Standalone</div>
            <div> Metal Torch</div>
          </th>
          <th tw="p-3.5 border-2 border-gray-200">
            <div tw="pb-4">
              <SVGPowerInput css={[{ width: 40 }]} />
            </div>
            <div>Max Power</div>
            <div>Input</div>
          </th>
          <th tw="p-3.5 border-2 border-gray-200">
            <div tw="pb-4">
              <SVGPowerOutput css={[{ width: 40 }]} />
            </div>
            <div>Max Power</div>
            <div> Output</div>
          </th>
          <th tw="p-3.5 border-2 border-gray-200">
            <div tw="pb-4">
              <SVGSolarPanel css={[{ width: 40 }]} />
            </div>
            <div>Upgradeable</div>
            <div> to TV & Fan</div>
          </th>
        </tr>
      </thead>
      <tbody
        tw="bg-white text-px14 lg:text-px18 font-circular-book"
        css={[{ color: '#1C212B' }]}
      >
        <tr>
          <td rowSpan="2" tw="p-3.5 border-2 border-gray-200">
            <WowSolar model={60} />
          </td>
          <td tw="p-3.5 border border-gray-200 text-px16">
            3-Point w/ 3 hanging lamps
          </td>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            20Whr
          </td>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            6W
          </td>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            No
          </td>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            No
          </td>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            50W
          </td>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            120W
          </td>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            Yes
          </td>
        </tr>
        <tr>
          <td tw="p-3.5 border border-gray-200 text-px16">
            4-Point w/ 4 hanging lamps
          </td>
        </tr>
        <tr>
          <td rowSpan="2" tw="p-3.5 border-2 border-gray-200">
            <WowSolar model={100} />
          </td>
          <td tw="p-3.5 border-2 border-gray-200 text-px16">
            4-Point w/ 3 hanging lamps
          </td>
          <td rowSpan="2" tw="p-3.5 border-2 border-gray-200">
            20Whr
          </td>
          <td rowSpan="2" tw="p-3.5 border-2 border-gray-200">
            10W
          </td>
          <td rowSpan="2" tw="p-3.5 border-2 border-gray-200">
            Yes
          </td>
          <td rowSpan="2" tw="p-3.5 border-2 border-gray-200">
            No
          </td>
          <td rowSpan="2" tw="p-3.5 border-2 border-gray-200">
            50W
          </td>
          <td rowSpan="2" tw="p-3.5 border-2 border-gray-200">
            120W
          </td>
          <td rowSpan="2" tw="p-3.5 border-2 border-gray-200">
            Yes
          </td>
        </tr>
        <tr>
          <td tw="p-3.5 border border-gray-200 text-px16">
            5-Point w/ 4 hanging lamps
          </td>
        </tr>
        <tr>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            <WowSolar model={400} />
          </td>
          <td tw="p-3.5 border border-gray-200 text-px16">
            5-Point w/ 3 hanging lamps
          </td>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            40Whr
          </td>
          <td tw="p-3.5 border border-gray-200">15W</td>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            Yes
          </td>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            Yes
          </td>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            55W
          </td>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            120W
          </td>
          <td rowSpan="2" tw="p-3.5 border border-gray-200">
            Yes
          </td>
        </tr>
        <tr>
          <td tw="p-3.5 border border-gray-200 text-px16">
            6-Point w/ 4 hanging lamps
          </td>
          <td tw="p-3.5 border border-gray-200">20W</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ComparisonTable;
