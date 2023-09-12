import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/starter/hero/hero';

export default component$(() => {
  return (
    <>
      <div class='font-primary'>
        <Hero />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Cicellion',
  meta: [
    {
      name: 'description',
      content: "Cicellion's Portfolio",
    },
  ],
};
