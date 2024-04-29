import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Seja <GradientText>Avanti!</GradientText>
        </>
      }
      description="Ser Avanti é fazer parte de um Palmeiras protagonista em campo e equilibrado fora dele, 
      já que 100% da renda do programa vai para o futebol do clube. 
      O amor pelo Verdão é o que nos une e o engajamento da nossa torcida é fundamental para que o clube seja cada vez mais imponente!"
    />
  </Section>
);

export { CTA };
