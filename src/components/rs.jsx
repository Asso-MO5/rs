import { DiscordIcon } from '../icons/discord.icon';
import { FacebookIcon } from '../icons/facebook.icon';
import { InstagramIcon } from '../icons/instagram.icon';
import { TiktokIcon } from '../icons/tiktok.icon';
import { TwitchIcon } from '../icons/twitch.icon';
import { XIcon } from '../icons/x.icon';
import { YoutubeIcon } from '../icons/youtube.icon';

const rsLists = [
  {
    Icon: XIcon,
    title: 'X',
    url: 'https://x.com/assomo5',
  },
  {
    Icon: FacebookIcon,
    title: 'Facebook',
    url: 'https://www.facebook.com/AssoMO5/',
  },
  {
    Icon: DiscordIcon,
    title: 'Discord',
    url: 'https://discord.com/invite/phG9zNk',
  },
  {
    Icon: YoutubeIcon,
    title: 'Youtube',
    url: 'https://www.youtube.com/@AssoMO5/?sub_confirmation=1',
  },
  {
    Icon: InstagramIcon,
    title: 'Instagram',
    url: 'https://www.instagram.com/assomo5/',
  },
  {
    Icon: TwitchIcon,
    title: 'Twitch',
    url: 'https://www.twitch.tv/mo5assoretro',
  },
  {
    Icon: TiktokIcon,
    title: 'Tiktok',
    url: 'https://www.tiktok.com/@mo5asso',
  },
];

export function Rs() {
  return (
    <div className="flex gap-2 items-center justify-center py-2">
      {rsLists.map(({ title, Icon, url }) => (
        <a
          key={title}
          href={url}
          alt={`Retrouvez MO5 sur ${title}`}
          title={`Retrouvez MO5 sur ${title}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="fill-mo5-primary px-2 py-1 flex items-center justify-center">
            <Icon />
          </div>
        </a>
      ))}
    </div>
  );
}
