'use client';
import { Inter } from "next/font/google";
import { UserProviderFromProviders } from "@/providers";
import { usePathname } from "next/navigation";
import { isPublicRoute } from "@/functions/isPublic/is-public-route";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


   const pathname = usePathname();

   const isPublicPage = isPublicRoute(pathname!);


   console.log(isPublicPage);

  return (
    <html lang="pt-br">
      <body className={inter.className}>

      <UserProviderFromProviders>

        {children}  

      </UserProviderFromProviders>

        
        </body>
    </html>
  );
}
