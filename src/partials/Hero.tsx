import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          <GradientText>Sociedade Esportiva Palmeiras</GradientText>
        </>
      }
      description={
        <>
          Seja bem vindo ao site do maior campeão do Brasil, o{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Palmeiras
          </a>{'! '}
          O nosso clube é muito tradicional na história do futebol brasileiro, 
          contando com vários títulos dos mais importantes do Brasil e da América do Sul. Além disso, somos o time com maior número de{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            títulos nacionais
          </a>{' '}
          no Brasil, contendo 18 títulos totais a nível nacional. Sobre os títulos internacionais, vale destacar que o Palmeiras está 
          entre os times brasileiros com mais títulos da Copa Libertadores, sendo tricampeão da competição.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="public/assets/images/porcoCompleto.jpg"
          alt="Porco palmeiras"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="public/assets/images/instagram.png"
              alt="Instagram icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="public/assets/images/x.png"
              alt="X icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="public/assets/images/whatsapp.png"
              alt="Whatsapp icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="public/assets/images/tiktok.webp"
              alt="tiktok icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
