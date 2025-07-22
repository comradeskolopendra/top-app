declare module '*.svg' {
    import { FC, SVGAttributes } from 'react'
    const content: FC<SVGAttributes<SVGElement>>
    export default content
  }
  
  declare module '*.svg?url' {
    const content: SVGElement;
    export default content
  }