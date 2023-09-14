import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class='relative'>
      <div class='fixed top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center flex-col gap-12 p-3 w-100 h-screen'>
        <h1 class='color-white'>Cicellion</h1>
        <div class='flex items-center gap-2'>
          <p class='color-white transition ease-in-out duration-200 opacity-20 hover:opacity-100'>Front-End Developer</p>
          <p class='color-white'>/</p>
          <p class='color-white transition ease-in-out duration-200 opacity-20 hover:opacity-100'>Digital Artist</p>
        </div>
      </div>
      <div class='grid grid-cols-5 gap-1 auto-rows-fr ml-[-175px] overflow-x-hidden'>
        <div class='col-start-1 row-start-1 h-350 aspect-[16/9] bg-white rounded contrast-50'></div>
        <div class='col-start-2 row-start-2 h-350 aspect-[16/9] bg-white rounded contrast-50'></div>
        <div class='col-start-3 row-start-4 h-350 aspect-[16/9] bg-white rounded contrast-50'></div>
        <div class='col-start-4 row-start-3 h-350 aspect-[16/9] bg-white rounded contrast-50'></div>
        <div class='col-start-5 row-start-5 h-350 aspect-[16/9] bg-white rounded contrast-50'></div>
      </div>
    </div>
  );
});
