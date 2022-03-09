import * as React from 'react';
import 'twin.macro';

export function ProductCardLandscape({ img, title, caption, action, ...rest }) {
  return (
    <div
      tw="grid grid-cols-1 lg:grid-cols-5 bg-sitegray rounded items-center"
      {...rest}
    >
      <div tw="lg:col-span-2">{img}</div>
      <div tw="lg:col-span-3 p-16">
        <div tw="font-bold text-px18 lg:text-px32 mb-6">{title}</div>
        <div tw="text-px16 lg:text-px18 mb-16 font-circular-regular">
          {caption}
        </div>
        <div>{action}</div>
      </div>
    </div>
  );
}

export default ProductCardLandscape;
