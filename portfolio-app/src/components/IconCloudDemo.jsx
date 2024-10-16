import IconCloud from "../components/magicui/icon-cloud";
import traingle from "../assets/triangle.png"



const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
 
export function IconCloudDemo() {
  return (
    <div className="relative flex w-full h-screen animate-[ping_1.5s_ease-in-out_1_4s] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 custom-gradient -z-10 ">
      <IconCloud iconSlugs={slugs} />
      
     {/* <img src={traingle} className="absolute -z-10 " style={{ width: '120px',color:"#64FFDA",}}stroke={1.5}/> */}
      <div className="absolute  font-mono text-yellow-400 flex font-semibold text-5xl -z-10 mt-3">  
        OG
      </div>
    </div>
  );
}