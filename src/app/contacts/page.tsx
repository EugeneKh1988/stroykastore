import BreadCrumbs from "@/components/BreadCrumbs";
import Container from "@/components/Container";


const ContactsPage = () => {
    return (
      <Container className="px-3 md:px-0">
        <BreadCrumbs
          links={[{ name: "Главная", url: "/" }, { name: "Контакты" }]}
          className="mt-10"
        />
        <h1 className="text-[48px] font-bold text-vulcan leading-[57.6px] mt-5">
          Контакты
        </h1>
        <div className="mt-10 flex gap-4 flex-wrap"></div>
      </Container>
    );
};


export default ContactsPage;