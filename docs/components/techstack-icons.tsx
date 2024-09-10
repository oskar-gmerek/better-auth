
import {Icons} from './icons'
type TechStackIconType = {
    [key: string]: {
      name: string;
      icon: any;
    };
  };
export const techStackIcons: TechStackIconType = {
    nextJs: {
        name: "Nextjs",
        icon: <Icons.nextJS className="w-10 h-10" />,
    },
    nuxt: {
        name: "Nuxt",
        icon: <Icons.nuxt className="w-10 h-10" />,
    },
    svelteKit: {
        name: "Svelte Kit",
        icon: <Icons.svelteKit className="w-10 h-10" />,
    },
    solidStart: {
        name: "Solid Start",
        icon: <Icons.solidStart className="w-10 h-10" />,
    },
    react: {
        name: "Reaact",
        icon: <Icons.react className="w-10 h-10" />,
    },
    hono: {
        name: "Hono",
        icon: <Icons.hono className="w-10 h-10" />,
    },
   
  
  };