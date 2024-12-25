import BreadCrumbs from "@/components/BreadCrumbs";
import Container from "@/components/Container";
import DocumentItem from "@/components/DocumentItem";
import React from "react";

export interface IDocument {
  name: string,
  type: string,
  size: number,
  sizeUnit: string,
  url: string,
}

const docs: IDocument[] = [
  {
    name: "Оферта «Безопасная сделка»",
    type: "pdf",
    size: 10,
    sizeUnit: "МБ",
    url: "#",
  },
  {
    name: "Политика конфиденциальности ",
    type: "pdf",
    size: 10,
    sizeUnit: "МБ",
    url: "#",
  },
  {
    name: "Оферта",
    type: "pdf",
    size: 10,
    sizeUnit: "МБ",
    url: "#",
  },
]; 

const DocsPage = () => {
    return (
      <Container className="px-3 md:px-0">
        <BreadCrumbs
          links={[{ name: "Главная", url: "/" }, { name: "Документация" }]}
          className="mt-10"
        />
        <h1 className="text-[48px] font-bold text-vulcan leading-[57.6px] mt-5">
          Документация
        </h1>
        <div className="mt-10 flex gap-4 flex-wrap">
          {docs.map((doc, index) => (
            <React.Fragment key={index}>
              <DocumentItem doc={doc} />
            </React.Fragment>
          ))}
        </div>
      </Container>
    );
};


export default DocsPage;