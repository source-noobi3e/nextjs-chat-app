import { FC } from 'react'

// now in order to make this component more configurable we can use a third party package known as class-variance-authority which help us defining some variants as shown below

export interface ButtonProps {}

const Button: FC<ButtonProps> = () => {
  return (
    <>
      <button></button>
    </>
  )
}

export default Button
