import React from 'react';
import * as NextImage from 'next/image';
import "./article.css"


import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { Article } from './article';

const meta: Meta<typeof Article> = {
  title: 'Molecule/card',
  component: Article,
};

export default meta;
type Story = StoryObj<typeof Article>;
export const CardComponent: Story = {
  args: {
    title: "Card Content",
    image: 'https://dummyimage.com/600x300/000/AAAA',
    buttonText: 'Here'
  },
}

// export const card: Story = {};
