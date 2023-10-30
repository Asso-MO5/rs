import { QuestionIcon } from '../icons/question.icon';
import { Modal } from './modal';

const links = [
  {
    modal: (
      <div className="font-roboto font-normal">
        <p>
          <b>MO5</b> est une association loi 1901 à but non lucratif, créée le 31 janvier 2003, qui à pour but de
          préserver le patrimoine numérique.
        </p>
        <p>
          Située en proche banlieue parisienne, l’association dispose d’un important local qui permet à ses nombreux
          bénévoles de travailler sereinement à l’accomplissement de sa mission. Grâce à de très nombreux dons depuis sa
          création, celle-ci jouit d’une des plus importantes collections d’Europe dédiée au patrimoine numérique. Cette
          même collection est vouée à intégrer un musée national dédié.
        </p>
      </div>
    ),
    title: 'Qui sommes-nous ?',
    Icon: QuestionIcon,
  },
  {
    url: 'https://micral.mo5.com/',
    title: 'Notre campagne de financement participatif (Micral)',
  },
  {
    url: 'https://mo5.com/',
    title: "Visitez le site de l'association",
  },
  {
    url: 'https://mo5.com/don/',
    title: 'Faire un don matériel',
  },
  {
    url: 'https://mo5.com/expositions/',
    title: 'Tous nos événements',
  },
  {
    url: 'https://mag.mo5.com/',
    title: "Le Mag' MO5",
  },

  {
    url: 'https://mo5.com/contact/',
    title: 'Contactez-nous',
  },
];

export function Links() {
  const classButton = 'text-mo5-primary bg-white rounded-md flex gap-2 items-center p-2';
  return (
    <div className="flex bg-mo5-primary flex-1 flex-col p-4 gap-2">
      {links.map(({ title, url, modal, Icon }) =>
        modal ? (
          <Modal
            key={title}
            button={
              <div className={classButton}>
                <div className="fill-mo5-primary link-icon -m-1">
                  <Icon />
                </div>
                <div className="pt-1">{title}</div>
              </div>
            }
          >
            {modal}
          </Modal>
        ) : (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer" className={classButton}>
            <img src={`http://www.google.com/s2/favicons?domain=${url}`} alt={title} width="16px" height="16px" />
            <div className="pt-1">{title}</div>
          </a>
        )
      )}
    </div>
  );
}
