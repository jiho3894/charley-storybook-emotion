import { Meta } from '@storybook/react';
import { Fragment } from 'react';
import { TIconColor, TIconSize } from '../type';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'TTDS/Basic/Icon',
};

export default meta;

export const Variant = () => {
  const sizes = ['24px', '16px'] as TIconSize[];
  const colors = ['BGray', 'Black', 'WGray', 'White', 'Primary'] as TIconColor[];
  const colorsPlus = [...colors, 'Error'] as TIconColor[];
  return (
    <>
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colors.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Close_Line" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colorsPlus.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Alert_Circle" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colorsPlus.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Eye" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colorsPlus.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Eye_Slash" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colors.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Chevron_Left" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colors.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Chevron_Right" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colors.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Chevron_Right" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colors.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Arrow_Top" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colors.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Refresh" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colors.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Play_Start" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colors.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Play_Pause" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colors.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Play_Stop" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colors.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Play_Mic" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
