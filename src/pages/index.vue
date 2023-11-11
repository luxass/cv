<template>
  <div class="hidden print:(flex flex-col gap-y-2)">
    <a href="mailto:mail@luxass.dev" aria-label="Email" class="inline-flex items-center gap-1">
      <span class="i-carbon-email" />

      mail@luxass.dev
    </a>
    <a href="https://github.com/luxass" aria-label="GitHub" class="inline-flex items-center gap-1">
      <span class="i-carbon-logo-github" />
      GitHub:
      <span>github.com/luxass</span>
    </a>

    <a href="https://www.linkedin.com/in/lucasnrgaard/" aria-label="LinkedIn" class="inline-flex items-center gap-1">
      <span class="i-carbon-logo-linkedin" />
      LinkedIn:
      <span>linkedin.com/in/lucasnrgaard</span>
    </a>
  </div>
  <div class="flex flex-col gap-x-4 sm:flex-row sm:items-center sm:justify-between">
    <h1>Lucas Nørgård</h1>
    <div class="flex gap-x-4 print:hidden">
      <a
        href="https://github.com/luxass" aria-label="GitHub"
        class="inline-flex items-center gap-1 transition-transform active:scale-95 no-underline"
      >
        <span class="i-carbon-logo-github" />
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/lucasnrgaard" aria-label="LinkedIn"
        class="inline-flex items-center gap-1 transition-transform active:scale-95 no-underline"
      >
        <span class="i-carbon-logo-linkedin" />
        LinkedIn
      </a>
    </div>
  </div>

  <article>
    <p>
      I'm a software engineer with a strong focus on JavaScript, TypeScript &
      Language Tooling. My passion lies in enhancing developer experience and
      productivity through tooling and automation.
    </p>
  </article>

  <section>
    <h2 class="text-2xl underline underline-offset-8 underline-blue-600">
      Work Experience
    </h2>

    <div>
      <div class="flex flex-wrap print:flex-nowrap print:gap-x-0 justify-between items-center gap-x-6 gap-y-2 mt-8">
        <h3 class="flex items-center gap-1 my-0">
          <svg class="mr-1" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.09785 8.15999C3.71563 8.2311 2.25785 8.33777 2.1334 8.46222C2.02674 8.56888 1.95563 9.03111 1.99118 9.49333L2.04452 10.3289L3.00452 10.6667C3.52007 10.8444 4.16007 11.2 4.42674 11.4489L4.88896 11.9111L4.97785 18.8978L5.06674 25.8667H7.37785H9.68896L9.74229 19.04C9.77785 14.1155 9.84896 12.1422 9.99118 11.9644C10.1512 11.7511 10.6134 11.7155 12.0356 11.7689C13.7601 11.8222 13.8845 11.8578 14.3467 12.32L14.8445 12.8L14.8978 19.3955L14.9512 25.9733L17.2978 25.92L19.6445 25.8667L19.6978 19.04C19.7156 14.3644 19.8045 12.1422 19.929 11.9644C20.1778 11.68 22.5245 11.6444 23.4845 11.9111C24.8178 12.2844 24.7823 12.1244 24.889 18.8622L24.9778 24.8889L25.4756 25.3689C25.9556 25.8489 26.009 25.8667 27.9645 25.8667H29.9556V18.7555C29.9556 10.9511 29.9023 10.4533 28.9423 9.56444C28.1956 8.87111 26.9867 8.56888 24.1778 8.37333C20.9423 8.14222 10.7378 8.01777 6.09785 8.15999Z"
              fill="#990033"
            />
          </svg>

          <span>DIAS, Region Midtjylland</span>
        </h3>

        <time class="whitespace-nowrap">2023-Present</time>
      </div>

      <p>
        DIAS operates within <a href="https://rm.dk" target="_blank" rel="noopener noreferrer">Region Midtjylland</a> a
        key component of the Danish healthcare system. It serves as an essential element in delivering healthcare
        services. We're dedicated to providing customized applications directly to clinicians, ensuring they have the
        tools they need for optimal healthcare delivery.
      </p>
    </div>
  </section>

  <section>
    <p>If you wan't to connect, feel free to <a href="mailto:mail@luxass.dev">reach out</a> to me.</p>
    <p>You can find the <a href="/pdf">PDF Version</a> here.</p>
  </section>
</template>
