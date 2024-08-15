// public/svgs/index.ts
import IconNext from './next.svg'
import IconVercel from './vercel.svg'

// eslint-disable-next-line prettier/prettier
export {
  IconNext,
  IconVercel
}

// 이렇게 해주면 나중에 컴포넌트에서 svg 땡겨 쓸 때 바로 <IconNext /> 이런 식으로 편리하게 쓸 수 있다.
// 아직도 <img src='/svgs/next.svg'> 이렇게 쓰고 있니?
