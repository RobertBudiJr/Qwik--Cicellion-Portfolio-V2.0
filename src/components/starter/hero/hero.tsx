import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class='relative'>
      // Content Fixed Front
      <div class='relative z-1 flex items-center justify-center flex-col gap-12 p-3 w-100 h-screen'>
        <h1 class='color-white'>Cicellion</h1>
        <div class='flex items-center gap-2'>
          <p class='color-white transition ease-in-out duration-200 opacity-20 hover:opacity-100'>Front-End Developer</p>
          <p class='color-white'>/</p>
          <p class='color-white transition ease-in-out duration-200 opacity-20 hover:opacity-100'>Digital Artist</p>
        </div>
      </div>
    </div>
  );
});
