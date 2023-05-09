// /stories/pages/home.stories.jsx

import Home from "../../pages/index";
import * as NextImage from 'next/image';

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized/>,
});

export default {
  title: "Pages/Home",
  component: Home,
};

const Template = (args) => <Home {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const HomePage = () => <Home />

