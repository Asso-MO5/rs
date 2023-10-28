import { TipeeeIcon } from '../icons/tipeee.icon';

export function Donation() {
  return (
    <a
      className="bg-mo5-tipeee text-white flex gap-3 rounded-md p-3 items-center m-4 mt-1"
      href="https://fr.tipeee.com/association-mo5-com"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center">
        <TipeeeIcon />
      </div>
      <div className="flex items-center h-full">
        <div className="text-centered leading-1 text-2xl pt-1">Rejoindre L'association</div>
      </div>
    </a>
  );
}
