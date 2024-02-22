import { APP_ROUTER } from "@/constants/routes/app-routes";

export const isPublicRoute = ( asPath:string )=>{
    
  const appPublicRoute = Object.values(APP_ROUTER.public);

  return appPublicRoute.includes(asPath);




}