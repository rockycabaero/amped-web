import * as React from 'react';
import 'twin.macro';

export function Button({ path, text, ...rest }) {
  return (
    <a
      href={path}
      tw="font-kallisto font-bold inline-block text-white rounded py-4 lg:px-16 px-4 w-full lg:w-auto text-center"
      css={[{ backgroundColor: '#FC4803' }]}
      {...rest}
    >
      {text}
    </a>
  );
}

export default Button;
