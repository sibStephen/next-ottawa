import React from 'react';
import Image from "next/image"
import PropTypes from 'prop-types';
import {Button} from '../button/Button';

/**
 * Primary UI component for user interaction
 */

export const Article = ({ title, image, buttonText, ...props }) => {
  return (
    <div className="card pt-0 lg:pt-[114px] px-8 w-full">
      <p>
        {title}
      </p>
      <Image
        src={image}
        width={768}
        height={480}
        style={{'object-fit': 'contain'}}
        alt={image}
      />
      <Button 
        backgroundColor={"red"}
        size='large'
        label={buttonText}
      />
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  buttonText: PropTypes.string,
};
