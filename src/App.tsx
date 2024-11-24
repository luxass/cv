import { GitHubIcon, LinkedInIcon, MailIcon } from "./components/icons";

export function App() {
  return (
    <div className="min-h-screen bg-white print:min-h-0 print:p-6">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 print:px-4">
        <header className="mb-16 text-center print:mb-8">
          <h1 className="text-4xl font-light text-gray-900 mb-2 print:text-3xl">
            Lucas Nørgård
          </h1>
          <div className="flex justify-center space-x-4 text-gray-600 print:text-sm">
            <a
              href="mailto:lucasnrgaard@gmail.com"
              className="flex items-center hover:text-gray-900"
            >
              <MailIcon />
              <span className="text-sm print:text-xs">
                lucasnrgaard@gmail.com
              </span>
            </a>
            <a
              href="https://linkedin.com/in/luxass"
              className="flex items-center hover:text-gray-900"
            >
              <LinkedInIcon />
              <span className="text-sm print:text-xs">@luxass</span>
            </a>
            <a
              href="https://github.com/luxass"
              className="flex items-center hover:text-gray-900"
            >
              <GitHubIcon />
              <span className="text-sm print:text-xs">@luxass</span>
            </a>
          </div>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto text-left print:text-sm print:mt-4">
            I'm a software engineer with a strong focus on JavaScript,
            TypeScript & Language Tooling. I'm passionate about open source and
            I love to contribute to the community.
            <br />
            I'm currently working as a DevOps Engineer at Region Midtjylland,
            where I help maintain a robust Kubernetes cluster and manage
            critical microservices.
          </p>
        </header>

        <section className="mb-12 print:mb-6">
          <h2 className="text-2xl font-light text-gray-900 mb-4 pb-2 border-b print:text-xl print:mb-2">
            Experience
          </h2>
          <div className="space-y-6 print:space-y-3">
            <div>
              <h3 className="text-lg font-medium text-gray-900 print:text-base">
                Software Developer
              </h3>
              <p className="text-gray-600 mb-2 print:text-sm print:mb-1">
                Region Midtjylland | May 2023 - September 2024
              </p>

              <p className="text-gray-700 text-sm print:text-xs">
                As a Software Developer at Region Midtjylland from May 2023 to
                September 2024, I developed clinician-facing solutions to
                enhance daily workflows, implemented features to protect
                clinicians during their work, improved efficiency and safety in
                clinical environments, and focused on user-friendly interfaces
                for a better clinician experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 print:text-base">
                DevOps Engineer
              </h3>
              <p className="text-gray-600 mb-2 print:text-sm print:mb-1">
                Region Midtjylland | September 2024 - Present
              </p>
              <p className="text-gray-700 text-sm print:text-xs">
                As a DevOps Engineer at Region Midtjylland from September 2024
                to Present, I play a crucial role in ensuring the timely
                completion of solutions by assisting various teams. My
                responsibilities include collaborating with my team to maintain
                a robust Kubernetes cluster, which is essential for the
                deployment and scaling of applications. Additionally, we manage
                several critical microservices that are vital to the
                organization's operations, ensuring they run smoothly and
                efficiently.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 print:mb-6">
          <h2 className="text-2xl font-light text-gray-900 mb-4 pb-2 border-b print:text-xl print:mb-2">
            Open Source Projects
          </h2>
          <p className="text-gray-700 text-sm mb-6 print:text-xs print:mb-3">
            Here are some notable open source projects I have contributed to and
            maintain. These range from developer tools to utility libraries.
          </p>
          <div className="space-y-6 print:space-y-3">
            <div className="rounded-lg text-card-foreground shadow-xs bg-primary/5 hover:bg-primary/10 transition-colors print:bg-transparent print:hover:bg-transparent print:shadow-none border print:border-gray-200">
              <div className="flex flex-col space-y-1.5 p-6 print:p-2">
                <div className="text-2xl font-semibold leading-none tracking-tight print:text-base">
                  <a
                    href="https://github.com/luxass/vitest-testdirs"
                    className="hover:underline"
                  >
                    vitest-testdirs
                  </a>
                </div>
                <div className="text-sm text-muted-foreground print:text-xs">
                  A utility for Vitest to create isolated test directories
                </div>
              </div>
              <div className="p-6 pt-0 print:p-2">
                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/luxass/vitest-testdirs"
                    className="text-sm text-gray-600 hover:underline print:text-xs"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-lg text-card-foreground shadow-xs bg-primary/5 hover:bg-primary/10 transition-colors print:bg-transparent print:hover:bg-transparent print:shadow-none border print:border-gray-200">
              <div className="flex flex-col space-y-1.5 p-6 print:p-2">
                <div className="text-2xl font-semibold leading-none tracking-tight print:text-base">
                  <a
                    href="https://github.com/luxass/unplugin-yaml"
                    className="hover:underline"
                  >
                    unplugin-yaml
                  </a>
                </div>
                <div className="text-sm text-muted-foreground print:text-xs">
                  A unplugin that allow import of yaml files
                </div>
              </div>
              <div className="p-6 pt-0 print:p-2">
                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/luxass/unplugin-yaml"
                    className="text-sm text-gray-600 hover:underline print:text-xs"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
