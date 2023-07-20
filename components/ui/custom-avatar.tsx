/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import { FC } from 'react';
import Image from 'next/image';
import { Session } from '@/app/types/sessionType';
import defaultImage from '@/public/images/default_user.png';
import { Avatar, AvatarFallback } from './avatar';

type CustomAvatarProps = (
{
  sessionImage: Session
  onClick?: () => void;
  size?: number
} | {

  imgUrl: string
  onClick?: () => void;
  size?: number
}
);

const CustomAvatar: FC<CustomAvatarProps> = (props) => {
  if ('imgUrl' in props) {
    const { onClick, size, imgUrl } = props;
    return (
    // eslint-disable-next-line react/jsx-props-no-spreading
      <Avatar onClick={onClick} className={size ? ` w-${size} h-${size} overflow-hidden` : ''}>
        {imgUrl ? (
          <div className={`relative w-${size} h-${size} min-h-[${size}px] min-w-[${size}px] `}>
            <Image
              src={imgUrl}
              alt="pfp"
              className="object-cover"
              fill
            />
          </div>

        ) : (
          <AvatarFallback>
            <Image
              src={defaultImage}
              alt="pfp"
              className="object-cover"
              fill
            />
          </AvatarFallback>
        )}

      </Avatar>
    );
  }
  const { onClick, size, sessionImage } = props;
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading

    <Avatar onClick={onClick} className={size ? `w-${size} max-w-[${size}px] h-${size} max-h-[${size}px] overflow-hidden` : ''}>
      {sessionImage?.user?.picture.pictureURL ? (
        <Image
          src={sessionImage?.user?.picture.pictureURL}
          alt="pfp"
          className="object-cover"
          fill
        />
      ) : (
        <AvatarFallback>
          <Image
            src={defaultImage}
            alt="pfp"
            className="object-cover"
            fill
          />
        </AvatarFallback>
      )}

    </Avatar>
  );
};

export default CustomAvatar;
