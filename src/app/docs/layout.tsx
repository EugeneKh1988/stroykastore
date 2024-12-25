import CategoriesList from "@/components/CategoriesList";
import FooterBlock from "@/components/FooterBlock";
import Nav from "@/components/Nav";
import Toolbar from "@/components/Toolbar";


export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <Toolbar />
      <CategoriesList />
      {children}
      <FooterBlock />
    </>
  );
}
