import React from 'react';
import { iconMap } from './iconMap';
import NotSupportedIcon from '../../assets/icons/not-supported-icon.svg';

type IconProps = {
  type: string;
  width?: number;
  height?: number;
  fill?: string;
};

const IconFactory: React.FC<IconProps> = ({ type, width = 24, height = 24, fill = 'currentColor' }) => {
  const ValidIcon = iconMap[type as keyof typeof iconMap];
  const Icon = ValidIcon || NotSupportedIcon;

  if (!ValidIcon) {
    console.error(`Icon of type "${type}" is not supported`);
  }

  return <img src={Icon} width={width} height={height} style={{ fill }} alt={`${type} icon`} />;
};

export default IconFactory;

