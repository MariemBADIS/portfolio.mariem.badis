import { easeInOut, motion } from "motion/react";

export const SkillsSection = () => {
  const skills = {
    "Frontend Development": [
      { name: "Angular 14–20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "React", icon: "/src/assets/icons/skills-icon/react-js.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript (ES6+)", icon: "/src/assets/icons/skills-icon/javascript.svg" },
      { name: "HTML5", icon: "/src/assets/icons/skills-icon/html.svg" },
      { name: "SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    ],
    "Architecture & State Management": [
      { name: "NgRx", icon: "https://raw.githubusercontent.com/ngrx/platform/master/docs/assets/ngrx-logo.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "RxJS", icon: "https://rxjs.dev/assets/images/logos/rxjs/rxjs.svg" },
      { name: "Modular Architecture", icon: null },
      { name: "Micro-Frontends", icon: null },
      { name: "Component-Based Design", icon: null },
      { name: "NX Monorepo", icon: "https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.svg" },
      { name: "SOLID Principles", icon: null },
    ],
    "Performance & Quality": [
      { name: "Lazy Loading", icon: null },
      { name: "Code Splitting", icon: null },
      { name: "Core Web Vitals", icon: null },
    ],
    "APIs & Security": [
      { name: "REST & GraphQL APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { name: "JWT Authentication", icon: null },
      { name: "Keycloak", icon: "https://www.keycloak.org/resources/images/keycloak_logo_200px.svg" },
      { name: "NestJS", icon: "https://nestjs.com/img/logo-small.svg" },
      { name: "Node.js", icon: "/src/assets/icons/skills-icon/nodejs.svg" },
      { name: "Java/Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    ],
    "UI & Design Systems": [
      { name: "Angular Material", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "PrimeNG", icon: "https://raw.githubusercontent.com/primefaces/primeng/master/src/assets/images/primeng-logo.png" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Material-UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    ],
    "DevOps & Tooling": [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
      { name: "ESLint", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" },
      { name: "SonarQube", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
      { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
      { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
      { name: "Agile / Scrum / Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Figma", icon: "/src/assets/icons/skills-icon/figma.svg" },
    ],
  };

  return (
    <>
      <div id="Skills" className="flex justify-center min-h-screen py-20">
        <div className="w-full px-2 max-w-[80rem] h-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ amount: 0.3 }}
            className="text-white text-4xl md:text-5xl tracking-wide font-semibold mb-12 text-center"
          >
            Skills
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ amount: 0.3 }}
                className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-color2/50 transition-all"
              >
                <h3 className="text-color2 text-lg font-bold mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {items.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: categoryIndex * 0.08 + index * 0.02, ease: [0.25, 0.46, 0.45, 0.94] }}
                      viewport={{ amount: 0.3 }}
                      className="bg-white/5 rounded-md p-2 border border-white/10 hover:border-color2/50 hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                      {skill.icon ? (
                        <img 
                          src={skill.icon} 
                          alt={`${skill.name} icon`}
                          className="w-4 h-4 object-contain flex-shrink-0" 
                          loading="lazy"
                        />
                      ) : null}
                      <span className="text-white/80 text-xs truncate">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
