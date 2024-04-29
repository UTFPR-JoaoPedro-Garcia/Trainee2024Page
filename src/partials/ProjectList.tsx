import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>Mais do Palmeiras</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Palmeiras Store"
        description="A loja oficial da Sociedade Esportiva Palmeiras"
        link="/"
        img={{
          src: '/public/assets/images/store.jpg',
          alt: 'Store',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Camisetas</Tags>
            <Tags color={ColorTags.LIME}>Bermudas</Tags>
            <Tags color={ColorTags.SKY}>Bonés</Tags>
            <Tags color={ColorTags.ROSE}>Bolas</Tags>
          </>
        }
      />
      <Project
        name="Notícias"
        description="Mais sobre as notícias acerca de transferências, jogos, resultados e outros assuntos do Verdão."
        link="/"
        img={{ src: '/public/assets/images/noticias.jpg', alt: 'Noticias' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Próximos jogos</Tags>
            <Tags color={ColorTags.EMERALD}>Transferências</Tags>
            <Tags color={ColorTags.YELLOW}>Resultados</Tags>
          </>
        }
      />
      <Project
        name="Mascotes"
        description="Conheça nossos dois principais mascotes, o Gobatto e o Periquito!"
        link="/"
        img={{ src: '/public/assets/images/mascotes.webp', alt: 'Mascotes' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Gobatto</Tags>
            <Tags color={ColorTags.INDIGO}>Periquito</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
